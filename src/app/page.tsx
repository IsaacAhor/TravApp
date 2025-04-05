import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
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
              Flights & airport pick-up, chauffeurs, tours, events, parties and more —your entire trip, all in one app
            </p>
            {/* Mini-itinerary preview */}
            <div className="text-center mb-12">
              <p className="text-lg text-zinc-300 bg-zinc-800/50 inline-block px-4 py-2 rounded-md border border-zinc-700 shadow-sm">
                Flight to Accra + Airport Pickup + Guided Tours + Afronation Tickets = <span className="font-bold text-primary">$2,250</span> — or <span className="font-bold text-primary">$187/month</span>
              </p>
            </div>
          </div>

          <div className="max-w-md mx-auto">
            <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-lg p-4 flex gap-2">
              <Input
                placeholder="Enter your email"
                className="bg-zinc-800/50 border-0 focus-visible:ring-primary"
              />
              <a href="/tripestimate">
                <Button className="bg-primary hover:bg-primary/80 text-white">
                  Join Waitlist
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </a>
            </div>
            <p className="text-zinc-500 text-sm text-center mt-2">
              Join 1,000+ travelers on the waitlist!
            </p>
          </div>

          <div className="mt-12 flex justify-center">
            <ArrowRight className="h-8 w-8 text-zinc-600 animate-bounce" />
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
            Pay Monthly. Travel Stress-Free<br />
            <span className="text-lg md:text-xl font-normal">
              Split your trip into 6, 9, or 12-month plans. Powered by AI.
            </span>
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
              <h3 className="text-xl font-semibold mb-2">AI-Powered Itineraries</h3>
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
              <h3 className="text-xl font-semibold mb-2">Local Expert Network</h3>
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
              <h3 className="text-xl font-semibold mb-2">Subscription Benefits</h3>
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


      <Footer />
    </main>
  );
}
