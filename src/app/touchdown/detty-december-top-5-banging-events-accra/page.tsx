import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";

export default function DettyDecemberPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <section className="flex-1 px-4 py-16 mt-16 max-w-4xl mx-auto">
        <div className="mb-8">
          <Image
            src="/images/2girls-detty-december.jpg"
            alt="Detty December in Accra"
            width={1200}
            height={600}
            className="rounded-lg shadow-lg object-cover w-full h-auto"
            priority
          />
        </div>

        <h1 className="text-3xl md:text-5xl font-bold mb-6 text-center">
          🎉 Detty December: Top 5 Banging Events in Accra
        </h1>

        <p className="text-zinc-400 mb-8 text-center">
          Explore the top 5 must-attend Detty December events in Accra, Ghana. From electrifying concerts to unforgettable beach parties, here’s your ultimate 2025 party guide!<br /><br />
          If you're looking to turn up this festive season, Accra is the place to be. Every December, the city transforms into a global hotspot for music, nightlife, and unforgettable experiences. Dubbed "Detty December", this month-long celebration attracts celebrities, tourists, and party lovers from around the world. Whether you're a local or flying in from abroad, here's your curated list of the Top 5 Banging Events in Accra this December 2025.
        </p>

        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold mb-2">1. Afrochella (AfroFuture Festival)</h2>
            <p className="text-zinc-400 mb-1">📍 El Wak Stadium</p>
            <p className="text-zinc-400 mb-1">📅 December 26–27, 2025</p>
            <p className="text-zinc-400 mb-2">💰 Entry Ticket Price: Coming Soon</p>
            <p className="text-zinc-400">
              Afrochella—now known as AfroFuture Festival—is more than just a concert. It’s a cultural movement. Expect electrifying performances from Afrobeats giants, immersive art installations, fashion pop-ups, and Ghanaian cuisine that hits every spot. With past headliners like Burna Boy, Wizkid, and Tiwa Savage, this event is a global magnet.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">2. Little Havana</h2>
            <p className="text-zinc-400 mb-1">📍 Pearl Gardens, East Legon</p>
            <p className="text-zinc-400 mb-1">📅 December 25, 2025</p>
            <p className="text-zinc-400 mb-2">💰 Entry Ticket Price: Coming Soon</p>
            <p className="text-zinc-400">
              This premium day party is the go-to for lovers of good vibes and stunning aesthetics. With palm trees, signature cocktails, curated music, and Ghana’s best DJs, Little Havana is perfect for those who want to celebrate Christmas with flair. It sells out fast, so grab your tickets early.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">3. Tidal Rave Festival</h2>
            <p className="text-zinc-400 mb-1">📍 Kokrobite Beach</p>
            <p className="text-zinc-400 mb-1">📅 December 21, 2025</p>
            <p className="text-zinc-400 mb-2">💰 Entry Ticket Price: Coming Soon</p>
            <p className="text-zinc-400">
              Tidal Rave is Ghana’s biggest beach party, bringing together thousands for a day of sun, sand, music, and madness. There are beach games, grill stands, cocktails, and performances by the hottest acts. If you're looking for that true Detty December beach experience, this is the event to hit.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">4. Bloom Playhouse NYE Party</h2>
            <p className="text-zinc-400 mb-1">📍 Bloom Bar, Osu</p>
            <p className="text-zinc-400 mb-1">📅 December 31, 2025</p>
            <p className="text-zinc-400 mb-2">💰 Entry Ticket Price: Coming Soon</p>
            <p className="text-zinc-400">
              Ring in the New Year at one of Accra’s trendiest lounges. Bloom Bar delivers an epic New Year’s Eve experience with firework displays, bottle service, and a glamorous crowd. Come dressed to impress—this is where Accra’s elite gather for that final December blowout.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">5. Sandbox Beach Club – Detty December Sundays</h2>
            <p className="text-zinc-400 mb-1">📍 South Labadi</p>
            <p className="text-zinc-400 mb-1">📅 Every Sunday in December 2025</p>
            <p className="text-zinc-400 mb-2">💰 Entry Ticket Price: approximately $10</p>
            <p className="text-zinc-400">
              Luxury meets music at Sandbox. Their December Sunday series offers everything from chilled afternoon hangouts to full-blown night raves with international DJs. Enjoy gourmet food, champagne towers, and a seaside view that makes every Instagram story pop.
            </p>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <Link href="/tripestimate">
            <Button className="bg-primary hover:bg-primary/80 text-white px-6 py-3 text-lg">
              Estimate My Trip
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
