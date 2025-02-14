import { AgentiaWorld } from "@/components/neo";
import { Hero } from "@/components/hero";
import PricingPage from "@/components/prices";
import Contact from "./contact/page";



export default function Home() {
  return (
    <div>
      <Hero />
      <AgentiaWorld />
      <PricingPage />
      <Contact /> 
    </div>
  );
}

