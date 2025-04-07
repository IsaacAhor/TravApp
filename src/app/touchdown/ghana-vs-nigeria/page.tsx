import Image from "next/image";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";

export default function GhanaVsNigeriaPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <section className="flex-1 px-4 py-16 mt-16 max-w-4xl mx-auto">
        <div className="mb-8">
          <Image
            src="/images/jollof.jpg"
            alt="Ghana vs Nigeria Jollof"
            width={1200}
            height={600}
            className="rounded-lg shadow-lg object-cover w-full h-auto"
            priority
          />
        </div>

<h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6 text-center px-2">
          🌍 🇬🇭/🇳🇬 Ghana vs. Nigeria: Fun, Culture, Vibes & Jollof – Who Really Runs West Africa?
        </h1>

<p className="text-zinc-400 mb-6 text-base sm:text-lg md:text-xl text-center px-4">
          Can’t decide between Ghana and Nigeria? Explore this vibe-based comparison of fun, food, music, and culture — and choose your own West African adventure.
        </p>
        <p className="text-zinc-400 mb-6 text-base sm:text-lg md:text-xl text-center px-4">
          West Africa is calling, and two countries top the list: Ghana and Nigeria. Rich in history, rhythm, and personality, both are overflowing with experiences you won’t find anywhere else in the world. But if you had to choose one for your next trip, how do you decide?
        </p>
        <p className="text-zinc-400 mb-6 text-base sm:text-lg md:text-xl text-center px-4">
          You don’t need a verdict. You just need to feel the vibe. Let’s break it down.
        </p>

        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold mb-2">🍚 The Jollof War (Yes, It’s Serious)</h2>
            <p className="text-zinc-400">
              If you're new to West Africa, there's one thing you’ll learn fast: Jollof rice is more than food — it's national pride on a plate.
              <br /><br />
              <strong>Ghanaian Jollof:</strong> Subtle, fragrant, made with local rice and often served with spicy shito sauce. Balanced and earthy.
              <br /><br />
              <strong>Nigerian Jollof:</strong> Rich, bold, and smoked to perfection. Cooked like a performance. It hits with layers of flavor (and spice).
              <br /><br />
              You’ll hear jokes, memes, debates, and entire music lyrics about whose jollof reigns supreme. But honestly? The real winner is you, because you get to try both.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">🎶 Music: A Soundtrack for the Soul</h2>
            <p className="text-zinc-400">
              <strong>In Ghana...</strong><br />
              You’ll hear smooth Highlife, upbeat Azonto, and thoughtful Afro-fusion sounds that make you want to dance with your eyes closed. Music here is a lifestyle, often live, often improvised, always meaningful.
              <br /><br />
              <strong>In Nigeria...</strong><br />
              The bass drops before you even land. Afrobeats is everywhere — from street corners to global stages. It's loud, bold, and infectious. Think Burna Boy, Wizkid, Davido. It's a rhythm you carry home in your bones. Each country has its own musical heartbeat. The question is — which one syncs with yours?
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">🏙️ Fun & Nightlife: Where the Streets Come Alive</h2>
            <p className="text-zinc-400">
              <strong>Ghana by Night...</strong><br />
              Accra offers rooftop bars, art events, Sunday beach parties, and December festivals that draw global crowds. The energy is curated, cool, and endlessly Instagrammable.
              <br /><br />
              <strong>Nigeria by Night...</strong><br />
              Lagos doesn't sleep. Period. Nightclubs, spontaneous street jams, 3 a.m. suya, boat parties on the lagoon — it’s a city that throws fun at you and dares you to keep up.
              <br /><br />
              Ask yourself: Do you like your nights laid-back and vibey, or wild and unforgettable?
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">🎨 Culture: Depth, Tradition, and Everyday Magic</h2>
            <p className="text-zinc-400">
              <strong>Ghanaian Culture...</strong><br />
              Rooted in respect, storytelling, and community. From the castles of Cape Coast to traditional durbars and kente weaving, there’s a quiet richness to Ghana that invites you to slow down and connect.
              <br /><br />
              <strong>Nigerian Culture...</strong><br />
              Loud, fast, and fiercely expressive. Think Nollywood, Ankara streetwear, spoken-word poetry, and weddings that feel like music videos. It’s culture as spectacle — and it’s unapologetic.
              <br /><br />
              Both countries will teach you something. One whispers. The other shouts.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">🤝 The People: Friendship in Different Forms</h2>
            <p className="text-zinc-400">
              <strong>Ghanaians...</strong><br />
              Calm, courteous, full of warmth. They’ll offer directions, walk with you, and insist you try their food — even if you just met. Hospitality here feels like a quiet hug.
              <br /><br />
              <strong>Nigerians...</strong><br />
              Direct, funny, and full of confidence. You’ll be welcomed with laughter, banter, and big personalities. Friendships here are forged fast — sometimes over Jollof, sometimes mid-argument. It’s a loud embrace you won’t forget.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">🎭 Final Feelings — No Verdict Needed</h2>
            <p className="text-zinc-400">
              Love slow mornings and long conversations by the sea?
              <br /><br />
              Crave chaotic markets, late-night music, and random dance-offs?
              <br /><br />
              Want your soul stirred by drums, or set on fire by bass drops?
              <br /><br />
              This isn’t a question of better. It’s a question of what calls to you.
              <br /><br />
              Ghana is the soft rhythm under your feet.
              Nigeria is the full-volume chorus in your chest.
              So ask yourself one thing:
              <strong>Which vibe do you need right now?</strong>
            </p>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <a href="/tripestimate">
            <Button className="bg-primary hover:bg-primary/80 text-white px-6 py-3 text-lg">
              Estimate My Trip
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
