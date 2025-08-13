import { BsArrowDown } from "react-icons/bs"
import { Link } from "react-scroll"
import product1 from "../assets/products/prod8.jpg"
import product2 from "../assets/products/prod4.jpg"
import product3 from "../assets/products/prod10.jpg"
import product4 from "../assets/products/prod6.jpg"
import product5 from "../assets/products/prod2.jpg"
import product6 from "../assets/products/prod7.png"
import product7 from "../assets/products/prod3.jpg"
import product8 from "../assets/products/prod8.jpg"
import product9 from "../assets/products/prod11.jpg"
import product10 from "../assets/products/prod1.jpg"
import product11 from "../assets/products/prod9.avif"
import product12 from "../assets/products/prod12.jpg"
import product13 from "../assets/products/prod13.jpg"
// import product14 from "../assets/products/prod14.jpg"
// import product15 from "../assets/products/prod15.jpg"
import { useContext } from "react"
import { languageContext } from "./common/languageContext"
const Showcase = () => {
  const [ language ] = useContext(languageContext);

  return (
    <div className="showcase-section">
               <div className="inner-row">
                           <div className="showcase-content">
                                     <div className="showcase-intro">
                                                 <div className="showcase-column">
                                                           <h3 data-aos="zoom-in-down">{ language.data.pages.home.showcase.intro.secIntro}</h3>
                                                           <h2 data-aos="zoom-in-up">{ language.data.pages.home.showcase.intro.title}</h2>
                                                 </div>
                                                 <div className="showcase-column">
                                                         <p data-aos="zoom-in-left">{ language.data.pages.home.showcase.intro.description}</p>
                                                         <Link data-aos='zoom-in-left' to="contact" smooth={true}>{ language.data.pages.home.showcase.intro.linkText} <span><BsArrowDown /></span></Link>
                                                 </div>
                                     </div>

                                     <div className="showcase-photos-grid">
                                              <img src={product1} data-aos="zoom-in" alt="" />
                                              <img data-aos="zoom-in" src={product2} alt="" />
                                              <img data-aos="zoom-in" src={product3} alt="" />
                                              <img  src="product" alt="" />
                                              <img data-aos="zoom-in" src={product5} alt="" />
                                              <img data-aos="zoom-in" src={product6} alt="" />
                                              <img data-aos="zoom-in" src={product7} alt="" />
                                              <img data-aos="zoom-in" src={product4} alt="" />
                                              <img data-aos="zoom-in" src={product8} alt="" />
                                              <img  src="product" alt="" />
                                              <img data-aos="zoom-in" src={product9} alt="" />
                                              <img data-aos="zoom-in" src={product10} alt="" />
                                              <img data-aos="zoom-in" src={product11} alt="" />
                                              <img src={"product"} alt="" />
                                              <img data-aos="zoom-in" src={product12} alt="" />
                                              <img data-aos="zoom-in" src={product13} alt="" />
                                     </div>
                           </div>
               </div>
    </div>
  )
}

export default Showcase