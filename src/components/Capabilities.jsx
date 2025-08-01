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
                                  <div className="capability-images">
                                            {/* <img src={capacity1} alt="" /> */}
                                            <img src={capacity2} alt="" />
                                  </div>
                                  <div className="capability-intro">
                                           <h2>{ language.data.pages.home.capabilitySection.intro.title }</h2>
                                           <div className="intro-texts">
                                                   <p>{ language.data.pages.home.capabilitySection.intro.description[0]}</p>
                                                   <p>{ language.data.pages.home.capabilitySection.intro.description[1]}</p>

                                                   <Link to="contact" smooth={true}>{ language.data.pages.home.capabilitySection.intro.link}<span><BsArrowDown /></span></Link>
                                           </div>
                                  </div>
                                  <div className="capability-row">
                                             <div className="capability-row-column">
                                                          <h3>Capabilities</h3>
                                                          <ul>
                                                                  { language.data.pages.home.capabilitySection.listings.map(item => (
                                                                          <li key={item.id}>
                                                                                  <img src={item.icon} alt="" />
                                                                                  <div className="">
                                                                                           <h4>{item.title}</h4>
                                                                                           <p>{item.text}</p>
                                                                                  </div>
                                                                          </li>
                                                                  ))}
                                                          </ul>
                                             </div>
                                             <div className="capability-row-image">
                                                      <img src={capacity1} alt="" />
                                             </div>
                                  </div>
                       </div>
              </div>
    </div>
  )
}

export default Capabilities