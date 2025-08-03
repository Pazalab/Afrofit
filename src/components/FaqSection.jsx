import { useContext, useState } from "react"
import { RxPlus } from "react-icons/rx";
import { languageContext } from "./common/languageContext";
import { CgClose } from "react-icons/cg";
const FaqSection = () => {
  const [ language ] = useContext(languageContext);

  return (
    <div className="faq-section">
             <div className="inner-row">
                      <div className="faq-section-content">
                                <div className="faq-texts">
                                          <h2>{language.data.pages.home.faqs.intro.title}</h2>
                                          <p>{ language.data.pages.home.faqs.intro.description}</p>
                                </div>
                                <div className="faqs-row">
                                          { language.data.pages.home.faqs.listings.map(item => (
                                                <FaqMoja data={item} key={item.id} />
                                          ))}
                                </div>
                      </div>
             </div>
    </div>
  )
}


const FaqMoja = ({ data }) => {
    const [ active, setActive ] = useState(false);
      return (
        <div className={ active ? "faq-moja active" : "faq-moja"}>
                <div className="faq-moja-header" onClick={() => setActive(!active)}>
                            { active ? <span><CgClose /></span> : <span><RxPlus /></span>}
                            <h3>{data.question}</h3>
                </div>
                <div className="faq-answer">
                           <div className="faq-answer-inner">
                                    <p>{data.answer}</p>
                           </div>
                </div>
        </div>
      )
}
export default FaqSection