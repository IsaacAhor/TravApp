"use client";

import { useState } from "react";

interface AddonsSelectorProps {
  selectedAddons: string[];
  setSelectedAddons: React.Dispatch<React.SetStateAction<string[]>>;
}

const addons = [
  {
    title: "Beach Party",
    description: "Access to exclusive beach party with transport",
    price: 100,
  },
  {
    title: "Local Food Tour",
    description: "Street food crawl or private chef dinner",
    price: 150,
  },
  {
    title: "Historical Heritage Tour",
    description: "Slave castles, museums, cultural landmarks",
    price: 200,
  },
  {
    title: "Live Music Event",
    description: "Entry to a live Afrobeats or highlife concert",
    price: 120,
  },
  {
    title: "Relaxation Package",
    description: "Spa + massage + beach day",
    price: 180,
  },
];

export default function AddonsSelector({
  selectedAddons,
  setSelectedAddons,
}: AddonsSelectorProps) {
  function toggleAddon(title: string) {
    setSelectedAddons((prev) =>
      prev.includes(title)
        ? prev.filter((a) => a !== title)
        : [...prev, title]
    );
  }

  return (
    <div className="max-w-3xl mx-auto my-12 p-6 border border-zinc-700 rounded-xl bg-zinc-900/50 backdrop-blur-sm">
      <h2 className="text-2xl font-bold mb-6">Add-on Experiences</h2>

      <div className="space-y-4">
        {addons.map((addon) => (
          <label
            key={addon.title}
            className="flex items-start gap-4 p-4 border border-zinc-700 rounded-lg bg-zinc-800/50 hover:bg-primary/10 transition cursor-pointer"
          >
            <input
              type="checkbox"
              checked={selectedAddons.includes(addon.title)}
              onChange={() => toggleAddon(addon.title)}
              className="mt-1"
            />
            <div>
              <h3 className="font-semibold">{addon.title} (${addon.price})</h3>
              <p className="text-zinc-400 text-sm">{addon.description}</p>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
}
