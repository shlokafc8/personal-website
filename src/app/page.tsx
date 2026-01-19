import Image from "next/image";
import aboutContent from "@/content/about.json";
import { PageContainer } from "@/components/PageContainer";
import { SectionTitle } from "@/components/SectionTitle";
import { BookshelfSection } from "@/components/BookshelfSection";
import { TravelSection } from "@/components/TravelSection";

type AboutItem = { text: string; href?: string };
type WritingItem = { title: string; source: string; year: string; href: string };

const writingItems: WritingItem[] = [
  {
    title: "first week at network school",
    source: "SUBSTACK",
    year: "2024",
    href: "https://actofshlok.substack.com/p/first-week-at-network-school"
  },
  {
    title: "i hate running",
    source: "SUBSTACK",
    year: "2024",
    href: "https://actofshlok.substack.com/p/i-hate-running"
  },
  {
    title: "long road to recovery",
    source: "SUBSTACK",
    year: "2024",
    href: "https://actofshlok.substack.com/p/long-road-to-recovery"
  },
  {
    title: "whoop: is it worth it",
    source: "SUBSTACK",
    year: "2024",
    href: "https://actofshlok.substack.com/p/whoop-is-it-worth-it"
  },
  {
    title: "quick 2024 recap",
    source: "SUBSTACK",
    year: "2024",
    href: "https://actofshlok.substack.com/p/quick-2024-recap"
  },
  {
    title: "work & play from thailand",
    source: "SUBSTACK",
    year: "2024",
    href: "https://actofshlok.substack.com/p/work-and-play-from-thailand"
  }
];

function renderList(items: AboutItem[]) {
  return (
    <ul className="space-y-2 text-sm text-[var(--text)]">
      {items.map((item) => (
        <li key={item.text} className="flex gap-2">
          <span className="text-[var(--text)]">{">"}</span>
          {item.href ? (
            <a href={item.href} className="hover:underline">
              {item.text}
            </a>
          ) : (
            <span>{item.text}</span>
          )}
        </li>
      ))}
    </ul>
  );
}

export default function HomePage() {
  return (
    <PageContainer>
      <section id="about" className="scroll-mt-24">
        <div className="grid gap-10 md:grid-cols-[1.1fr_1fr] md:grid-rows-[auto_1fr]">
          <div className="space-y-4 md:col-start-1 md:row-start-1">
            <h1 className="mt-3 text-3xl font-semibold text-[var(--text)]">
              {aboutContent.name}
            </h1>
          </div>
          <div className="space-y-4 md:col-start-1 md:row-start-2">
            <p className="text-base text-[var(--text)]/70">
              A curious person, figuring life out as I go.
            </p>
            <div className="relative aspect-[4/3] overflow-hidden border border-subtle bg-white">
              <Image
                src={aboutContent.heroImage}
                alt={`${aboutContent.name} hero`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="space-y-8 md:col-start-2 md:row-start-2">
            <div className="space-y-4">
              <SectionTitle title="//NOW//" />
              {renderList(aboutContent.now)}
            </div>
            <div className="space-y-4">
              <SectionTitle title="//PREVIOUSLY//" />
              {renderList(aboutContent.previously)}
            </div>
            <div className="space-y-4">
              <SectionTitle title="//LORE//" />
              {renderList(aboutContent.lore)}
            </div>
          </div>
        </div>
      </section>

      <section id="writing" className="mt-12 space-y-4 scroll-mt-24">
        <SectionTitle title="WRITING" />
        <div className="grid gap-4 md:grid-cols-2">
          {writingItems.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="block border-b border-dashed border-[var(--accent)]/40 pb-4 !no-underline hover:no-underline"
              target="_blank"
              rel="noreferrer"
            >
              <p className="text-sm font-normal text-[var(--text)] underline underline-offset-4">
                {item.title}
              </p>
              <p className="mt-1 text-[11px] tracking-[0.2em] text-[var(--text)]/35">
                {item.source} · {item.year}
              </p>
            </a>
          ))}
        </div>
      </section>

      <div className="mt-12">
        <BookshelfSection />
      </div>

      <div className="mt-12">
        <TravelSection />
      </div>
    </PageContainer>
  );
}
