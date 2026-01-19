"use client";

import { useMemo, useState } from "react";
import travelData from "@/content/travel.json";
import { SearchInput } from "@/components/SearchInput";
import { WorldMap, TravelPlace } from "@/components/WorldMap";
import { PlaceGalleryPanel } from "@/components/PlaceGalleryPanel";
import { SectionTitle } from "@/components/SectionTitle";

export function TravelSection() {
  const [query, setQuery] = useState("");
  const [selectedPlace, setSelectedPlace] = useState<TravelPlace | null>(null);

  const countryToFlag = (code: string) =>
    code
      .toUpperCase()
      .replace(/./g, (char) => String.fromCodePoint(127397 + char.charCodeAt(0)));

  const filteredPlaces = useMemo(() => {
    const q = query.toLowerCase();
    return travelData.places
      .filter(
        (place) =>
          place.city.toLowerCase().includes(q) || place.country.toLowerCase().includes(q)
      )
      .sort((a, b) => {
        const aYear = Math.max(...a.yearsVisited);
        const bYear = Math.max(...b.yearsVisited);
        return bYear - aYear;
      });
  }, [query]);

  return (
    <section id="travel" className="scroll-mt-24 space-y-8">
      <div>
        <SectionTitle title="TRAVEL LOG" />
        <p className="mt-2 text-sm text-[var(--text)]/70">
          A small atlas of places that shaped my sense of scale.
        </p>
      </div>

      <WorldMap
        visitedCountries={travelData.visitedCountries}
        places={travelData.places}
        onSelect={(place) => setSelectedPlace(place)}
      />

      <div className="space-y-4">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <SearchInput
            value={query}
            onChange={setQuery}
            placeholder="Search places by city or country…"
          />
        </div>
        <div className="grid gap-3 md:grid-cols-4">
          {filteredPlaces.map((place) => (
            <button
              key={place.id}
              type="button"
              onClick={() => setSelectedPlace(place)}
              className="group flex items-center justify-between border border-[var(--text)] bg-white px-4 py-3 text-left transition hover:border-[var(--accent)]"
            >
              <div>
                <p className="text-sm font-normal text-[var(--text)] transition group-hover:text-[var(--accent)]">
                  {countryToFlag(place.countryCode)} {place.country}
                </p>
                <p className="text-xs text-[var(--text)]/70 transition group-hover:text-[var(--accent)]">
                  {place.yearsVisited.join(", ")}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
      <PlaceGalleryPanel place={selectedPlace} onClose={() => setSelectedPlace(null)} />
    </section>
  );
}
