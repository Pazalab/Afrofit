import { useContext } from "react";
import artisan1 from "../assets/artisan1.avif"
import artisan2 from "../assets/artisan2.jpg"
import { artisans } from "../data/artisans"
import { FaRegDotCircle } from "react-icons/fa";
import { languageContext } from "./common/languageContext";

const ArtisansSection = () => {
    const [ language ] = useContext(languageContext);

  return (
    <div className="artisans-section">
             <div className="inner-row">
                        <div className="artisans-section-content">
                                   <div className="artisans-images">
                                              <img src={artisan2} data-aos="zoom-in-right" alt="" />
                                              <img src={artisan1} data-aos="zoom-in-left" alt="" />
                                   </div>
                                   <div className="artisans-texts">
                                                <h2 data-aos="zoom-in-left">{ language.data.pages.home.artisans.intro}</h2>
                                                <p data-aos="zoom-in-left">{ language.data.pages.home.artisans.description}</p>

                                                <ul>
                                                          { artisans.map(item => <li key={item} data-aos="zoom-in-left"> <span><FaRegDotCircle /></span>{item}</li>)}
                                                </ul>
                                   </div>
                        </div>
             </div>
    </div>
  )
}

export default ArtisansSection