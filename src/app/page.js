import About from "@/Components/HomeCom/About";
import Acheive from "@/Components/HomeCom/Acheive";
import CaseStudies from "@/Components/HomeCom/CaseStudies";
import ConatactUs from "@/Components/HomeCom/ConatactUs";
import CTA from "@/Components/HomeCom/CTA";
import FAQ from "@/Components/HomeCom/FAQ";
import Footer from "@/Components/HomeCom/Footer";
import Header from "@/Components/HomeCom/Header";
import Hero from "@/Components/HomeCom/Hero";
import Insight from "@/Components/HomeCom/Insight";
import LeaderShip from "@/Components/HomeCom/LeaderShip";
import Navbar from "@/Components/HomeCom/Navbar";
import Partner from "@/Components/HomeCom/Partner";
import Testimonial from "@/Components/HomeCom/Testimonial";

export default function Home() {
  return (
    <>
 
    <Hero/>
    <About/>
    <CaseStudies/>
    <Partner/>
    <LeaderShip/>
    <Acheive/>
    <FAQ/>
    <Testimonial/>
    <Insight/>
    <ConatactUs/>
    <CTA/>
    </>
  );
}
