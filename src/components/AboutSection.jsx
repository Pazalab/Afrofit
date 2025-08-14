import { useContext } from "react"
import about from "../assets/pattern.avif"
import about2 from "../assets/about4.jpg"
import about3 from "../assets/about5.jpg"
import { languageContext } from "./common/languageContext"
const AboutSection = () => {
    const [ language ] = useContext(languageContext);

  return (
    <div className="about-section">
              <div className="inner-row">
                        <div className="about-section-content">
                                    <div className="about-section-col">
                                              <img src={about} data-aos="zoom-in-right" alt="" className="large-image" />
                                              <div className="about-section-split">
                                                       <div className="about-split-texts">
                                                                 <div className="statement-moja" data-aos="zoom-in-right">
                                                                          <h3>{language.data.pages.home.about.mission.title}</h3>
                                                                          <p>{language.data.pages.home.about.mission.text}</p>
                                                                 </div>
                                                                 <div className="statement-moja" data-aos="zoom-in-right">
                                                                             <h3>{language.data.pages.home.about.vision.title}</h3>
                                                                             <p>{ language.data.pages.home.about.vision.text}</p>
                                                                 </div>
                                                       </div>
                                                       <img data-aos="zoom-in" src={about3} alt="" />
                                              </div>
                                  </div>
                                  <div className="about-section-col">
                                             <div className="about-section-texts">
                                                        <h2 data-aos="zoom-in-left">{ language.data.pages.home.about.body.title}</h2>
                                                        <p data-aos="zoom-in-left">{ language.data.pages.home.about.body.description[0]}</p>
                                                        <p data-aos="zoom-in-left">{ language.data.pages.home.about.body.description[1]}</p>
                                             </div>
                                             <img data-aos="zoom-in-up" src={about2} alt="" className="extra-image" />
                                  </div>

                        </div>
              </div>
    </div>
  )
}

export default AboutSection