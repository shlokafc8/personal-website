import Link from "next/link";

const navItems = [
  { label: "ABOUT", href: "/#about" },
  { label: "WRITING", href: "/#writing" },
  { label: "BOOKSHELF", href: "/#bookshelf" },
  { label: "TRAVEL", href: "/#travel" }
];

export function HeaderNav() {
  return (
    <nav className="flex flex-wrap gap-4 text-xs tracking-[0.25em]">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="border-b border-transparent pb-1 text-accent/80 transition hover:text-accent"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
