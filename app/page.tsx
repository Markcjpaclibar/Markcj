import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";
import FeaturedProjects from "@/components/projects/FeaturedProjects";
import Services from "@/components/services/Services";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Skills />
      <FeaturedProjects />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}