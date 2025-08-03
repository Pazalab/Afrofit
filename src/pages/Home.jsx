import AboutSection from "../components/AboutSection"
import ArtisansSection from "../components/ArtisansSection.jsx"
import BenefitsSection from "../components/BenefitsSection"
import Capabilities from "../components/Capabilities"
import Navbar from "../components/common/navigation/Navbar"
import HeroSection from "../components/HeroSection"
import Showcase from "../components/Showcase.jsx"
import Testimonials from "../components/Testimonials.jsx"
import "../css/home.css"
import { Element } from "react-scroll"

const Home = () => {
  return (
    <>
          <Element name="home">
                 <Navbar />
                 <HeroSection />
          </Element>
          <Element name="about">
                  <BenefitsSection />
                  <AboutSection />
          </Element>
          <Element name="capabilities">
                  <Capabilities />
          </Element>
          <Element name="showcase">
                  <Showcase />
                  <ArtisansSection />
          </Element>
          <Testimonials />
    </>
  )
}

export default Home