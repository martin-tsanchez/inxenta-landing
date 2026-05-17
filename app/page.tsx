import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Workflow from "@/components/Workflow";
import ROI from "@/components/ROI";
import VideoDemo from "@/components/VideoDemo";
import ForWho from "@/components/ForWho";
import DemoCTA from "@/components/DemoCTA";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col flex-1">
      <Nav />
      <Hero />
      <Problem />
      <Workflow />
      <ROI />
      <VideoDemo />
      <ForWho />
      <DemoCTA />
      <FAQ />
      <Footer />
    </main>
  );
}
