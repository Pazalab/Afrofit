import { Link } from "react-scroll"
import hero1 from "../assets/hero1.png"
import hero2 from "../assets/hero2.jpg"
import hero3 from "../assets/hero3.jpg"
import { BsArrowDown } from "react-icons/bs";
import { useContext } from "react";
import { languageContext } from "./common/languageContext";
const HeroSection = () => {
  const [language] = useContext(languageContext);
  return (
    <div className="hero-section">
           <div className="inner-row">
                     <div className="hero-section-content">
                              <div className="hero-col-item">
                                       <h1>{ language.data.pages.home.heroSection.title}.</h1>
                                       <Link  spy={true} smooth={true} to="collection">{language.data.pages.home.heroSection.linkText} <span><BsArrowDown /></span></Link>

                                       <img src={hero1} alt="" />
                              </div>
                              <div className="hero-col-item">
                                       <img src={hero2} alt="" />
                              </div>
                              <div className="hero-col-item">
                                       <div className="hero-col-texts">
                                                  <div className="hero-col-ads">
                                                        { language.data.pages.home.heroSection.description.spans.map(item => (
                                                          <span key={item}>{item}</span>))}
                                                  </div>
                                                  <p>{language.data.pages.home.heroSection.description.text}</p>

                                                  <img src={hero3} alt="" />
                                       </div>
                              </div>
                     </div>
           </div>
    </div>
  )
}

export default HeroSection