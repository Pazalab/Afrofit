import quality from "../assets/quality.jpg"
import comms from "../assets/comms.png"
import collaboration from "../assets/collaboration.jpg"
import picture1 from "../assets/picture1.jpg"
import picture2 from "../assets/picture2.jpg"
import { useContext } from "react"
import { languageContext } from "./common/languageContext"

const BenefitsSection = () => {
    const [ language ] = useContext(languageContext);
  return (
    <div className="benefits-section">
               <div className="inner-row">
                         <div className="benefits-section-content">
                                    <div className="benefits-intro">
                                            <h2 data-aos="zoom-in-down">{language.data.pages.home.benefits.intro.title}</h2>
                                            <p data-aos="zoom-in-up">{language.data.pages.home.benefits.intro.description}</p>
                                    </div>
                                    <div className="benefits-content-row">
                                             <div className="tripple-grid-row">
                                                      <div className="tripple-grid-item" data-aos="zoom-in-right">
                                                                <div className="grid-item-texts">
                                                                        <h3>{ language.data.pages.home.benefits.listings.one.title}</h3>
                                                                        <p>{ language.data.pages.home.benefits.listings.one.text}</p>
                                                                </div>
                                                      </div>
                                                      <div className="tripple-grid-item">
                                                                <div className="tripple-grid-column" data-aos="zoom-in-down">
                                                                         <h3>{ language.data.pages.home.benefits.listings.two.title}</h3>
                                                                         <div className="grid-column-split">
                                                                                  <img src={quality} alt="" />
                                                                                   <p>{ language.data.pages.home.benefits.listings.two.text}</p>
                                                                         </div>
                                                                </div>
                                                                <div className="tripple-grid-column-short" data-aos="zoom-in-up">
                                                                           <div className="grid-texts">
                                                                                   <h3>{ language.data.pages.home.benefits.listings.three.title}</h3>
                                                                                   <p>{ language.data.pages.home.benefits.listings.three.text}</p>
                                                                           </div>
                                                                           <img src={comms} alt="" />
                                                                </div>
                                                      </div>
                                                      <div className="tripple-grid-item" data-aos="zoom-in-left">
                                                                 <div className="item-texts">
                                                                           <h3>{ language.data.pages.home.benefits.listings.four.title}</h3>
                                                                           <p>{ language.data.pages.home.benefits.listings.four.text}</p>
                                                                 </div>
                                                      </div>
                                             </div>
                                             <div className="double-grid-row">
                                                       <div className="first-double-column" data-aos="zoom-in-right">
                                                                <img src={collaboration} alt="" />
                                                                <div className="first-double-texts">
                                                                          <h3>{ language.data.pages.home.benefits.listings.five.title}</h3>
                                                                          <p>{ language.data.pages.home.benefits.listings.five.text}</p>
                                                                </div>
                                                       </div>
                                                       <div className="second-double-column" data-aos="zoom-in-left">
                                                                  <div className="second-double-texts">
                                                                          <h3>{ language.data.pages.home.benefits.listings.six.title}</h3>
                                                                          <p>{ language.data.pages.home.benefits.listings.six.text}</p>
                                                                  </div>
                                                                  <div className="double-images">
                                                                           <div className="image-container">
                                                                                   <img src={picture1} alt="" />
                                                                           </div>
                                                                           <div className="image-container">
                                                                                    <img src={picture2} alt="" />
                                                                           </div>
                                                                  </div>
                                                       </div>
                                             </div>
                                    </div>
                         </div>
               </div>
    </div>
  )
}

export default BenefitsSection