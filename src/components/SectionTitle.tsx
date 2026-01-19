type SectionTitleProps = {
  title: string;
};

export function SectionTitle({ title }: SectionTitleProps) {
  return (
    <div className="flex items-center gap-4">
      <h2 className="text-sm font-semibold tracking-[0.3em] text-[var(--accent)]">{title}</h2>
      <div className="h-px flex-1 border-t border-subtle" />
    </div>
  );
}
