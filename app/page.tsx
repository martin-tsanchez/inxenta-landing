import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import ForWho from "@/components/ForWho";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col flex-1">
      <Nav />
      <Hero />
      <Problem />
      <ForWho />
      <Footer />
    </main>
  );
}
