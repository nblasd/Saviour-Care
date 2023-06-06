import Apps from "@/components/Apps";
import Finder from "@/components/Finder";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Leading from "@/components/Leading";
import Navbar from "@/components/Navbar";
import Scroll from "@/components/Scroll";
import Services from "@/components/Services";


export default function Home() {
 
  return(
    <main>
      <Navbar />
      <Hero />
      <Services/>
      <Leading/>
      <Apps/>
      <Finder/>
      <Footer/>
      <Scroll/>
    </main>
  );
}
