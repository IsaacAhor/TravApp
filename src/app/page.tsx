"use client";
import { useState, useEffect } from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        setSubmitted(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [submitted]);

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="py-24 px-4 relative mt-16">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              TravApp — <span className="text-primary">The Future of AI-Driven</span><br />
              Travel Planning
            </h1>
<p className="text-zinc-400 max-w-2xl mx-auto mb-6 whitespace-nowrap">
              Split your trip into 6, 9, or 12-month plans. Powered by AI.
            </p>
            {/* Mini-itinerary preview */}
            <div className="text-center mb-12 space-y-2">
              <p className="text-lg text-zinc-300 bg-zinc-800/50 inline-block px-4 py-2 rounded-md border border-zinc-700 shadow w-sm">
                ✓ Flight to Accra + Airport Pickup = Base
              </p>
<p className="text-lg text-zinc-300 bg-zinc-800/50 inline-block px-4 py-2 rounded-md border border-zinc-700 shadow w-sm">
                ➕ Guided Tours + Afronation Tickets + Add-ons
              </p>
            </div>
          </div>

          <div className="max-w-md mx-auto">
            {submitted ? (
              <div className="bg-green-900/50 border border-green-700 rounded-lg p-4 text-green-300 text-center">
                🎉 You're on the waitlist! We’ll keep you posted.
              </div>
            ) : (
              <form
                name="travapp-waitlist"
                method="POST"
                data-netlify="true"
                className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-lg p-4 flex gap-2"
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.target as HTMLFormElement;
                  const data = new FormData(form);
                  fetch("/", {
                    method: "POST",
                    body: data,
                  }).then(() => setSubmitted(true));
                }}
              >
                <input type="hidden" name="form-name" value="travapp-waitlist" />
                <Input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  className="bg-zinc-800/50 border-0 focus-visible:ring-primary"
                />
                <Button type="submit" className="bg-primary hover:bg-primary/80 text-white">
                  Join Waitlist
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </form>
            )}
<p className="text-zinc-500 text-sm text-center mt-2">
              Join 1200+ travelers, including Suhela from Accra!
            </p>
          </div>

          <div className="mt-12 flex justify-center">
            <ArrowRight className="h-8 w-8 text-zinc-600 animate-bounce" />
          </div>
        </div>
      </section>

      <section className="py-4 px-4 bg-primary/10 border-y border-primary text-center overflow-hidden">
        <p className="text-lg md:text-xl font-semibold text-primary animate-pulse">
          1200+ travelers are currently building their December trips to Ghana & Nigeria.
        </p>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Trip Estimator Preview</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div>
              <label className="block mb-2 text-sm font-medium">Origin</label>
              <select className="w-full rounded-md border border-zinc-700 bg-zinc-800/50 p-2 focus:outline-none focus:ring-2 focus:ring-primary">
                <option>USA</option>
                <option>UK</option>
                <option>Canada</option>
                <option>EU</option>
                <option>Africa</option>
                <option>Asia</option>
                <option>Australia</option>
              </select>
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium">Destination</label>
              <select className="w-full rounded-md border border-zinc-700 bg-zinc-800/50 p-2 focus:outline-none focus:ring-2 focus:ring-primary">
                <option>Ghana</option>
                <option>Nigeria</option>
              </select>
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium">Travelers</label>
              <input
                type="number"
                min="1"
                max="5"
                defaultValue="1"
                className="w-full rounded-md border border-zinc-700 bg-zinc-800/50 p-2 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
          <a href="/tripestimate">
            <button className="w-full py-3 rounded-md bg-primary hover:bg-primary/80 text-white font-semibold transition">
              Estimate My Trip
            </button>
          </a>
        </div>
      </section>

      {/* Destinations */}
      <section id="destinations" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Where Are You Going?</h2>
          <p className="text-zinc-400 text-center mb-12">
            From parties in Lagos to culture in Cape Coast — build your dream trip.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 flex flex-col">
              <div className="relative h-64 md:h-80 w-full">
                <Image
                  src="/images/ghana/ghana-accra.jpg"
                  alt="Ghana"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-semibold mb-2">Ghana 🇬🇭</h3>
                <p className="text-zinc-400 mb-4 flex-1">
                  Experience the vibrant culture and rich history of Ghana.
                </p>
                <Link href="/tripestimate?destination=ghana" className="mt-auto">
                  <Button className="w-full bg-primary hover:bg-primary/80 text-white">
                    Plan a Trip to Ghana
                  </Button>
                </Link>
              </div>
            </div>
            <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 flex flex-col">
              <div className="relative h-64 md:h-80 w-full">
                <Image
                  src="/images/nigeria/nigeria-lagos.jpg"
                  alt="Nigeria"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-semibold mb-2">Nigeria 🇳🇬</h3>
                <p className="text-zinc-400 mb-4 flex-1">
                  Explore the bustling cities and diverse landscapes of Nigeria.
                </p>
                <Link href="/tripestimate?destination=nigeria" className="mt-auto">
                  <Button className="w-full bg-primary hover:bg-primary/80 text-white">
                    Plan a Trip to Nigeria
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
<h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
            Pay Monthly. Travel Stress-Free<br />
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 hover:border-primary/50 transition-all duration-300">
              <div className="p-3 bg-primary/10 rounded-lg inline-block mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="M20 11.08V8l-6-6H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2v-3.08" />
                  <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                  <rect x="8" y="12" width="8" height="6" rx="1" />
                </svg>
              </div>
