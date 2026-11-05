import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import Services from "./components/Services";
import Included from "./components/Included";
import CtaHighlight from "./components/CtaHighlight";
import Projects from "./components/Projects";
import Faq from "./components/Faq";
import LinksHub from "./components/LinksHub";
import Footer from "./components/Footer";
import Reveal from "./components/Reveal";
import BlackFriday, { BlackFridayBar, BlackFridayOffer } from "./components/BlackFriday";

export default function App() {
  return (
    <div className="min-h-screen bg-cafe-950">
      <BlackFridayBar />
      <Nav />
      <main>
        <Hero />
        <BlackFridayOffer />
        <Stats />
        <Reveal>
          <About />
        </Reveal>
        <Reveal>
          <Services />
        </Reveal>
        <Reveal>
          <Included />
        </Reveal>
        <Reveal>
          <CtaHighlight />
        </Reveal>
        <Reveal>
          <Projects />
        </Reveal>
        <Reveal>
          <Faq />
        </Reveal>
        <Reveal>
          <LinksHub />
        </Reveal>
      </main>
      <Footer />
      <BlackFriday />
    </div>
  );
}
