"use client";

import { useMemo, useState } from "react";
import booksData from "@/content/books.json";
import { FilterChips } from "@/components/FilterChips";
import { SearchInput } from "@/components/SearchInput";
import { BooksGrid, type Book } from "@/components/BooksGrid";
import { SectionTitle } from "@/components/SectionTitle";
import { BookModal } from "@/components/BookModal";

const chips = [
  { id: "all", label: "ALL" },
  { id: "liked", label: "LIKED" },
  { id: "readAgain", label: "READ AGAIN" }
];

export function BookshelfSection() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  const books = useMemo(() => {
    const query = search.toLowerCase();
    return (booksData as Book[])
      .filter((book) => {
      const matchesSearch =
        book.title.toLowerCase().includes(query) || book.author.toLowerCase().includes(query);
      const matchesFilter =
        filter === "all" ||
        (filter === "liked" && book.liked) ||
        (filter === "readAgain" && book.readAgain);
      return matchesSearch && matchesFilter;
      })
      .sort((a, b) => (b.yearRead || 0) - (a.yearRead || 0));
  }, [search, filter]);

  return (
    <section id="bookshelf" className="scroll-mt-24 space-y-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <SectionTitle title="BOOKSHELF" />
          <p className="mt-2 text-sm text-[var(--text)]/70">
            A short list of books that shaped my thinking.
          </p>
        </div>
        <div className="text-xs tracking-[0.3em] text-[var(--text)]/70">{books.length} BOOKS</div>
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <div className="min-w-[240px] flex-1">
          <SearchInput value={search} onChange={setSearch} placeholder="Search books by title or author…" />
        </div>
        <FilterChips chips={chips} active={filter} onChange={setFilter} />
      </div>
      <BooksGrid books={books} onSelect={(book) => setSelectedBook(book)} />
      <BookModal book={selectedBook} onClose={() => setSelectedBook(null)} />
    </section>
  );
}
