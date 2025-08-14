import { useContext } from "react";
import { artisans } from "../data/artisans"
import { IoLocationOutline } from "react-icons/io5";
import { languageContext } from "./common/languageContext";
import artisan1 from "../assets/about.jpg";
import artisan2 from "../assets/about3.jpg"
import artisan3 from "../assets/mama.jpg"

import afrimap from "../assets/afrimap.png"

const ArtisansSection = () => {
    const [ language ] = useContext(languageContext);

  return (
    <div className="artisans-section">
             <div className="inner-row">
                        <div className="artisans-section-content">
                                   <div className="artisans-images">
                                              <img src={artisan1} data-aos="zoom-in-right" alt="" />
                                              <div className="artisans-split">
                                                        <img src={artisan2} data-aos="zoom-in-left" alt="" />
                                                        <img src={artisan3} data-aos="zoom-in-left" alt="" />
                                              </div>
                                   </div>
                                   <div className="artisans-texts">
                                                <h2 data-aos="zoom-in-left">{ language.data.pages.home.artisans.intro}</h2>
                                                {/* <p data-aos="zoom-in-left">{ language.data.pages.home.artisans.description}</p> */}

                                                <div className="artisan-map-group">
                                                          <img src={afrimap} alt="" />
                                                           <ul>
                                                                     { artisans.map(item => <li key={item} data-aos="zoom-in" data-aos-delay="1000"> <span><IoLocationOutline /></span>{item}</li>)}
                                                           </ul>
                                                </div>
                                   </div>
                        </div>
             </div>
    </div>
  )
}

export default ArtisansSection