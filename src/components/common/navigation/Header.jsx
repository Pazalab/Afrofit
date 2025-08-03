import { NavLink } from "react-router-dom"
import logo from "../../../assets/logo-2.png"
import { Link } from "react-scroll";
import french_flag from "../../../assets/french.png"
import english_flag from "../../../assets/english.png";
import { useContext, useEffect } from "react";
import { languageContext } from "../languageContext";
import { english, french } from "../../../data/language";
import { TbMenu4 } from "react-icons/tb";
import { sidebarContext } from "./navcontext";
const Header = () => {
  const [language, setLanguage] = useContext(languageContext);
  // eslint-disable-next-line no-unused-vars
  const [ sidebarStatus, setSidebarStatus ] = useContext(sidebarContext);

  useEffect(() => {
      window.addEventListener("scroll", () => {
          const header = document.querySelector("header");
          if (window.scrollY > 50) {
              header.classList.add("scrolled");
          } else {
              header.classList.remove("scrolled");
          }
      })
  }, [])

  const handleLanguageChange = (lang) => {
         if(lang === "FR"){
               setLanguage({ id:"FR", data: french})
               localStorage.setItem("langID", JSON.stringify("FR"));
         }else{
              setLanguage({id: "ENG", data: english})
              localStorage.setItem("langID", JSON.stringify("ENG"));
         }
          localStorage.setItem("language", JSON.stringify(lang === "FR" ? french : english));
  };
  
  useEffect(() => {
          document.title = language.data.site_identity.title+ "-" + language.data.site_identity.tagline
  }, [language])
  return (
    <header>
             <div className="inner-row">
                      <div className="header-content">
                               <NavLink to={"/"} className="logo">
                                        <img src={logo} alt="Afrofit logo" />
                               </NavLink>
                               <nav>
                                       <ul>
                                             { language.data.header.nav.map(item =>
                                                  <li key={item.link}>
                                                        <Link to={item.link} offset={-80}  activeClass="active" spy={true} smooth={true}>
                                                              {item.name}
                                                        </Link>
                                                  </li>
                                             )}
                                       </ul>
                               </nav>
                               <div className="header-actions">
                                        <Link to="contact" smooth={true}>{language.data.header.action}</Link>

                                        <div className="language-switch" onClick={() => handleLanguageChange(language.id === "FR" ? "ENG" : "FR")}>
                                                  { language.id === "FR" ? (
                                                        <div className="switch-moja">
                                                            <img src={french_flag} alt="" />
                                                            <span className="switch-moja-text">FR</span>
                                                        </div>
                                                  ) : (
                                                      <div className="switch-moja">
                                                                <img src={english_flag} alt="" />
                                                                <span className="switch-moja-text">ENG</span>
                                                      </div>
                                                  )}
                                        </div>

                                        <div className="menu-btn" onClick={() => setSidebarStatus(true)}>
                                                 <span><TbMenu4 /></span>
                                        </div>
                               </div>
                      </div>
             </div>
    </header>
  )
}

export default Header