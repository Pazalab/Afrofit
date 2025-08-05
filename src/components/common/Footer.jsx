import { Link } from "react-router-dom"
import { GrFacebookOption, GrLinkedinOption } from "react-icons/gr";
import { RiInstagramLine } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineTikTok } from "react-icons/ai";
import { useContext } from "react";
import { languageContext } from "./languageContext";

const Footer = () => {
    const [ language] = useContext(languageContext);

  return (
    <div className="footer">
              <div className="inner-row">
                      <div className="footer-content">
                                <p>{language.data.pages.home.copyright.text} &copy; { new Date().getFullYear() } Afro'Fit Africa</p>
                                <div className="footer-social-links">
                                         <ul>
                                                 <li><Link to={"/"}><span><GrFacebookOption /></span></Link></li>
                                                  <li><Link to={"/"}><span><RiInstagramLine /></span></Link></li>
                                                   <li><Link to={"/"}><span><FaXTwitter /></span></Link></li>
                                                    <li><Link to={"/"}><span><AiOutlineTikTok /></span></Link></li>
                                                     <li><Link to={"/"}><span><GrLinkedinOption /></span></Link></li>
                                         </ul>
                                </div>
                      </div>
              </div>
    </div>
  )
}

export default Footer