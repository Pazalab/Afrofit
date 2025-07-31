import BenefitsSection from "../components/BenefitsSection"
import Navbar from "../components/common/navigation/Navbar"
import HeroSection from "../components/HeroSection"
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
          </Element>
    </>
  )
}

export default Home