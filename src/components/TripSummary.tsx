"use client";

import { useState } from "react";

interface TripSummaryProps {
  flightCost: number;
  addonsCost: number;
  selectedAddons: string[];
  setSelectedAddons: React.Dispatch<React.SetStateAction<string[]>>;
  travelers: number;
  region: string;
  destination: string;
  month: string;
  flightClass: string;
  setShowSelections: React.Dispatch<React.SetStateAction<boolean>>;
  setWaitlistJoined: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function TripSummary({
  flightCost,
  addonsCost,
  selectedAddons,
  setSelectedAddons,
  travelers,
  region,
  destination,
  month,
  flightClass,
  setShowSelections,
}: TripSummaryProps) {
  const [months, setMonths] = useState(12);
  const [showConfirm, setShowConfirm] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const [showWaitlistPrompt, setShowWaitlistPrompt] = useState(false);
  const [showFinalMessage, setShowFinalMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showError, setShowError] = useState(false);

  // Load saved trip on mount
  const [loaded, setLoaded] = useState(false);
  const [message, setMessage] = useState("");

  if (!loaded && typeof window !== "undefined") {
    const saved = localStorage.getItem("tripPlan");
    if (saved) {
      try {
        const data = JSON.parse(saved);
        setMonths(data.months || 12);
        setShowConfirm(true);
        setMessage("Welcome back! We've preloaded your trip plan.");
      } catch (e) {
        console.error("Invalid saved trip data", e);
        localStorage.removeItem("tripPlan");
      }
    }
    setLoaded(true);
  }

  const pickupFee = 0;
  const subtotalPerTraveler = flightCost + pickupFee + addonsCost;
  const subtotal = subtotalPerTraveler * travelers;
  const monthly = (subtotal / months).toFixed(2);

  return (
    <div className="max-w-3xl mx-auto my-12 p-6 border border-zinc-700 rounded-xl bg-zinc-900/50 backdrop-blur-sm relative">
      {!showConfirm && (
        <>
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

          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <button
              onClick={() => {
                const tripData = {
                  flightCost,
                  addonsCost,
                  selectedAddons,
                  travelers,
                  months,
                };
                localStorage.setItem("tripPlan", JSON.stringify(tripData));
                setShowToast(true);
                setTimeout(() => setShowToast(false), 3000);
              }}
              className="w-full py-3 rounded-md bg-primary hover:bg-primary/80 text-white font-semibold transition"
            >
              Save My Trip
            </button>

            <button
              onClick={() => {
                localStorage.removeItem("tripPlan");
                alert("Saved trip cleared.");
              }}
              className="w-full py-3 rounded-md border border-zinc-700 bg-zinc-800/50 hover:bg-primary hover:text-white text-white font-semibold transition"
            >
              Clear Trip
            </button>
          </div>

          {showToast && (
            <div
              aria-live="polite"
              className={`mb-4 px-4 py-2 rounded bg-green-600 text-white text-center transition-opacity duration-500 ${
                showToast ? "opacity-100" : "opacity-0"
              }`}
            >
              Trip saved!
            </div>
          )}

          <div
            className={`mb-4 px-4 py-2 rounded bg-red-600 text-white text-center transition-all duration-1000 ease-in-out transform ${
              showError ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            {errorMessage}
          </div>

          <button
            onClick={() => {
              if (
                !region ||
                !destination ||
                !month ||
                !flightClass ||
                travelers < 1 ||
                flightCost <= 0
              ) {
                setErrorMessage("Please kindly complete all required selections before proceeding.");
                setShowError(true);
                setTimeout(() => {
                  setShowError(false);
                  setTimeout(() => {
                    setErrorMessage("");
                  }, 1000); // wait for fade out to finish
                }, 3000);
                return;
              }
              setErrorMessage("");
              const tripData = {
                flightCost,
                addonsCost,
                selectedAddons,
                travelers,
                months,
              };
              localStorage.setItem("tripPlan", JSON.stringify(tripData));
              setShowConfirm(true);
            }}
            className="w-full py-3 rounded-md bg-primary hover:bg-primary/80 text-white font-semibold transition"
          >
            Lock My Plan
          </button>

          <p className="text-zinc-400 text-sm mt-4">
            This is an estimated total based on your selections. Actual costs may vary.
          </p>
        </>
      )}

      {showConfirm && (
        <div className="space-y-6">
          {message && (
            <p className="text-green-500 font-semibold">{message}</p>
          )}
          <h2 className="text-2xl font-bold mb-4">Your Trip Plan is Locked!</h2>
          <p className="text-green-500 font-semibold mb-4">
            We’ll notify you as soon as booking is open.
          </p>
          <button
            onClick={() => {
              localStorage.removeItem("tripPlan");
              window.location.reload();
            }}
            className="px-4 py-2 rounded-md border border-zinc-700 bg-zinc-800/50 hover:bg-primary hover:text-white transition"
          >
            Start Over
          </button>

          <div className="space-y-3">
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
            <div className="flex justify-between">
              <span>🧾 Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>💳 Monthly ({months} months)</span>
              <span>${monthly}/month</span>
            </div>
          </div>

          {!showWaitlistPrompt && !showFinalMessage && (
            <button
              onClick={() => setShowWaitlistPrompt(true)}
              className="w-full py-3 rounded-md bg-primary hover:bg-primary/80 text-white font-semibold transition"
            >
              Join the Waitlist
            </button>
          )}

          {showWaitlistPrompt && !showFinalMessage && (
            <div className="mt-6 space-y-4 text-center">
              <p className="text-green-500 font-semibold">
                🎉 You're on the waitlist! Would you like to download your trip summary?
              </p>
              <div className="flex flex-col md:flex-row gap-4 mt-4">
                <button
                  onClick={() => {
                    const now = new Date();
                    const formattedDate = now.toLocaleString(undefined, {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                      hour: "numeric",
                      minute: "2-digit",
                      hour12: true,
                    });

                    const content = `TravApp Trip Summary
Generated on: ${formattedDate}

----------------------
Flight Cost: $${flightCost.toFixed(2)}
Add-ons: ${selectedAddons.length > 0 ? selectedAddons.join(", ") : "None"}
Number of Travelers: ${travelers}
Monthly Plan: ${months} months at $${((flightCost + addonsCost) * travelers / months).toFixed(2)} per month
Total Cost: $${((flightCost + addonsCost) * travelers).toFixed(2)}
----------------------

Thank you for using TravApp!
`;
                    const blob = new Blob([content], { type: "text/plain" });
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement("a");
                    a.href = url;
                    a.download = "trip-summary.txt";
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                    URL.revokeObjectURL(url);
                    setShowWaitlistPrompt(false);
                    setTimeout(() => {
                      setShowFinalMessage(true);
                      setTimeout(() => {
                        setShowFinalMessage(false);
                        setShowSelections(false);
                      }, 3000);
                    }, 0);
                  }}
                  className="w-full py-3 rounded-md bg-primary hover:bg-primary/80 text-white font-semibold transition"
                >
                  Yes, download
                </button>
                <button
                  onClick={() => {
                    setShowWaitlistPrompt(false);
                    setShowFinalMessage(true);
                    setTimeout(() => {
                      setShowFinalMessage(false);
                      setShowSelections(false);
                    }, 3000);
                  }}
                  className="w-full py-3 rounded-md border border-zinc-700 bg-zinc-800/50 hover:bg-primary hover:text-white text-white font-semibold transition"
                >
                  No, thanks
                </button>
              </div>
            </div>
          )}

          {showFinalMessage && (
            <p className="mt-6 text-green-500 font-semibold text-center">
              Thanks for visiting TravApp. We’ll be in touch soon!
            </p>
          )}
        </div>
      )}
    </div>
  );
}
