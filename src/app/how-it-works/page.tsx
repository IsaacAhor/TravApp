import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="py-24 px-4 relative mt-16">
        <div className="max-w-7xl mx-auto relative z-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-8 text-center">How TravApp Works</h1>
          <p className="text-lg text-zinc-400 max-w-3xl mx-auto mb-12 text-center">
            Plan your perfect trip to Ghana or Nigeria with ease, flexibility, and personalized AI-powered recommendations.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 text-center">
              <div className="flex justify-center gap-3 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="M2.5 19.5 21 12 2.5 4.5v7l15 0-15 0v7z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="M3 17v-6a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v6" />
                  <path d="M16 21v-2a4 4 0 0 0-4-4h-0a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Step 1: Book Your Base Itinerary</h3>
              <p className="text-zinc-400">
                Start with flights and airport pick-up, tailored to your schedule.
              </p>
            </div>

            <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 text-center">
              <div className="flex justify-center gap-3 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="M3 6l9 6 9-6-9-4-9 4z" />
                  <path d="M3 6v6c0 5 9 9 9 9s9-4 9-9V6" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="M21 21H3V3h18v18z" />
                  <path d="M9 9h6v6H9z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Step 2: Customize Your Experience</h3>
              <p className="text-zinc-400">
                Add chauffeurs, guided tours, cultural visits, events, dining, and more—all powered by AI recommendations.
              </p>
            </div>

            <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 text-center">
              <div className="flex justify-center gap-3 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2v8" />
                  <path d="m4.93 10.93 1.41 1.41" />
                  <path d="M2 18h2" />
                  <path d="M20 18h2" />
                  <path d="m19.07 10.93-1.41 1.41" />
                  <path d="M22 22H2" />
                  <path d="m8 22 4-10 4 10" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="M17 6.1H3" />
                  <path d="M21 12.1H3" />
                  <path d="M15.1 18H3" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Step 3: Choose a Monthly Plan</h3>
              <p className="text-zinc-400">
                Pick a 6, 9, or 12-month payment plan. TravApp helps you break down your trip cost into manageable monthly payments—no stress, no surprises.
              </p>
            </div>

            <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 text-center">
              <div className="flex justify-center gap-3 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="2" ry="2" />
                  <path d="M7 7h10v10H7z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="M9 12l2 2 4-4" />
                  <circle cx="12" cy="12" r="10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Step 4: Travel with Ease</h3>
              <p className="text-zinc-400">
                Get a seamless itinerary, local insights, and real-time support for your trip to Ghana or Nigeria.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M12 3v1m0 16v1m8.66-12.66l-.71.71M4.05 19.95l-.71.71m16.97 0l-.71-.71M4.05 4.05l-.71-.71M21 12h1M2 12H1m4.22 4.22l-.71.71m12.02 0l-.71-.71M12 5a7 7 0 1 1 0 14a7 7 0 0 1 0-14z"/></svg>
                <h3 className="font-semibold text-white">What is TravApp?</h3>
              </div>
              <p className="text-zinc-400">
                TravApp is an AI-powered travel platform that helps you plan unforgettable trips to Ghana or Nigeria — including flights, airport pickup, cultural events, food experiences, and more — with flexible monthly payments.
              </p>
            </div>

            <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M2.5 19.5 21 12 2.5 4.5v7l15 0-15 0v7z"/></svg>
                <h3 className="font-semibold text-white">What does the base package include?</h3>
              </div>
              <p className="text-zinc-400">
                The base plan includes a round-trip flight and airport pickup. You can then personalize your trip with add-ons like accommodations, tours, concerts, beach parties, and food — all in one place.
              </p>
            </div>

            <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M4 21v-4a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v4"/><line x1="4" y1="10" x2="20" y2="10"/></svg>
                <h3 className="font-semibold text-white">Can I customize my trip?</h3>
              </div>
              <p className="text-zinc-400">
                Yes! You can build your experience by adding what matters to you — whether it’s nightlife, cultural tours, food, or events. TravApp lets you mix and match to create your ideal trip.
              </p>
            </div>

            <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><rect x="2" y="5" width="20" height="14" rx="2" ry="2"/><path d="M2 10h20"/></svg>
                <h3 className="font-semibold text-white">How do the payment plans work?</h3>
              </div>
              <p className="text-zinc-400">
                After you customize your trip, TravApp’s AI engine creates payment plans — 6, 9, or 12 months — based on your total cost and where you’re traveling from. You choose what fits your budget.
              </p>
            </div>

            <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M8 7V3h8v4"/><rect x="3" y="7" width="18" height="13" rx="2" ry="2"/></svg>
                <h3 className="font-semibold text-white">When do I need to finish paying?</h3>
              </div>
              <p className="text-zinc-400">
                All payments must be completed before your departure date. You’ll see your full schedule upfront, so there are no surprises later.
              </p>
            </div>

            <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>
                <h3 className="font-semibold text-white">Is TravApp secure?</h3>
              </div>
              <p className="text-zinc-400">
                Yes. We use encrypted, secure payment systems and only work with verified service providers — so your money, data, and experience are safe.
              </p>
            </div>

            <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M6 2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"/></svg>
                <h3 className="font-semibold text-white">What payment methods do you accept?</h3>
              </div>
              <p className="text-zinc-400">
                You can pay using credit or debit cards, Stripe, Flutterwave, or PayPal. Mobile money options like MTN Momo and AirtelTigo are coming soon.
              </p>
            </div>

            <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                <h3 className="font-semibold text-white">Who are the service providers?</h3>
              </div>
              <p className="text-zinc-400">
                Our providers are trusted local vendors — from tour guides and drivers to event organizers and restaurants. All are verified and rated by travelers.
              </p>
            </div>

            <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M3 12h18"/><path d="M12 3v18"/></svg>
                <h3 className="font-semibold text-white">Can I cancel or reschedule my trip?</h3>
              </div>
              <p className="text-zinc-400">
                Yes, you can cancel or reschedule your trip — subject to applicable charges. Each service (flight, event, lodging, etc.) has its own cancellation policy, which will be clearly shown before you confirm your booking. Our support team can assist you if your plans change.
              </p>
            </div>

            <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M4 4h16v16H4z"/><path d="M4 4l16 16"/></svg>
                <h3 className="font-semibold text-white">Why should I join the waitlist now?</h3>
              </div>
              <p className="text-zinc-400">
                Joining early gives you priority access to the first trip bundles, early-bird discounts, and curated experiences during peak seasons like December. Limited slots available.
              </p>
            </div>

            <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                <h3 className="font-semibold text-white">Can I book a trip for someone else?</h3>
              </div>
              <p className="text-zinc-400">
                Yes. You can book and pay for trips on behalf of friends or family — just enter their traveler details during checkout. It's perfect for gifting travel to loved ones.
              </p>
            </div>

            <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M4 4h16v16H4z"/><path d="M4 4l16 16"/></svg>
                <h3 className="font-semibold text-white">What happens after I join the waitlist?</h3>
              </div>
              <p className="text-zinc-400">
                You’ll get early access to the platform, first picks on curated trips, and exclusive launch discounts. We’ll keep you updated with email notifications as soon as bookings go live.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <a href="/tripestimate">
            <button className="px-8 py-4 rounded-lg bg-primary hover:bg-primary/80 text-white font-semibold text-lg transition w-full md:w-auto">
              Estimate My Trip
            </button>
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
