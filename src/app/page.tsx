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

          {/* Removed Features Bullet List Subheading */}

          <div className="max-w-md mx-auto">
            <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-lg p-4 flex gap-2">
              <Input
                placeholder="Enter your email"
                className="bg-zinc-800/50 border-0 focus-visible:ring-primary"
              />
              <Button className="bg-primary hover:bg-primary/80 text-white">
                Join Waitlist
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
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
            Revolutionize Your Travel Experience
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

      {/* How It Works */}
      <section className="py-16 px-4 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-16 text-center">
            From Planning to Exploring
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="relative">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
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
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <div className="absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary to-transparent hidden md:block -z-10" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Create Profile</h3>
              <p className="text-zinc-400 text-sm">
                Set up your travel preferences, interests, budget, and travel style.
              </p>
            </div>

            <div className="text-center">
              <div className="relative">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
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
                    <path d="M17 6.1H3" />
                    <path d="M21 12.1H3" />
                    <path d="M15.1 18H3" />
                  </svg>
                </div>
                <div className="absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary to-transparent hidden md:block -z-10" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Choose Destination</h3>
              <p className="text-zinc-400 text-sm">
                Select your destination within Ghana or Nigeria and desired travel dates.
              </p>
            </div>

            <div className="text-center">
              <div className="relative">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
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
                    <path d="M12 2v8" />
                    <path d="m4.93 10.93 1.41 1.41" />
                    <path d="M2 18h2" />
                    <path d="M20 18h2" />
                    <path d="m19.07 10.93-1.41 1.41" />
                    <path d="M22 22H2" />
                    <path d="m8 22 4-10 4 10" />
                  </svg>
                </div>
                <div className="absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary to-transparent hidden md:block -z-10" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Get AI Itinerary</h3>
              <p className="text-zinc-400 text-sm">
                Receive a personalized travel plan with accommodations, activities, and transportation.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
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
                  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Travel with Ease</h3>
              <p className="text-zinc-400 text-sm">
                Enjoy your trip with 24/7 support and access to local experts when you need them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section id="destinations" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            Discover West Africa's Treasures
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-center mb-12">
            Experience the vibrant cultures, stunning landscapes, and rich heritage of Ghana and Nigeria with personalized travel itineraries.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300">
              <div className="h-64 relative">
                <Image
                  src="/images/ghana-accra.jpg"
                  alt="Accra, Ghana cityscape"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-2xl font-bold">Ghana</h3>
                  <p className="text-zinc-300">The Gold Coast</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-zinc-400 mb-4">
                  From the bustling markets of Accra to the serene beaches of Cape Coast and the historical slave castles, Ghana offers a perfect blend of history, culture, and natural beauty.
                </p>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                  Explore Ghana
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>

            <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300">
              <div className="h-64 relative">
                <Image
                  src="/images/nigeria-lagos.jpg"
                  alt="Lagos, Nigeria cityscape"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-2xl font-bold">Nigeria</h3>
                  <p className="text-zinc-300">The Giant of Africa</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-zinc-400 mb-4">
                  Experience the dynamic energy of Lagos, the cultural heritage of ancient kingdoms, and the natural wonders across Nigeria's diverse landscapes and vibrant communities.
                </p>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                  Explore Nigeria
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-16 text-center">
            What Early Users Are Saying
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6">
              <div className="mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" className="text-primary/20">
                  <path d="M10 11h-4a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v6c0 2.667-1.333 5.333-4 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M19 11h-4a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v6c0 2.667-1.333 5.333-4 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <p className="text-zinc-300 mb-6">
                "TravApp transformed my Ghana trip! The personalized itinerary highlighted places I would have never discovered on my own, and the local expert made me feel like a true insider."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/20 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
                    alt="Sarah Johnson"
                    width={48}
                    height={48}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">Sarah Johnson</h4>
                  <p className="text-zinc-400 text-sm">First-time visitor to Ghana</p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6">
              <div className="mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" className="text-primary/20">
                  <path d="M10 11h-4a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v6c0 2.667-1.333 5.333-4 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M19 11h-4a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v6c0 2.667-1.333 5.333-4 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <p className="text-zinc-300 mb-6">
                "As a Nigerian diaspora returning home, TravApp helped me rediscover my roots with cultural experiences that connected me to my heritage in ways I never expected."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/20 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1506634572416-48cdfe530110?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
                    alt="Michael Okafor"
                    width={48}
                    height={48}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">Michael Okafor</h4>
                  <p className="text-zinc-400 text-sm">Nigerian diaspora</p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6">
              <div className="mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" className="text-primary/20">
                  <path d="M10 11h-4a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v6c0 2.667-1.333 5.333-4 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M19 11h-4a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v6c0 2.667-1.333 5.333-4 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <p className="text-zinc-300 mb-6">
                "The subscription model has saved us thousands on our multiple trips to West Africa. The concierge service alone is worth the membership fee!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/20 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1604004215402-e0be233f39be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
                    alt="David & Lisa Chen"
                    width={48}
                    height={48}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">David & Lisa Chen</h4>
                  <p className="text-zinc-400 text-sm">Frequent travelers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto bg-gradient-to-r from-zinc-900 to-zinc-800 backdrop-blur-sm border border-zinc-800 rounded-xl p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Join Our Travel Community</h2>
          <p className="text-zinc-400 mb-6">
            Be among the first to experience AI-powered travel planning for Ghana and Nigeria. Early subscribers receive exclusive perks and discounted rates.
          </p>
          <div className="max-w-md mx-auto mb-6">
            <div className="flex gap-2">
              <Input
                placeholder="Enter your email"
                className="bg-zinc-800/50 border-zinc-700 focus-visible:ring-primary"
              />
              <Button className="bg-primary hover:bg-primary/80 text-white whitespace-nowrap">
                Join Waitlist
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
          <p className="text-zinc-500 text-sm">
            By joining, you agree to receive email updates about TravApp. No spam, we promise!
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
