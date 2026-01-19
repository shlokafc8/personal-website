"use client";

import Image from "next/image";
import { useEffect } from "react";

import type { Book } from "./BooksGrid";

type BookModalProps = {
  book: Book | null;
  onClose: () => void;
};

export function BookModal({ book, onClose }: BookModalProps) {
  useEffect(() => {
    if (!book) return;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [book, onClose]);

  if (!book) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-6">
      <button
        type="button"
        aria-label="Close book details"
        onClick={onClose}
        className="absolute inset-0 bg-black/10"
      />
      <div className="relative z-10 w-full max-w-[720px] border border-subtle bg-[var(--bg)] p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex gap-4">
            <div className="relative h-[180px] w-[130px] border border-subtle bg-white">
              <Image src={book.coverImage} alt={book.title} fill className="object-cover" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[var(--text)]">{book.title}</h3>
              <p className="mt-1 text-sm text-[var(--text)]/70">{book.author}</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="border border-subtle px-3 py-1 text-xs uppercase tracking-[0.2em] text-[var(--text)]/70"
          >
            Close
          </button>
        </div>
        <p className="mt-4 text-sm text-[var(--text)]">
          {book.notes || "Short blurb coming soon."}
        </p>
      </div>
    </div>
  );
}
