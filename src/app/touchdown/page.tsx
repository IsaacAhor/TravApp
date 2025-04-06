import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";

export default function TouchdownPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <section className="flex-1 py-24 px-4 mt-16">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Touchdown</h1>
          <p className="text-zinc-400 max-w-2xl mx-auto mb-6">
            Your Trip Guide to Ghana & Nigeria
          </p>
          <p className="text-zinc-400 max-w-3xl mx-auto mb-12">
            Explore curated guides, travel tips, event highlights, and culture drops for your next trip to Ghana or Nigeria. From Detty December to everyday gems — Touchdown has you covered.
          </p>
        </div>

<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
  <a href="/touchdown/detty-december-top-5-banging-events-accra" className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 hover:border-primary/50 transition-all duration-300 block">
    <h3 className="text-xl font-semibold mb-2">🎉 Detty December: Top 5 Banging Events in Accra</h3>
    <p className="text-zinc-400">Discover the hottest parties, concerts, and festivals happening this December in Ghana's vibrant capital.</p>
  </a>
  <a href="/touchdown/budget-guide-ghana" className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 hover:border-primary/50 transition-all duration-300 block">
    <h3 className="text-xl font-semibold mb-2">💰 How to Budget a Trip from the US to Ghana</h3>
    <p className="text-zinc-400">Plan your expenses smartly with our budgeting tips covering flights, accommodation, and activities.</p>
  </a>
  <a href="/touchdown/ghana-vs-nigeria" className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 hover:border-primary/50 transition-all duration-300 block">
    <h3 className="text-xl font-semibold mb-2">🌍 Ghana vs. Nigeria: Which Should You Visit First?</h3>
    <p className="text-zinc-400">A quick guide comparing the best of both countries to help you decide your next adventure.</p>
  </a>
</div>

        <div className="text-center">
          <a href="/tripestimate">
            <Button className="bg-primary hover:bg-primary/80 text-white px-8 py-4 text-lg">
              Estimate My Trip
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
