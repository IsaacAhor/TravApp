"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Menu } from "lucide-react";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";

export function Header() {
  return (
    <header className="py-4 px-4 border-b border-zinc-800 backdrop-blur-sm bg-background/80 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={(e) => {
            if (window.location.pathname === "/") {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
        >
          {/* Removed logo image */}
          <span className="font-bold text-xl">TravApp</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/#destinations" className="text-zinc-400 hover:text-primary transition-colors">
            Destinations
          </Link>
          <Link href="/pricing" className="text-zinc-400 hover:text-primary transition-colors">
            Touchdown
          </Link>
          <Link href="/features" className="text-zinc-400 hover:text-primary transition-colors">
            Features
          </Link>
          <Link href="/how-it-works" className="text-zinc-400 hover:text-primary transition-colors">
            How It Works
          </Link>
          <Link href="/partners/join" className="text-zinc-400 hover:text-primary transition-colors">
            Partner With Us
          </Link>
        </nav>

        {/* Mobile Hamburger + Buttons */}
        <div className="flex items-center gap-4">
          <Button variant="link" className="text-zinc-400 hover:text-primary transition-colors hidden md:inline-flex">
            Sign In
          </Button>
          <Link href="/tripestimate" className="flex">
            <Button className="bg-primary hover:bg-primary/80 text-white flex items-center gap-2 w-full">
              Estimate My Trip
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>

          {/* Mobile Menu Trigger */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="w-6 h-6" />
                <span className="sr-only">Open Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-6 flex flex-col gap-6">
              <nav className="flex flex-col gap-4">
                <Link href="/#destinations" className="text-zinc-400 hover:text-primary transition-colors">
                  Destinations
                </Link>
                <Link href="/pricing" className="text-zinc-400 hover:text-primary transition-colors">
                  Touchdown
                </Link>
                <Link href="/features" className="text-zinc-400 hover:text-primary transition-colors">
                  Features
                </Link>
                <Link href="/how-it-works" className="text-zinc-400 hover:text-primary transition-colors">
                  How It Works
                </Link>
                <Link href="/partners/join" className="text-zinc-400 hover:text-primary transition-colors">
                  Partner With Us
                </Link>
                <Link href="/tripestimate" className="text-zinc-400 hover:text-primary transition-colors">
                  Estimate My Trip
                </Link>
                <Link href="#" className="text-zinc-400 hover:text-primary transition-colors">
                  Sign In
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
