import { Link } from "react-scroll"
import capacity1 from "../assets/capacity3.jpg"
import capacity2 from "../assets/capacity2.jpg"
import { BsArrowDown } from "react-icons/bs";
import { useContext } from "react";
import { languageContext } from "./common/languageContext";

const Capabilities = () => {
    const [ language ] = useContext(languageContext);
  return (
    <div className="capabilities-section">
              <div className="inner-row">
                       <div className="capabilities-section-content">
                                  {/* <div className="capability-images">
                                            <img data-aos="zoom-in-up" src={capacity2} alt="" />
                                  </div> */}
                                  <div className="capability-intro">
                                           <h2 data-aos="zoom-in-right">{ language.data.pages.home.capabilitySection.intro.title }</h2>
                                           {/* <div className="intro-texts">
                                                   <p data-aos="zoom-in-left">{ language.data.pages.home.capabilitySection.intro.description[0]}</p>
                                                   <p data-aos="zoom-in-left">{ language.data.pages.home.capabilitySection.intro.description[1]}</p>

                                                   <Link data-aos="zoom-in-left" to="contact" smooth={true}>{ language.data.pages.home.capabilitySection.intro.link}<span><BsArrowDown /></span></Link>
                                           </div> */}
                                  </div>
                                  <div className="capability-row">
                                             <div className="capability-row-column">
                                                          <h3 data-aos="zoom-in-down">Capabilities</h3>
                                                          <ul>
                                                                  { language.data.pages.home.capabilitySection.listings.map(item => (
                                                                          <li key={item.id} data-aos="zoom-in-right">
                                                                                  <img src={item.icon} alt="" />
                                                                                  <div className="">
                                                                                           <h4>{item.title}</h4>
                                                                                           <p>{item.text}</p>
                                                                                  </div>
                                                                          </li>
                                                                  ))}
                                                          </ul>
                                             </div>
                                             <div className="capability-row-image" data-aos='zoom-in-left'>
                                                      <img src={capacity1} alt="" />
                                             </div>
                                  </div>
                       </div>
              </div>
    </div>
  )
}

export default Capabilities