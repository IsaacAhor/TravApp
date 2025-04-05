"use client";

import { useState } from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import FlightEstimator from "@/components/FlightEstimator";
import dynamic from "next/dynamic";
const TripSummary = dynamic(() => import("@/components/TripSummary"), { ssr: false });
import AddonsSelector from "@/components/AddonsSelector";

const addonPrices: Record<string, number> = {
  Accommodation: 400,
  "Local Food Tour": 150,
  "Beach Party Access": 100,
  "Festival Ticket": 250,
  "Private Chauffeur": 50,
  "Historical Heritage Tour": 200,
  "Live Music Event": 120,
  "Local Market Tour": 80,
  "Relaxation Package": 180,
  "New Year’s Eve Experience": 275,
  "Professional Photoshoot": 95,
  "Day Trip Outside City": 160,
};

export default function TripEstimatePage() {
  const [flightCost, setFlightCost] = useState(0);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [travelers, setTravelers] = useState(1);

  const addonsCost = selectedAddons.reduce(
    (sum, addon) => sum + (addonPrices[addon] || 0),
    0
  );

  return (
    <main className="min-h-screen">
      <Header />

      <FlightEstimator onFlightCostChange={setFlightCost} />

      <AddonsSelector
        selectedAddons={selectedAddons}
        setSelectedAddons={setSelectedAddons}
      />

      <div className="max-w-3xl mx-auto my-8 p-4 border border-zinc-700 rounded-xl bg-zinc-900/50 backdrop-blur-sm">
        <label className="block mb-2 text-sm font-medium">Number of Travelers</label>
        <input
          type="number"
          min="1"
          max="10"
          value={travelers}
          onChange={(e) => setTravelers(Number(e.target.value))}
          className="w-full rounded-md border border-zinc-700 bg-zinc-800/50 p-2 focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      <TripSummary
        flightCost={flightCost}
        addonsCost={addonsCost}
        selectedAddons={selectedAddons}
        setSelectedAddons={setSelectedAddons}
        travelers={travelers}
      />

      <Footer />
    </main>
  );
}
