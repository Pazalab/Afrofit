import { useState } from "react"
import { RxPlus, RxMinus } from "react-icons/rx";

const FaqSection = () => {
  return (
    <div className="faq-section">
             <div className="inner-row">
                      <div className="faq-section-content">
                                <div className="faq-texts">
                                          <h2>All the Details, Explained</h2>
                                          <p>Find quick answers to the most common questions about our services and process.</p>
                                </div>
                                <div className="faqs-row">
                                            <FaqMoja />
                                </div>
                      </div>
             </div>
    </div>
  )
}


const FaqMoja = () => {
    const [ active, setActive ] = useState(false);
      return (
        <div className="faq-moja">
                <div className="faq-moja-header" onClick={() => setActive(!active)}>
                            { active ? <span><RxMinus /></span> : <span><RxPlus /></span>}
                            <h3>What kind of products do you offer?</h3>
                </div>
                <div className="faq-answer">
                           <div className="faq-answer-inner">
                                    <p>We offer a wide range of handcrafted African items including clothing, handbags, jewelry, home decor, sandals, coasters, jars, and custom-designed pieces tailored to your style and space.</p>
                           </div>
                </div>
        </div>
      )
}
export default FaqSection