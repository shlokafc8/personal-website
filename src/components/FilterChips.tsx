"use client";

type Chip = {
  id: string;
  label: string;
};

type FilterChipsProps = {
  chips: Chip[];
  active: string;
  onChange: (id: string) => void;
};

export function FilterChips({ chips, active, onChange }: FilterChipsProps) {
  return (
    <div className="flex flex-nowrap gap-2 whitespace-nowrap">
      {chips.map((chip) => {
        const isActive = chip.id === active;
        return (
          <button
            key={chip.id}
            type="button"
            onClick={() => onChange(chip.id)}
            className={`border px-3 py-1 text-xs tracking-[0.2em] transition ${
              isActive
                ? "border-[var(--accent)] text-[var(--text)]"
                : "border-subtle text-[var(--text)] opacity-70 hover:opacity-100"
            }`}
          >
            {chip.label}
          </button>
        );
      })}
    </div>
  );
}
