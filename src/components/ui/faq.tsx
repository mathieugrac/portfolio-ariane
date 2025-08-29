"use client";

import { useState, useEffect, useCallback } from "react";
import { marked } from "marked";
import { FAQSection, loadMarkdownContent } from "@/lib/faq-content";

interface FAQProps {
  sections: FAQSection[];
  defaultOpenId?: string;
}

export function FAQ({ sections, defaultOpenId }: FAQProps) {
  const [openSections, setOpenSections] = useState<Set<string>>(
    new Set(defaultOpenId ? [defaultOpenId] : [sections[0]?.id])
  );
  const [contentCache, setContentCache] = useState<Record<string, string>>({});
  const [loadingStates, setLoadingStates] = useState<Record<string, boolean>>(
    {}
  );

  const toggleSection = (sectionId: string) => {
    setOpenSections((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(sectionId)) {
        newSet.delete(sectionId);
      } else {
        newSet.add(sectionId);
      }
      return newSet;
    });
  };

  const isOpen = useCallback(
    (sectionId: string) => openSections.has(sectionId),
    [openSections]
  );

  // Load markdown content when section is opened
  useEffect(() => {
    const loadContent = async (section: FAQSection) => {
      if (!contentCache[section.id] && !loadingStates[section.id]) {
        setLoadingStates((prev) => ({ ...prev, [section.id]: true }));

        try {
          const content = await loadMarkdownContent(section.contentFile);
          setContentCache((prev) => ({ ...prev, [section.id]: content }));
        } catch (error) {
          console.error(`Failed to load content for ${section.id}:`, error);
        } finally {
          setLoadingStates((prev) => ({ ...prev, [section.id]: false }));
        }
      }
    };

    // Load content for all open sections
    sections.forEach((section) => {
      if (isOpen(section.id)) {
        loadContent(section);
      }
    });
  }, [openSections, contentCache, loadingStates, sections, isOpen]);

  const renderMarkdownContent = (content: string) => {
    try {
      // Configure marked for cleaner output
      marked.setOptions({
        breaks: true,
        gfm: true,
      });

      // Parse markdown to HTML
      const htmlContent = marked(content);

      return (
        <div
          className="faq-markdown-content"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      );
    } catch (error) {
      console.error("Error parsing markdown:", error);
      return <p className="text-foreground">{content}</p>;
    }
  };

  return (
    <div className="w-full space-y-0">
      {sections.map((section, index) => (
        <div key={section.id} className="w-full">
          {/* Section Header */}
          <button
            onClick={() => toggleSection(section.id)}
            className="w-full flex items-center justify-between py-4 px-0 border-none bg-transparent cursor-pointer hover:opacity-80 transition-opacity"
            aria-expanded={isOpen(section.id)}
            aria-controls={`faq-content-${section.id}`}
            id={`faq-header-${section.id}`}
          >
            <h2 className="text-left m-0">{section.title}</h2>
            <div className="flex-shrink-0 ml-4">
              {isOpen(section.id) ? (
                <svg
                  className="w-5 h-5 text-foreground"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 12H4"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5 text-foreground"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              )}
            </div>
          </button>

          {/* Section Content */}
          <div
            id={`faq-content-${section.id}`}
            className={`overflow-hidden transition-all duration-200 ${
              isOpen(section.id) ? "opacity-100" : "max-h-0 opacity-0"
            }`}
            aria-labelledby={`faq-header-${section.id}`}
            role="region"
          >
            {loadingStates[section.id] ? (
              <div className="text-foreground opacity-70">Carregando...</div>
            ) : contentCache[section.id] ? (
              renderMarkdownContent(contentCache[section.id])
            ) : (
              <div className="text-foreground opacity-70">
                Clique para carregar o conteúdo
              </div>
            )}
          </div>

          {/* Divider (except for last section) */}
          {index < sections.length - 1 && (
            <div className="w-full h-px bg-border" />
          )}
        </div>
      ))}
    </div>
  );
}
