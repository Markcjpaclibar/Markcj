import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import FeaturedProjects from "@/components/projects/FeaturedProjects";
import StackRelyOn from "@/components/sections/StackRelyOn";
import Services from "@/components/services/Services";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="bg-[#070D1B]">
      <Navbar />
      <Hero />
      <FeaturedProjects />
      <StackRelyOn />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}