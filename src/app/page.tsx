import { LanguageProvider } from "@/components/LanguageProvider";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Credentials from "@/components/Credentials";

export default function Home() {
  return (
    <LanguageProvider>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Portfolio/>
      <Skills/>
      <Credentials />
      <Contact />
      <Footer />
    </LanguageProvider>
  );
}
