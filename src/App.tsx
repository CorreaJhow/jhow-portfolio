import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import LinksHub from "./components/LinksHub";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <LinksHub />
      </main>
      <Footer />
    </div>
  );
}
