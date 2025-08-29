interface PageLayoutProps {
  children: React.ReactNode;
  maxWidth?: string;
}

export default function PageLayout({
  children,
  maxWidth = "max-w-md",
}: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-[#FEFBF6]">
      <div className="px-8 py-[120px]">
        <div className={`w-full ${maxWidth} mx-auto space-y-12`}>
          {children}
        </div>
      </div>
    </div>
  );
}
