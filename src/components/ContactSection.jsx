import { useContext } from "react"
import contact from "../assets/contact4.jpg"
import { languageContext } from "./common/languageContext"
const ContactSection = () => {
    const [ language ] = useContext(languageContext);

  return (
    <div className="contact-section">
               <div className="inner-row">
                        <div className="contact-section-content">
                                  <div className="contact-form-column">
                                              <div className="contact-form-inner">
                                                        <h2>{ language.data.pages.home.contact.intro.title}</h2>
                                                        <p>{ language.data.pages.home.contact.intro.description}</p>

                                                        <form>
                                                                  <div className="form-row">
                                                                             <label htmlFor="name">{ language.data.pages.home.contact.form.name.label} <span>*</span></label>
                                                                             <input type="text" placeholder={language.data.pages.home.contact.form.name.placeholder} className="form-control" />
                                                                  </div>
                                                                  <div className="form-row">
                                                                             <label htmlFor="email">{language.data.pages.home.contact.form.email.label} <span>*</span></label>
                                                                             <input type="email" placeholder={language.data.pages.home.contact.form.email.placeholder} className="form-control" />
                                                                  </div>
                                                                  <div className="form-row">
                                                                              <label htmlFor="message">{language.data.pages.home.contact.form.message.label} <span>*</span></label>
                                                                              <textarea placeholder={language.data.pages.home.contact.form.message.placeholder}></textarea>
                                                                  </div>
                                                                  <div className="form-btn">
                                                                             <button type="submit">{ language.data.pages.home.contact.form.btn.text}</button>
                                                                  </div>
                                                        </form>
                                              </div>
                                  </div>
                                  <div className="contact-image-side">
                                            <img src={contact} alt="" />
                                            <div className="covershadow">
                                                        <div className="covershadow-texts">
                                                                   <h3>+237 655 219 850</h3>
                                                                   <h3>hello@afrofit.africa</h3>
                                                        </div>
                                            </div>
                                  </div>
                        </div>
               </div>
    </div>
  )
}

export default ContactSection