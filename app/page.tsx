import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Features from "@/components/Features";
import ForWho from "@/components/ForWho";
import Waitlist from "@/components/Waitlist";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col flex-1">
      <Nav />
      <Hero />
      <Problem />
      <Features />
      <ForWho />
      <Waitlist />
      <Footer />
    </main>
  );
}
