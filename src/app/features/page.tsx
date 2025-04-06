import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ArrowLeft, CheckCircle } from "lucide-react";

export default function FeaturesPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="py-16 px-4 relative mt-16">
        <div className="max-w-7xl mx-auto relative z-10">
          <Link href="/" className="inline-flex items-center gap-2 text-zinc-400 hover:text-primary transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>

          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 gradient-text text-center">Features</h1>
            <p className="text-lg text-zinc-400 text-center">
              Revolutionize the Way You Travel to Ghana and Nigeria with TravApp’s AI-Powered Itinerary Builder
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
            <div className="flex flex-col gap-16">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6">✈️ AI-Powered Itinerary Creation</h2>
                <p className="text-zinc-400 mb-6">
                  TravApp leverages advanced AI algorithms to understand your travel preferences, creating highly personalized and optimized itineraries for your visits to Ghana and Nigeria.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span className="text-zinc-300">Contextual understanding of travel preferences</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span className="text-zinc-300">Optimization based on budget constraints</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span className="text-zinc-300">Support for multiple travel styles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span className="text-zinc-300">Integration of local cultural events</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span className="text-zinc-300">Automatic weather-based adjustments</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6">🧠 Local Expert Connection</h2>
                <p className="text-zinc-400 mb-6">
                  Connect with our network of vetted local experts in Ghana and Nigeria who can enhance your travel experience with authentic insider knowledge and personalized recommendations.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span className="text-zinc-300">Pre-vetted local guides and experts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span className="text-zinc-300">Real-time chat and consultation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span className="text-zinc-300">Cultural context and language assistance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span className="text-zinc-300">Off-the-beaten-path recommendations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span className="text-zinc-300">Emergency local support</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 h-full flex items-center justify-center transition-transform duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-lg cursor-pointer">
  <Link href="/tripestimate" className="block">
    <Image
      src="/images/itenary.png"
      alt="Sample Itinerary"
      width={500}
      height={500}
      className="rounded-lg object-contain max-w-full h-auto"
      priority
    />
  </Link>
</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 hover:border-primary/50 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-2 text-white">💳 Subscription Benefits</h3>
              <p className="text-zinc-400 mb-4">
                Flexible membership tiers with exclusive perks, discounts, and priority access to premium experiences.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                  <span className="text-zinc-400 text-sm">Reduced accommodation rates</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                  <span className="text-zinc-400 text-sm">VIP airport transfers</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                  <span className="text-zinc-400 text-sm">Premium experience access</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                  <span className="text-zinc-400 text-sm">Travel reward points</span>
                </li>
              </ul>
            </div>

            <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 hover:border-primary/50 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-2 text-white">💰 Payment Plans</h3>
              <p className="text-zinc-400 mb-4">
                Flexible payment options allowing you to save for your trip over time while securing the best deals in advance.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                  <span className="text-zinc-400 text-sm">Installment plans</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                  <span className="text-zinc-400 text-sm">Travel savings accounts</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                  <span className="text-zinc-400 text-sm">Group payment splitting</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                  <span className="text-zinc-400 text-sm">Early booking discounts</span>
                </li>
              </ul>
            </div>

            <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 hover:border-primary/50 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-2 text-white">📱 Mobile App Access</h3>
              <p className="text-zinc-400 mb-4">
                Access your itineraries, local expert support, and travel resources through our intuitive mobile app, even offline.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                  <span className="text-zinc-400 text-sm">Offline itinerary access</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                  <span className="text-zinc-400 text-sm">Real-time trip updates</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                  <span className="text-zinc-400 text-sm">Emergency contact system</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                  <span className="text-zinc-400 text-sm">GPS-enabled maps</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-white">🌍 Cultural Immersion Tools</h3>
              <p className="text-zinc-400 mb-6">
                Deepen your understanding and appreciation of local cultures with our specialized tools and resources.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-zinc-800/50 rounded-lg p-4">
                  <h4 className="font-medium text-white mb-2">Language Basics</h4>
                  <p className="text-zinc-400 text-sm">
                    Essential phrases in local languages with audio pronunciation guides.
                  </p>
                </div>
                <div className="bg-zinc-800/50 rounded-lg p-4">
                  <h4 className="font-medium text-white mb-2">Cultural Etiquette</h4>
                  <p className="text-zinc-400 text-sm">
                    Guides to local customs, traditions, and appropriate behavior.
                  </p>
                </div>
                <div className="bg-zinc-800/50 rounded-lg p-4">
                  <h4 className="font-medium text-white mb-2">Culinary Insights</h4>
                  <p className="text-zinc-400 text-sm">
                    Information about local dishes, ingredients, and dining customs.
                  </p>
                </div>
                <div className="bg-zinc-800/50 rounded-lg p-4">
                  <h4 className="font-medium text-white mb-2">Historical Context</h4>
                  <p className="text-zinc-400 text-sm">
                    Digestible historical information about key sites and regions.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-white">🛡️ Travel Security Features</h3>
              <p className="text-zinc-400 mb-6">
                Comprehensive safety measures to ensure your peace of mind throughout your journey.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg h-fit">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                      <path d="M12 8v4" />
                      <path d="M12 16h.01" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-2">Safety Monitoring</h4>
                    <p className="text-zinc-400 text-sm">
                      Real-time safety updates and alerts for your destination areas.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg h-fit">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <path d="M9 5H2v7l6.29 6.29c.39.39 1.02.39 1.41 0l3.3-3.29V8l-4-3Z" />
                      <path d="M6 9h8l-4-4" />
                      <path d="m22 6-4.6 4.6" />
                      <path d="M19 7h2v2" />
                      <path d="m5 21 9-9" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-2">Vetted Services</h4>
                    <p className="text-zinc-400 text-sm">
                      All transportation and accommodation services are pre-vetted for safety.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg h-fit">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="8" x2="12" y2="12" />
                      <line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-2">Emergency Assistance</h4>
                    <p className="text-zinc-400 text-sm">
                      24/7 emergency support and rapid response coordination during your travels.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </main>
  );
}
