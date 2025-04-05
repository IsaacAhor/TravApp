import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";

export default function ComingSoonPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <section className="flex-1 flex flex-col justify-center items-center text-center px-4 mt-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Coming Soon</h1>
        <p className="text-zinc-400 max-w-2xl mb-8">
          This article is on its way. Check back later for updates!
        </p>
        <a href="/pricing">
          <Button className="bg-primary hover:bg-primary/80 text-white px-6 py-3 text-lg">
            Back to Touchdown
          </Button>
        </a>
      </section>

      <Footer />
    </main>
  );
}
