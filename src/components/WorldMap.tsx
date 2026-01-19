"use client";

import Image from "next/image";
import { useState } from "react";

export type TravelPlace = {
  id: string;
  slug: string;
  city: string;
  country: string;
  countryCode: string;
  marker: { x: number; y: number };
  yearsVisited: number[];
  notes: string;
  photos: { src: string; caption?: string }[];
};

type WorldMapProps = {
  visitedCountries: string[];
  places: TravelPlace[];
  onSelect: (place: TravelPlace) => void;
};

export function WorldMap({ visitedCountries: _visitedCountries, places, onSelect }: WorldMapProps) {
  const [hovered, setHovered] = useState<TravelPlace | null>(null);

  return (
    <div className="relative w-full overflow-hidden border border-subtle bg-white">
      <div className="relative w-full aspect-[2/1]">
        <Image
          src="/images/world-map.png"
          alt="World map"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
      </div>

      {places.map((place) => (
        <button
          key={place.id}
          type="button"
          onClick={() => onSelect(place)}
          onMouseEnter={() => setHovered(place)}
          onMouseLeave={() => setHovered(null)}
          className="map-marker group absolute border border-[rgba(0,0,255,0.25)] bg-white p-1"
          style={{ left: `${place.marker.x}%`, top: `${place.marker.y}%` }}
          aria-label={`${place.city}, ${place.country}`}
        >
          <div className="relative h-[32px] w-[32px] overflow-hidden">
            <Image
              src={place.photos[0]?.src || "/images/travel/placeholder.jpg"}
              alt={`${place.city} thumbnail`}
              fill
              sizes="32px"
              className="object-cover"
            />
          </div>
        </button>
      ))}

      {hovered && (
        <div
          className="pointer-events-none absolute border border-subtle bg-white px-2 py-1 text-xs text-[var(--text)] shadow-sm"
          style={{
            left: `${hovered.marker.x}%`,
            top: `calc(${hovered.marker.y}% - 46px)`
          }}
        >
          {hovered.city}, {hovered.country}
        </div>
      )}
    </div>
  );
}
