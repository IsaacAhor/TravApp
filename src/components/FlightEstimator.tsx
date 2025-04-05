"use client";

import { useState, useEffect } from "react";

const regions = ["USA", "UK", "Canada", "EU", "Africa", "Asia", "Australia"];
const destinations = ["Ghana", "Nigeria"];
const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
const classes = ["Economy", "Business", "First Class"];

const highSeasonMonths = ["December", "November", "July", "August"];

const basePrices: Record<string, Record<string, { low: number; high: number }>> = {
  USA: {
    Ghana: { low: 850, high: 1200 },
    Nigeria: { low: 900, high: 1250 },
  },
  UK: {
    Ghana: { low: 600, high: 900 },
    Nigeria: { low: 650, high: 950 },
  },
  Canada: {
    Ghana: { low: 800, high: 1150 },
    Nigeria: { low: 850, high: 1200 },
  },
  EU: {
    Ghana: { low: 700, high: 1000 },
    Nigeria: { low: 750, high: 1050 },
  },
  Africa: {
    Ghana: { low: 200, high: 350 },
    Nigeria: { low: 250, high: 400 },
  },
  Asia: {
    Ghana: { low: 1000, high: 1400 },
    Nigeria: { low: 1050, high: 1450 },
  },
  Australia: {
    Ghana: { low: 1150, high: 1550 },
    Nigeria: { low: 1200, high: 1600 },
  },
};

const classMultipliers: Record<string, number> = {
  "Economy": 1.0,
  "Business": 1.8,
  "First Class": 2.5,
};

interface FlightEstimatorProps {
  onFlightCostChange: (cost: number) => void;
}

export default function FlightEstimator({ onFlightCostChange }: FlightEstimatorProps) {
  const [region, setRegion] = useState("");
  const [destination, setDestination] = useState("");
  const [month, setMonth] = useState("");
  const [flightClass, setFlightClass] = useState("Economy");

  const isHighSeason = highSeasonMonths.includes(month);
  const seasonType = isHighSeason ? "high" : "low";

  let price = 0;
  if (region && destination && month && flightClass) {
    const regionPrices = basePrices[region]?.[destination];
    if (regionPrices) {
      const base = regionPrices[seasonType as "low" | "high"];
      const multiplier = classMultipliers[flightClass];
      price = base * multiplier;
    }
  }

  const pickupFee = 100;
  const totalFlightCost = price + pickupFee;

  useEffect(() => {
    onFlightCostChange(totalFlightCost);
  }, [price, pickupFee]);

  return (
    <div className="max-w-3xl mx-auto my-12 p-6 border border-zinc-700 rounded-xl bg-zinc-900/50 backdrop-blur-sm">
      <h2 className="text-2xl font-bold mb-6">✈️ Flight Price Estimator</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block mb-2 text-sm font-medium">Origin Region</label>
          <select
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            className="w-full rounded-md border border-zinc-700 bg-zinc-800/50 p-2 focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="">Select region</option>
            {regions.map((r) => (
              <option key={r} value={r}>{r}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium">Destination</label>
          <select
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="w-full rounded-md border border-zinc-700 bg-zinc-800/50 p-2 focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="">Select destination</option>
            {destinations.map((d) => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium">Travel Month</label>
          <select
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            className="w-full rounded-md border border-zinc-700 bg-zinc-800/50 p-2 focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="">Select month</option>
            {months.map((m) => (
              <option key={m} value={m}>{m}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium">Flight Class</label>
          <select
            value={flightClass}
            onChange={(e) => setFlightClass(e.target.value)}
            className="w-full rounded-md border border-zinc-700 bg-zinc-800/50 p-2 focus:outline-none focus:ring-2 focus:ring-primary"
          >
            {classes.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-6 p-4 border border-primary rounded-lg bg-zinc-800/50">
        <h3 className="text-lg font-semibold mb-2">Estimated Flight Cost (includes pickup)</h3>
        <p className="text-2xl font-bold mb-2">${totalFlightCost ? totalFlightCost.toFixed(2) : "0.00"}</p>
        <p className="text-zinc-400 text-sm">
          This estimate includes a flat $100 airport pickup fee. Actual costs may vary.
        </p>
      </div>
    </div>
  );
}
