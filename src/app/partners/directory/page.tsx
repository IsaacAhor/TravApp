"use client";

import { useState, useEffect } from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";

type Partner = {
  name: string;
  slug: string;
  category: string;
  description: string;
  location: string;
  priceRange: string;
  contactEmail: string;
};

const mockPartners: Partner[] = [
  {
    name: "Accra City Tours",
    slug: "accra-city-tours",
    category: "Tour Guide",
    description: "Experience the vibrant culture and history of Accra with expert local guides.",
    location: "Accra, Ghana",
    priceRange: "$50 - $200",
    contactEmail: "info@accracitytours.com",
  },
  {
    name: "Lagos Foodies",
    slug: "lagos-foodies",
    category: "Restaurant",
    description: "Taste authentic Nigerian cuisine with a modern twist at our top-rated eatery.",
    location: "Lagos, Nigeria",
    priceRange: "$10 - $50",
    contactEmail: "contact@lagosfoodies.ng",
  },
  {
    name: "Cape Coast Adventures",
    slug: "cape-coast-adventures",
    category: "Tour Guide",
    description: "Explore historic castles, beaches, and nature reserves with passionate guides.",
    location: "Cape Coast, Ghana",
    priceRange: "$30 - $150",
    contactEmail: "hello@capeadventures.com",
  },
  {
    name: "Naija Events Hub",
    slug: "naija-events-hub",
    category: "Events",
    description: "Your gateway to the hottest concerts, festivals, and nightlife in Nigeria.",
    location: "Abuja, Nigeria",
    priceRange: "$20 - $100",
    contactEmail: "events@naijahub.ng",
  },
  {
    name: "Ghana Chauffeur Services",
    slug: "ghana-chauffeur-services",
    category: "Transport",
    description: "Reliable, comfortable rides with professional drivers across Ghana.",
    location: "Kumasi, Ghana",
    priceRange: "$40 - $250",
    contactEmail: "bookings@ghanachauffeur.com",
  },
  {
    name: "Lagos Island Eats",
    slug: "lagos-island-eats",
    category: "Restaurant",
    description: "Savor fresh seafood and local dishes with stunning ocean views.",
    location: "Lagos, Nigeria",
    priceRange: "$15 - $60",
    contactEmail: "reservations@lagosislandeats.ng",
  },
];

const categories = ["All", "Tour Guide", "Restaurant", "Events", "Transport"];
const locations = ["All", "Accra, Ghana", "Lagos, Nigeria", "Cape Coast, Ghana", "Abuja, Nigeria", "Kumasi, Ghana"];
const priceRanges = ["All", "$10 - $50", "$30 - $150", "$20 - $100", "$40 - $250", "$50 - $200", "$15 - $60"];

export default function PartnerDirectoryPage() {
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [locationFilter, setLocationFilter] = useState("All");
  const [priceFilter, setPriceFilter] = useState("All");
  const [selectedPartner, setSelectedPartner] = useState<Partner | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const slug = params.get("partner");
    if (slug) {
      const partner = mockPartners.find((p) => p.slug === slug);
      if (partner) {
        setSelectedPartner(partner);
      }
    }
  }, []);

  const filteredPartners = mockPartners.filter((partner) => {
    const categoryMatch = categoryFilter === "All" || partner.category === categoryFilter;
    const locationMatch = locationFilter === "All" || partner.location === locationFilter;
    const priceMatch = priceFilter === "All" || partner.priceRange === priceFilter;
    return categoryMatch && locationMatch && priceMatch;
  });

  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <section className="py-24 px-4 mt-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Explore Local Experiences & Services</h1>
        <p className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto">
          Discover our trusted partners — handpicked providers ready to make your trip unforgettable.
        </p>
      </section>

      <div className="px-4 mb-8">
        <div className="max-w-7xl mx-auto text-center mb-6">
          <a href="/partners/join">
            <Button className="bg-primary hover:bg-primary/80 text-white px-6 py-3 text-lg">
              Become a Partner
            </Button>
          </a>
        </div>
      </div>

      <section className="px-4 mb-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="w-full border rounded px-3 py-2 bg-zinc-900 text-zinc-200"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          <select
            value={locationFilter}
            onChange={(e) => setLocationFilter(e.target.value)}
            className="w-full border rounded px-3 py-2 bg-zinc-900 text-zinc-200"
          >
            {locations.map((loc) => (
              <option key={loc} value={loc}>{loc}</option>
            ))}
          </select>
          <select
            value={priceFilter}
            onChange={(e) => setPriceFilter(e.target.value)}
            className="w-full border rounded px-3 py-2 bg-zinc-900 text-zinc-200"
          >
            {priceRanges.map((price) => (
              <option key={price} value={price}>{price}</option>
            ))}
          </select>
        </div>
      </section>

      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPartners.map((partner, idx) => (
            <div key={idx} className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-2">{partner.name}</h3>
                <p className="text-primary font-medium mb-2">{partner.category}</p>
                <p className="text-zinc-400 mb-4">{partner.description}</p>
                <p className="text-zinc-400 mb-1"><strong>Location:</strong> {partner.location}</p>
                <p className="text-zinc-400 mb-4"><strong>Price Range:</strong> {partner.priceRange}</p>
              </div>
              <Button className="w-full mt-auto" onClick={() => setSelectedPartner(partner)}>
                View Details
              </Button>
            </div>
          ))}
        </div>
      </section>

      {selectedPartner && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-zinc-900 border border-zinc-700 rounded-lg max-w-lg w-full p-6 relative">
            <h2 className="text-2xl font-bold mb-4">{selectedPartner.name}</h2>
            <p className="text-primary font-medium mb-2">{selectedPartner.category}</p>
            <p className="text-zinc-400 mb-4">{selectedPartner.description}</p>
            <p className="text-zinc-400 mb-2"><strong>Location:</strong> {selectedPartner.location}</p>
            <p className="text-zinc-400 mb-2"><strong>Price Range:</strong> {selectedPartner.priceRange}</p>
            <p className="text-zinc-400 mb-4"><strong>Contact Email:</strong> {selectedPartner.contactEmail}</p>
            <Button
              className="w-full mb-2"
              onClick={() => {
                const url = `${window.location.origin}${window.location.pathname}?partner=${selectedPartner.slug}`;
                navigator.clipboard.writeText(url);
              }}
            >
              Copy Profile Link
            </Button>
            <Button className="w-full mt-2" onClick={() => setSelectedPartner(null)}>
              Close
            </Button>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}
