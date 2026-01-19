import Image from "next/image";

type Book = {
  id: string;
  title: string;
  author: string;
  coverImage: string;
  liked: boolean;
  readAgain: boolean;
  yearRead: number;
  notes?: string;
};

type BooksGridProps = {
  books: Book[];
  onSelect: (book: Book) => void;
};

export function BooksGrid({ books, onSelect }: BooksGridProps) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 2xl:grid-cols-10">
      {books.map((book) => (
        <button
          key={book.id}
          type="button"
          onClick={() => onSelect(book)}
          className="group relative text-left"
        >
          <div className="relative aspect-[3/4] overflow-hidden border border-subtle bg-white">
            <Image
              src={book.coverImage}
              alt={`${book.title} cover`}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 16vw, 10vw"
              className="object-cover transition-transform duration-200 group-hover:scale-[1.04]"
            />
            <div className="pointer-events-none absolute left-3 top-3 flex gap-2">
              {book.liked && (
                <span className="inline-flex h-6 w-6 items-center justify-center border border-[var(--accent)]/40 bg-white/90 text-[var(--accent)]">
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M12 20.5c-4.5-3.4-7.5-6-7.5-9A4.5 4.5 0 0 1 12 7a4.5 4.5 0 0 1 7.5 4.5c0 3-3 5.6-7.5 9Z" />
                  </svg>
                </span>
              )}
              {book.readAgain && (
                <span className="inline-flex h-6 w-6 items-center justify-center border border-[var(--accent)]/40 bg-white/90 text-[var(--accent)]">
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M4 8V4h4" />
                    <path d="M4 4a8 8 0 1 1-2 6" />
                  </svg>
                </span>
              )}
            </div>
          </div>
          <div className="mt-2 space-y-1 text-sm md:hidden">
            <p className="font-semibold text-[var(--text)]">{book.title}</p>
            <p className="text-[var(--text)]/70">{book.author}</p>
          </div>
        </button>
      ))}
    </div>
  );
}
