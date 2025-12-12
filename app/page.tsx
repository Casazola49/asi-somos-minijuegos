import { Hero } from "@/components/home/Hero";
import { GameGrid } from "@/components/home/GameGrid";
import { Footer } from "@/components/home/Footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Hero />
      <GameGrid />
      <Footer />
    </main>
  );
}

