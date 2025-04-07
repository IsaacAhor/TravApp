import Image from "next/image";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function BudgetGuidePage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <section className="flex-1 px-4 py-16 mt-16 max-w-4xl mx-auto">
        <div className="mb-8">
          <Image
            src="/images/kotoka-arrival.jpg"
            alt="Arriving at Kotoka International Airport"
            width={1200}
            height={600}
            className="rounded-lg shadow-lg object-cover w-full h-auto"
            priority
          />
        </div>

        <h1 className="text-3xl md:text-5xl font-bold mb-6 text-center">
          💰 How to Budget a Trip from the US to Ghana (2025 Edition)
        </h1>

        <p className="text-zinc-400 mb-8 text-center">
          Planning a trip from the U.S. to Ghana? You’re in for an unforgettable experience filled with vibrant culture, delicious food, and warm hospitality. But let’s face it—international travel can be expensive if you don’t plan right. That’s why we’ve put together this practical guide to help you budget your trip to Ghana like a pro.
          <br /><br />
          Whether you’re headed to Accra for Detty December, visiting family, or exploring Ghana’s rich history, here’s everything you need to know about managing your costs—from flights and accommodation to food and activities.
        </p>

        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold mb-2">✈️ Flights from the US to Ghana</h2>
            <p className="text-zinc-400 mb-2">Estimated Cost: $850 – $1,500 (round trip)</p>
            <p className="text-zinc-400">
              Flights are often the biggest chunk of your travel budget. If you’re flying out of New York (JFK), Washington D.C. (IAD), or Atlanta (ATL), you’ll find the most frequent and affordable options. Expect to pay anywhere between $850 and $1,500 for a roundtrip ticket to Accra.
              <br /><br />
              Hot tip: Prices shoot up in December, so if you’re heading to Ghana for the holidays, book at least 2–4 months in advance. Use platforms like Google Flights or Hopper to track price drops.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">🏨 Accommodation</h2>
            <p className="text-zinc-400 mb-2">Estimated Cost: $40 – $150 per night</p>
            <p className="text-zinc-400">
              Ghana offers a wide range of places to stay depending on your budget. Backpackers can find hostels and guesthouses in the $30–50 range, while mid-range travelers can enjoy decent hotels or Airbnb apartments for $60–$120 a night.
              <br /><br />
              If you're planning to stay in Accra during December, book early—hotels fill up fast, especially around major events and festivals.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">🍛 Food & Drinks</h2>
            <p className="text-zinc-400 mb-2">Estimated Daily Cost: $20 – $60</p>
            <p className="text-zinc-400">
              One of the best things about Ghana? The food! You can enjoy hearty local meals like jollof rice, waakye, or banku for just a few dollars at a street-side joint. A full local meal can cost as little as $3–$5.
              <br /><br />
              If you prefer fancier restaurants or are craving Western food, expect to pay around $10–$25 per meal. Drinks at bars or lounges range from $5–$12, depending on where you go.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">🚗 Activities & Transportation</h2>
            <p className="text-zinc-400 mb-2">Estimated Weekly Cost: $150 – $300</p>
            <p className="text-zinc-400">
              There’s no shortage of amazing things to do in Ghana. From exploring the Cape Coast Castle and Kakum National Park to vibing at Labadi Beach or shopping at Makola Market, activities are very affordable.
              <br /><br />
              Cape Coast Castle entry: $10–$20<br />
              Accra city tour: $30–$50<br />
              Uber per day: $10–$25<br />
              SIM card + data for the week: $5–$15<br /><br />
              Uber works great in Accra and is more reliable and affordable than hailing taxis.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">💵 Total Budget Estimate for 1 Week in Ghana</h2>
            <p className="text-zinc-400">
              Here’s what a 7-day trip might look like depending on your travel style:
            </p>
            <table className="w-full text-zinc-400 my-4 border border-zinc-700">
              <thead>
                <tr className="border-b border-zinc-700">
                  <th className="py-2">Style</th>
                  <th className="py-2">Total Cost (USD)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-zinc-700">
                  <td className="py-2 text-center">Budget</td>
                  <td className="py-2 text-center">$1,440</td>
                </tr>
                <tr className="border-b border-zinc-700">
                  <td className="py-2 text-center">Mid-range</td>
                  <td className="py-2 text-center">$2,130</td>
                </tr>
                <tr>
                  <td className="py-2 text-center">Luxury</td>
                  <td className="py-2 text-center">$3,400+</td>
                </tr>
              </tbody>
            </table>
            <p className="text-zinc-400">
              This includes flights, accommodation, food, activities, and basic transportation.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">✅ Extra Travel Tips for Ghana</h2>
            <p className="text-zinc-400">
              <strong>Visa Requirements:</strong> U.S. citizens need a visa to enter Ghana. It typically costs between $60 and $100.
              <br /><br />
              <strong>Vaccinations:</strong> You’ll need a Yellow Fever vaccination (mandatory) and should carry your card when you travel.
              <br /><br />
<strong>Currency:</strong> Ghana uses the Ghanaian Cedi (GHS). Check the current exchange rate <a href="https://www.google.com/search?q=usd+to+ghs" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">here</a>.
<br /><br />
<strong>Connectivity:</strong> MTN and Vodafone are reliable. Get a local SIM at the airport or mall.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Final Thoughts</h2>
            <p className="text-zinc-400">
              A trip to Ghana is worth every penny, but a smart budget makes the experience even better. With the right planning, you can enjoy rich culture, great food, music festivals, beaches, and history—all without breaking the bank. Whether you're visiting for the first time or returning home, this guide gives you the confidence to plan your trip wisely.
            </p>
          </div>
        </div>
      </section>

      <div className="mt-12 flex justify-center">
        <a href="/tripestimate">
          <button className="bg-primary hover:bg-primary/80 text-white px-6 py-3 text-lg rounded">
            Estimate My Trip
          </button>
        </a>
      </div>

      <Footer />
    </main>
  );
}
