import Hero from "./components/Hero";
import Features from "./components/Features";
import Requirement from "./components/Requirement";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import CountdownTimer from "./components/CountdownTimer";

export default function Home() {
  return (
    <>
      <Hero />
      <CountdownTimer />
      <Features />
      <Requirement />
      <Testimonials />
      <CTA />
    </>
  );
}
