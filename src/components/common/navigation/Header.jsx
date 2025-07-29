import { NavLink } from "react-router-dom"
import logo from "../../../assets/logo-2.png"
import { Link } from "react-scroll";
import french_flag from "../../../assets/french.png"
import english_flag from "../../../assets/english.png";
import { useContext, useEffect } from "react";
import { languageContext } from "../languageContext";
import { english, french } from "../../../data/language";
const Header = () => {
  const [language, setLanguage] = useContext(languageContext);

  console.log(language)
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
                                                        <Link to={item.link} activeClass="active" spy={true} smooth={true}>
                                                              {item.name}
                                                        </Link>
                                                  </li>
                                             )}
                                       </ul>
                               </nav>
                               <div className="header-actions">
                                        <Link to="contact">{language.data.header.action}</Link>

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
                               </div>
                      </div>
             </div>
    </header>
  )
}

export default Header