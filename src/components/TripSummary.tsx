"use client";

import { useState } from "react";

interface TripSummaryProps {
  flightCost: number;
  addonsCost: number;
  selectedAddons: string[];
  setSelectedAddons: React.Dispatch<React.SetStateAction<string[]>>;
  travelers: number;
}

export default function TripSummary({
  flightCost,
  addonsCost,
  selectedAddons,
  setSelectedAddons,
  travelers,
}: TripSummaryProps) {
  const [months, setMonths] = useState(12);

  const pickupFee = 0;
  const subtotalPerTraveler = flightCost + pickupFee + addonsCost;
  const subtotal = subtotalPerTraveler * travelers;
  const monthly = (subtotal / months).toFixed(2);

  return (
    <div className="max-w-3xl mx-auto my-12 p-6 border border-zinc-700 rounded-xl bg-zinc-900/50 backdrop-blur-sm">
      <h2 className="text-2xl font-bold mb-6">Trip Summary</h2>

      <div className="space-y-4 mb-6">
        <div className="flex justify-between">
          <span>✈️ Flight Cost</span>
          <span>${flightCost.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>➕ Add-ons</span>
          <span>${addonsCost.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>👤 Travelers</span>
          <span>{travelers}</span>
        </div>
        <div className="flex justify-between font-semibold border-t border-zinc-700 pt-4">
          <span>🧾 Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-semibold">
          <span>💳 Monthly ({months} months)</span>
          <span>${monthly}/month</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 mb-6">
        {[6, 9, 12].map((m) => (
          <button
            key={m}
            onClick={() => setMonths(m)}
            className={`px-4 py-2 rounded-md border border-zinc-700 ${
              months === m
                ? "bg-primary text-white"
                : "bg-zinc-800/50 hover:bg-primary hover:text-white transition"
            }`}
          >
            {m} months
          </button>
        ))}
      </div>

      <button className="w-full py-3 rounded-md bg-primary hover:bg-primary/80 text-white font-semibold transition">
        Lock My Plan
      </button>

      <p className="text-zinc-400 text-sm mt-4">
        This is an estimated total based on your selections. Actual costs may vary.
      </p>
    </div>
  );
}
