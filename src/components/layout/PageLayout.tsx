interface PageLayoutProps {
  children: React.ReactNode;
  maxWidth?: string;
}

export default function PageLayout({
  children,
  maxWidth = "max-w-[520px]",
}: PageLayoutProps) {
  return (
    <div className="px-8 py-[120px]">
      <div className={`w-full ${maxWidth} mx-auto space-y-12`}>{children}</div>
    </div>
  );
}