<h3 className="text-xl font-semibold mb-2">✈️ AI-Powered Itineraries</h3>
              <p className="text-zinc-400 mb-4">
                Personalized travel plans based on your preferences, budget, and travel style for Ghana and Nigeria.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-zinc-300">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Contextual understanding of preferences</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-zinc-300">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Local insights and hidden gems</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-zinc-300">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Optimal scheduling and routing</span>
                </li>
              </ul>
            </div>

            <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 hover:border-primary/50 transition-all duration-300">
              <div className="p-3 bg-primary/10 rounded-lg inline-block mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
<h3 className="text-xl font-semibold mb-2">🧠 Local Expert Network</h3>
              <p className="text-zinc-400 mb-4">
                Connect with pre-vetted local guides and experts who can enhance your travel experience in real-time.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-zinc-300">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Verified local experts</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-zinc-300">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Cultural immersion experiences</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-zinc-300">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Personalized recommendations</span>
                </li>
              </ul>
            </div>

            <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 hover:border-primary/50 transition-all duration-300">
              <div className="p-3 bg-primary/10 rounded-lg inline-block mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
<h3 className="text-xl font-semibold mb-2">💳 Subscription Benefits</h3>
              <p className="text-zinc-400 mb-4">
                Flexible subscription tiers with exclusive perks, discounts, and priority access to premium experiences.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-zinc-300">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Curated accommodation deals</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-zinc-300">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Priority booking for experiences</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-zinc-300">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>24/7 travel concierge support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">FAQs</h2>
          <div className="space-y-4">
            <details className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-lg p-4">
              <summary className="cursor-pointer font-semibold">What’s included in the base plan?</summary>
              <p className="mt-2 text-zinc-400">
                The base plan covers your round-trip flight (economy class) and airport pickup. You can customize with add-ons like tours, events, and more.
              </p>
            </details>
            <details className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-lg p-4">
              <summary className="cursor-pointer font-semibold">How does the payment plan work?</summary>
              <p className="mt-2 text-zinc-400">
                You can split your total trip cost into 6, 9, or 12 monthly payments. Pay over time before your departure date.
              </p>
            </details>
            <details className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-lg p-4">
              <summary className="cursor-pointer font-semibold">Can I cancel anytime?</summary>
              <p className="mt-2 text-zinc-400">
                Yes, you can cancel or reschedule subject to applicable fees. Each service has its own cancellation policy.
              </p>
            </details>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-primary/10 border-t border-primary text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Offer Experiences on TravApp</h2>
          <p className="text-lg md:text-xl text-zinc-400 mb-6">
            Join our network of trusted travel partners across Ghana and Nigeria. Reach thousands of travelers building their dream trip.
          </p>
          <Link href="/partners/join">
            <Button className="bg-primary hover:bg-primary/80 text-white px-6 py-3 text-lg">
              Become a Partner &rarr;
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
