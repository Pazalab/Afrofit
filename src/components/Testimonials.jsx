import { Swiper, SwiperSlide } from "swiper/react";
import { IoStar } from "react-icons/io5";
import "swiper/css"
import { useContext, useState } from "react";
import { Autoplay } from 'swiper/modules';
import { languageContext } from "./common/languageContext";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const Testimonials = () => {
  const [ language ] = useContext(languageContext);
  const [ swiperRef, setSwiperRef ] = useState();
  return (
    <div className="testimonials-section">
              <div className="inner-row">
                        <div className="testimonials-section-content">
                                   <div className="testimonials-intro">
                                             <h3 data-aos="zoom-in-down">{ language.data.pages.home.testimonials.intro.text}</h3>
                                             <h2 data-aos="zoom-in-up">{ language.data.pages.home.testimonials.intro.title}</h2>
                                             <p data-aos="zoom-in-up">{language.data.pages.home.testimonials.intro.description}</p>
                                   </div>

                                   <div className="testimonials-slider">
                                              <div className="testimonials-grayed" data-aos="zoom-in"></div>
                                               <div className="testimonial-btns">
                                                        <button onClick={() => swiperRef.slidePrev()} data-aos="zoom-in-right"><span><BsArrowLeft /></span></button>
                                                        <button onClick={() => swiperRef.slideNext()} data-aos="zoom-in-left"><span><BsArrowRight /></span></button>
                                               </div>
                                               <Swiper
                                                       slidesPerView={1}
                                                       spaceBetween={30}
                                                       loop={true}
                                                       speed={1000}
                                                       autoplay={{
                                                            delay: 10000,
                                                            disableOnInteraction: false
                                                       }}
                                                       breakpoints={{
                                                            1090: {
                                                                  slidesPerView: 2
                                                            }
                                                       }}
                                                       modules={[Autoplay]}
                                                       onSwiper={(swiper) => setSwiperRef(swiper)}
                                                       className="myswiper"
                                                       data-aos="zoom-in"
                                               >
                                                   {
                                                       language.data.pages.home.testimonials.listings.map(item => (
                                                          <SwiperSlide key={item.id}>
                                                                  <div className="testimonial-moja">
                                                                        <div className="testimonial-header">
                                                                                   <div className="testimonial-profile-column">
                                                                                             <img src={item.image} alt="" />
                                                                                             <div className="profile-name">
                                                                                                       <h3>{item.name}</h3>
                                                                                                       <p>{item.location}</p>
                                                                                             </div>
                                                                                   </div>
                                                                                   <div className="testimonial-rating">
                                                                                          <span><IoStar /></span>
                                                                                          <span><IoStar /></span>
                                                                                          <span><IoStar /></span>
                                                                                          <span><IoStar /></span>
                                                                                          <span><IoStar /></span>
                                                                                  </div>
                                                                        </div>
                                                                        <p>{item.body}</p>
                                                                </div>
                                                        </SwiperSlide>
                                                       ))
                                                   }
                                               </Swiper>
                                   </div>
                        </div>
              </div>
    </div>
  )
}

export default Testimonials