"use client";

type SearchInputProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
};

export function SearchInput({ value, onChange, placeholder }: SearchInputProps) {
  return (
    <div className="w-full">
      <input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="w-full border border-subtle bg-white px-4 py-2 text-sm text-[var(--text)] outline-none transition placeholder:text-[var(--text)]/60 focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20"
        aria-label={placeholder}
      />
    </div>
  );
}
