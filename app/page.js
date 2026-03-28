import dynamic from "next/dynamic";
import Hero from "./components/Hero";

// Lazy load non-critical sections
const CountdownTimer = dynamic(() => import("./components/CountdownTimer"), {
  loading: () => null,
});

const Features = dynamic(() => import("./components/Features"), {
  loading: () => null,
});

const Requirement = dynamic(() => import("./components/Requirement"), {
  loading: () => null,
});

const Testimonials = dynamic(() => import("./components/Testimonials"), {
  loading: () => null,
});

const CTA = dynamic(() => import("./components/CTA"), {
  loading: () => null,
});

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
