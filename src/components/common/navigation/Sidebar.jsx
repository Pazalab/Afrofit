import { NavLink } from "react-router-dom"
import logo from "../../../assets/logo-2.png"
import { CgClose } from "react-icons/cg"
import { Link } from "react-scroll"
import { useContext, useEffect, useRef } from "react"
import { languageContext } from "../languageContext"
import { sidebarContext } from "./navcontext"
import gsap from "gsap"
const Sidebar = () => {
  const [ language ] = useContext(languageContext);
  const [ sidebarStatus, setSidebarStatus ] = useContext(sidebarContext);
  const sidebarRef = useRef();

  useEffect(() =>{
         if(sidebarStatus){
               sidebarRef.current.classList.add("active");

               const tl = gsap.timeline();

               tl.to(sidebarRef.current.querySelector(".sidebar-overlay"),{
                     y: 0,
                     duration: 0.75,
                     ease: "power2.out"
               })
               tl.to(sidebarRef.current.querySelector(".sidebar-content"),{
                    x: 0,
                    duration: 0.5,
                    ease: "power2.out"
               })
         }
  }, [sidebarStatus]);
  

  const handleSidebarClose = () => {
       const tl = gsap.timeline();

       tl.to(sidebarRef.current.querySelector(".sidebar-content"), {
              x: "-100%",
              duration: 0.5,
              ease: "power2.in"
       })

       tl.to(sidebarRef.current.querySelector(".sidebar-overlay"), {
              y: "-100%",
              duration: 0.75,
              ease: "power2.in",
              onComplete: () => {
                    sidebarRef.current.classList.remove("active");
                    setSidebarStatus(false);
              }
       })
  }
  return (
    <div ref={sidebarRef} className='sidebar-section'>
             <div className="sidebar-overlay"></div>
             <div className="sidebar-content">
                      <div className="sidebar-header">
                               <NavLink to={"/"} className="logo">
                                       <img src={logo} alt="Afrofit logo" />
                               </NavLink>
                               <span className="sidebar-close" onClick={handleSidebarClose}><CgClose /></span>
                      </div>
                      <div className="sidebar-nav">
                              <ul>
                                      { language.data.header.nav.map(item =>
                                           <li key={item.link}>
                                                 <Link to={item.link} activeClass="active" spy={true} smooth={true}>
                                                       {item.name}
                                                 </Link>
                                           </li>
                                      )}            
                                      <li><Link to="contact">{language.data.header.action}</Link></li>
                              </ul>
                      </div>
             </div>
    </div>
  )
}

export default Sidebar