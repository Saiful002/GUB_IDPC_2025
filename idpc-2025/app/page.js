
import HeroSection from "./components/HeroSection";
import Countdown from "./components/Countdown";
import About from "./components/About";
import Organizer from "./components/Organizer";
import Sponsor from "./components/Sponsor";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="text-white">
      <HeroSection></HeroSection>
      <Countdown></Countdown>
      <About></About>
      <Organizer></Organizer>
      <Sponsor></Sponsor>
      <Contact></Contact>

    </div>
  );
}
