import Navbar from "../components/layout/Navbar";
import Hero from "../components/landing/Hero";
import Preview from "../components/landing/Preview";
import Feature from "../components/landing/Feature";
import HowItWorks from "../components/landing/HowItWorks";
import CTA from "../components/landing/CTA";
import Footer from "../components/layout/Footer";

function Landing() {
  return (
    <>
      <Navbar />
      <Hero />
      <Preview/>
      <Feature />
      <HowItWorks />
      <CTA />
      <Footer />
    </>
  );
}

export default Landing;