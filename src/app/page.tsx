import Hero from "./components/Hero"
import MissionVision from "./components/MissionVision"
import Services from "./components/Services"
import AIHealthcare from "./components/AIHealthcare"
import AITelecom from "./components/AITelecom"
import Benefits from "./components/Benefits"
import WhyChooseUs from "./components/WhyChooseUs"
import Contact from "./components/Contact"

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <MissionVision />
      <Services />
      <AIHealthcare />
      <AITelecom />
      <Benefits />
      <WhyChooseUs />
      <Contact />
    </main>
  )
}

