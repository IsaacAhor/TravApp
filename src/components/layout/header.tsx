import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Header() {
  return (
    <header className="py-4 px-4 border-b border-zinc-800 backdrop-blur-sm bg-background/80 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          {/* Removed logo image */}
          <span className="font-bold text-xl">TravApp</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="/#destinations" className="text-zinc-400 hover:text-primary transition-colors">
            Destinations
          </Link>
          <Link href="/pricing" className="text-zinc-400 hover:text-primary transition-colors">
            Pricing
          </Link>
          <Link href="/features" className="text-zinc-400 hover:text-primary transition-colors">
            Features
          </Link>
          <Link href="/how-it-works" className="text-zinc-400 hover:text-primary transition-colors">
            How TravApp Works
          </Link>
          <Link href="/tripestimate" className="text-zinc-400 hover:text-primary transition-colors">
            Estimate Your Monthly Plan
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="link" className="text-zinc-400 hover:text-primary transition-colors hidden md:inline-flex">
            Sign In
          </Button>
          <Link href="/tripestimate" className="flex">
            <Button className="bg-primary hover:bg-primary/80 text-white flex items-center gap-2 w-full">
              Join Waitlist
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
