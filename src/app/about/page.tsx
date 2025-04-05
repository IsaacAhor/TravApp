import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function FAQsPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
            🧮 Estimate Your Monthly Plan
          </h2>

          <div className="max-w-3xl mx-auto space-y-12">
            <div>
              <h3 className="text-lg font-medium mb-4">
                Step 1: Trip Basics <span className="text-xs text-zinc-400">(affects price cost)</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-x-12 md:gap-y-4">
                <div className="flex flex-col">
                  <label className="mb-1 text-sm font-medium">Origin City</label>
                  <input
                    type="text"
                    placeholder="e.g., New York"
                    className="w-full rounded-md border border-zinc-700 bg-zinc-800/50 p-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="mb-1 text-sm font-medium">Destination</label>
                  <select
                    className="w-full rounded-md border border-zinc-700 bg-zinc-800/50 p-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select destination</option>
                    <option value="Ghana">Ghana</option>
                    <option value="Nigeria">Nigeria</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label className="mb-1 text-sm font-medium">Travel Dates</label>
                  <input
                    type="date"
                    className="w-full rounded-md border border-zinc-700 bg-zinc-800/50 p-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="mb-1 text-sm font-medium">Number of Travelers</label>
                  <input
                    type="number"
                    min="1"
                    placeholder="e.g., 2"
                    className="w-full rounded-md border border-zinc-700 bg-zinc-800/50 p-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
              <p className="text-zinc-400 text-sm mt-4">
                👉 This sets context but doesn’t affect cost yet.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4">
                Step 2: Choose Flight Class <span className="text-xs text-zinc-400">(affects flight cost)</span>
              </h3>
              <div className="flex flex-wrap gap-4">
                <label className="px-4 py-2 rounded-md border border-zinc-700 bg-zinc-800/50 hover:bg-primary hover:text-white transition cursor-pointer">
                  <input type="radio" name="flightClass" className="mr-2" />
                  Economy ($1,000)
                </label>
                <label className="px-4 py-2 rounded-md border border-zinc-700 bg-zinc-800/50 hover:bg-primary hover:text-white transition cursor-pointer">
                  <input type="radio" name="flightClass" className="mr-2" />
                  Business (1.8×)
                </label>
                <label className="px-4 py-2 rounded-md border border-zinc-700 bg-zinc-800/50 hover:bg-primary hover:text-white transition cursor-pointer">
                  <input type="radio" name="flightClass" className="mr-2" />
                  First (2.5×)
                </label>
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto mt-16">
            <h3 className="text-lg font-medium mb-6">
              Step 3: Add-On Custom Experiences <span className="text-xs text-zinc-400">(With Estimated Costs)</span>
            </h3>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-zinc-700 text-sm table-fixed">
                <thead className="bg-zinc-900/50">
                  <tr>
                    <th className="w-12 p-3 border border-zinc-700 text-left">Select</th>
                    <th className="w-40 p-3 border border-zinc-700 text-left">Experience</th>
                    <th className="w-64 p-3 border border-zinc-700 text-left">Description</th>
                    <th className="w-32 p-3 border border-zinc-700 text-left">Estimated Cost (USD)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border border-zinc-700"><input type="checkbox" /></td>
                    <td className="p-3 border border-zinc-700">🏨 Accommodation</td>
                    <td className="p-3 border border-zinc-700">7 nights in a local Airbnb or boutique hotel</td>
                    <td className="p-3 border border-zinc-700">$400</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-zinc-700"><input type="checkbox" /></td>
                    <td className="p-3 border border-zinc-700">🍲 Local Food Tour</td>
                    <td className="p-3 border border-zinc-700">Street food crawl or private chef dinner</td>
                    <td className="p-3 border border-zinc-700">$150</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-zinc-700"><input type="checkbox" /></td>
                    <td className="p-3 border border-zinc-700">🏝️ Beach Party Access</td>
                    <td className="p-3 border border-zinc-700">Entry to exclusive beach party + transport</td>
                    <td className="p-3 border border-zinc-700">$100</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-zinc-700"><input type="checkbox" /></td>
                    <td className="p-3 border border-zinc-700">🎟️ Festival Ticket</td>
                    <td className="p-3 border border-zinc-700">Entry to Afrochella, Calabar Carnival, etc.</td>
                    <td className="p-3 border border-zinc-700">$250</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-zinc-700"><input type="checkbox" /></td>
                    <td className="p-3 border border-zinc-700">🚘 Private Chauffeur</td>
                    <td className="p-3 border border-zinc-700">Per day</td>
                    <td className="p-3 border border-zinc-700">$50</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-zinc-700"><input type="checkbox" /></td>
                    <td className="p-3 border border-zinc-700">🗺️ Historical Heritage Tour</td>
                    <td className="p-3 border border-zinc-700">Slave castles, museums, cultural landmarks</td>
                    <td className="p-3 border border-zinc-700">$200</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-zinc-700"><input type="checkbox" /></td>
                    <td className="p-3 border border-zinc-700">🎶 Live Music Event</td>
                    <td className="p-3 border border-zinc-700">Entry to a live Afrobeats or highlife concert</td>
                    <td className="p-3 border border-zinc-700">$120</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-zinc-700"><input type="checkbox" /></td>
                    <td className="p-3 border border-zinc-700">🛍️ Local Market Tour</td>
                    <td className="p-3 border border-zinc-700">Guided shopping tour + local guide support</td>
                    <td className="p-3 border border-zinc-700">$80</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-zinc-700"><input type="checkbox" /></td>
                    <td className="p-3 border border-zinc-700">💆🏾‍♀️ Relaxation Package</td>
                    <td className="p-3 border border-zinc-700">Spa + massage + beach day</td>
                    <td className="p-3 border border-zinc-700">$180</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-zinc-700"><input type="checkbox" /></td>
                    <td className="p-3 border border-zinc-700">🎉 New Year’s Eve Experience</td>
                    <td className="p-3 border border-zinc-700">Party, fireworks, luxury rooftop entry</td>
                    <td className="p-3 border border-zinc-700">$275</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-zinc-700"><input type="checkbox" /></td>
                    <td className="p-3 border border-zinc-700">📸 Professional Photoshoot</td>
                    <td className="p-3 border border-zinc-700">Local photographer + cultural backdrops</td>
                    <td className="p-3 border border-zinc-700">$95</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-zinc-700"><input type="checkbox" /></td>
                    <td className="p-3 border border-zinc-700">🏞️ Day Trip Outside City</td>
                    <td className="p-3 border border-zinc-700">City center</td>
                    <td className="p-3 border border-zinc-700">$160</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
