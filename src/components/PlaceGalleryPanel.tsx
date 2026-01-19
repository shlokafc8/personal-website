"use client";

import Image from "next/image";
import { useEffect } from "react";
import type { TravelPlace } from "./WorldMap";

type PlaceGalleryPanelProps = {
  place: TravelPlace | null;
  onClose: () => void;
};

export function PlaceGalleryPanel({ place, onClose }: PlaceGalleryPanelProps) {
  useEffect(() => {
    if (!place) return;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [place, onClose]);

  if (!place) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-6">
      <button
        type="button"
        aria-label="Close panel"
        onClick={onClose}
        className="absolute inset-0 bg-black/10"
      />
      <aside className="relative z-10 w-full max-w-[860px] max-h-[85vh] overflow-y-auto border border-subtle bg-white px-6 pb-8 pt-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-lg font-semibold text-[var(--text)]">
              {place.city}, {place.country}
            </h2>
            <p className="mt-1 text-sm text-[var(--text)]/70">
              {place.yearsVisited.join(", ")}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="border border-subtle px-3 py-1 text-xs uppercase tracking-[0.2em] text-[var(--text)]/70 transition hover:text-[var(--text)]"
          >
            Close
          </button>
        </div>
        <p className="mt-4 text-sm text-[var(--text)]">{place.notes}</p>
        <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-3">
          {place.photos.map((photo) => (
            <div key={photo.src} className="relative aspect-[4/3] overflow-hidden border border-subtle bg-neutral-100">
              <Image
                src={photo.src}
                alt={photo.caption || `${place.city} photo`}
                fill
                sizes="(max-width: 768px) 50vw, 240px"
                className="object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
}
