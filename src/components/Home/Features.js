import React, { useRef } from 'react'
import BG1 from './Images/about.jpeg'
import BG2 from './Images/shop.jpeg'
import BG3 from './Images/cattle.jpeg'
import PERSON1 from './Images/PERSON1.jpg'
import PERSON2 from './Images/PERSON2.png'
import PERSON3 from './Images/PERSON3.png'
import PERSON4 from './Images/PERSON4.jpeg'
import PERSON5 from './Images/PERSON5.png'
import PERSON6 from './Images/PERSON6.jpg'
import cow from './Images/cow.jpeg'
import { ArrowRightOutlined, ContactsOutlined, ShopOutlined } from '@ant-design/icons';
import { Carousel } from 'antd';
import '../Styles/styles.scss'

function Features(props) {

    const GrowRef = useRef(null);

    const AboutRef = useRef(null);

    const executeScroll = () => window.scrollTo({ behavior: 'smooth', top: GrowRef.current.offsetTop })

    const AboutScroll = () => window.scrollTo({ behavior: 'smooth', top: AboutRef.current.offsetTop })


    return (
        <div>
            <div ref={props.AboutRef} className="Insightful-dashboard-div">
                <img className="Insightful-dashboard-img slideanim slide" src={BG1} alt="dashboard img"/>
                <div className="about-dashboard-div slideanim slide">
                    <p className="about-dashboard-text">Palh Cattle farm came into being in 2019. Initially, the initiative <br/>was taken by Aurangzeb Palh & siblings. 
                            The main purpose of the project.</p>
                    <span onClick={AboutScroll} className="about-dashboard-btn" >About Us</span>
                </div>
                <div ref={AboutRef} className="why-us-div slideanim slide">
                    <span>WHY Palh?</span>
                    <p className="why-us-heading">You still thinking about why you<br/>should choose us?</p>
                    <p className="why-us-text">We feel like our skills are particularly well-suited & it encourages our clients to buy from<br/> us. 
                    We believe that we have the type of knowledge to succeed in this field and at the <br/>Palh Cattle farm project.</p>
                </div>
                <div className="experience-div slideanim slide">
                    <p className="experience-text">We have been working in this field for more<br/> than 3 years. The experience is increasing <br/> with the growth in our business.</p>
                    <div className="experience-number-div">
                        <p className="experience-number">3</p>
                        <p className="experience-text">Years of experience</p>
                        <p className="experience-number">15</p>
                        <p className="experience-text">Team members</p>
                        <span onClick={executeScroll} className="experience-btn" >Why Palh</span>
                    </div>
                </div>
                <div ref={props.ServiceRef} className="features-div row slideanim slide">
                    <span className="single-feature">
                        <p><ShopOutlined className="features-logo"/></p>
                        <p className="features-text">Cattle Shop</p>
                        <p><ArrowRightOutlined className="features-arrow"/></p>
                    </span>
                    <span className="single-feature">
                        <p><ContactsOutlined className="features-logo"/></p>
                        <p className="features-text">Contact Seller</p>
                        <p><ArrowRightOutlined className="features-arrow"/></p>
                    </span>
                    <span className="single-feature">
                        <img className="features-logo-img" src={cow} alt="cow"/>
                        <p className="features-text">Different Breeds</p>
                        <p><ArrowRightOutlined className="features-arrow"/></p>
                    </span>
                </div>
                <img className="Insightful-dashboard-img2 slideanim slide" src={BG2} alt="dashboard img"/>
                <div ref={GrowRef} className="grow-div slideanim slide">
                    <p className="grow-heading">Grow your business</p>
                    <p className="grow-text">Growth is never by mere chance; it is the result of forces working together<br/>The only strategy that is guaranteed to fail is not taking risks.</p>
                    <div className="services-div row slideanim slide">
                        <span className="single-service">
                            <p className="service-heading">Different Cattle</p>
                            <p className="service-text">We do have Cows, Buffaloes & goats  <br/>Also, do breedings  of different cattle.</p>
                        </span>
                        <span className="single-service">
                            <p className="service-heading">Employees</p>
                            <p className="service-text">Our Employees are increasing<br/> we the growth of our business.</p>
                        </span>
                    </div>
                    <a href={`${props.BaseURL}/shop`} className="about-dashboard-btn" >Visit Our Shop</a>
                </div>
            </div>
            <div className="count-div slideanim slide">
                <img className="count-div-img" src={BG3} alt="background-img"/>
                <div className="count-overlay"/>
                <div className="count-text-outer-div d-flex justify-content-center">
                    <div className="count-text-inner-div slideanim slide"><p className="count-number">30+</p><p className="count-text">Clients</p></div>
                    <div className="count-text-inner-div slideanim slide"><p className="count-number">100+</p><p className="count-text">Cattle</p></div>
                    <div className="right-div slideanim slide"><p className="count-number">10+</p><p className="count-text">Breeds</p></div>
                </div>
            </div>
            <div ref={props.ClientRef} className="row client-review-outer-div">
                <div className="single-review col-12 col-sm-4">
                    <p className="client-heading">Our Blog</p>
                    <p className="client-heading2">Hassan Khanzada</p>
                    <p className="client-date">12, June 2021</p>
                    <p className="client-text">"Healthy environment, Highly recommended & Reasonable prices."</p>
                    <p className="client-text2">Thank you so much! Dear, Hassan Khanzada.<br/>It was such a great experience<br/>while dealing with you.</p>
                    <p><ArrowRightOutlined className="client-arrow"/></p>
                </div>
                <div className="single-review col-12 col-sm-4">
                    <p className="client-heading">Our Blog</p>
                    <p className="client-heading2">Ahmad Nizamani</p>
                    <p className="client-date">12, July 2021</p>
                    <p className="client-text">"Great experience, nice farm & would definitely recommend my friends."</p>
                    <p className="client-text2">Good communication! We hope for future dealing <br/> too. InshAllah! The client did trust in us & it means <br/>  alot to us. </p>
                    <p><ArrowRightOutlined className="client-arrow"/></p>
                </div>
                <div className="single-review col-12 col-sm-4">
                    <p className="client-heading">Our Blog</p>
                    <p className="client-heading2">Ghulam Muhammad</p>
                    <p className="client-date">09, July 2021</p>
                    <p className="client-text">"They provided us an assistant while choosing<br/> a breed & it was really helpful to us."</p>
                    <p className="client-text2">I was awesome. Such a nice person with great<br/> communication & dealing skills We hope to work <br/> with you again.</p>
                    <p><ArrowRightOutlined className="client-arrow"/></p>
                </div>
            </div>
            <div ref={props.TestimonialRef}>
                <Carousel autoplay className="carousel-div">
                    <div className="carousel-slide">
                        <div className="carousel-text-1">Testimonials</div>
                        <div className="carousel-text-2">__who works behind this__</div>
                        <div className="row carousel-outer-box">
                            <div className="carousel-box box-1 col">
                                <div className="carousel-div-1">
                                    <div className="carousel-div-2 d-flex justify-content-center">
                                        <img className="carousel-img" src={PERSON1} alt="person img"/>
                                    </div>
                                    <div className="carousel-text-3">Manzoor Palh</div>
                                    <div className="carousel-text-4">Owner</div>
                                </div>
                            </div>
                            <div className="carousel-box box-2 col">
                                <div className="carousel-div-1">
                                    <div className="carousel-div-2 d-flex justify-content-center">
                                        <img className="carousel-img" src={PERSON2} alt="person img"/>
                                    </div>
                                    <div className="carousel-text-3">Aurangzeb Palh</div>
                                    <div className="carousel-text-4">CO-Founder</div>
                                </div>
                            </div>
                            <div className="carousel-box box-3 col">
                                <div className="carousel-div-1">
                                    <div className="carousel-div-2 d-flex justify-content-center">
                                        <img className="carousel-img" src={PERSON3} alt="person img"/>
                                    </div>
                                    <div className="carousel-text-3">Gulzeb Palh</div>
                                    <div className="carousel-text-4">CEO</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-slide">
                        <div className="carousel-text-1">Testimonials</div>
                        <div className="carousel-text-2">__who works behind this__</div>
                        <div className="row carousel-outer-box">
                            <div className="carousel-box box-4 col">
                                <div className="carousel-div-1">
                                    <div className="carousel-div-2 d-flex justify-content-center">
                                        <img className="carousel-img" src={PERSON4} alt="person img"/>
                                    </div>
                                    <div className="carousel-text-3">Shahzaib Palh</div>
                                    <div className="carousel-text-4">Chief Executive</div>
                                </div>
                            </div>
                            <div className="carousel-box box-5 col">
                                <div className="carousel-div-1">
                                    <div className="carousel-div-2 d-flex justify-content-center">
                                        <img className="carousel-img" src={PERSON5} alt="person img"/>
                                    </div>
                                    <div className="carousel-text-3">Jahanzaib Palh</div>
                                    <div className="carousel-text-4">Developer</div>
                                </div>
                            </div>
                            <div className="carousel-box box-6 col">
                                <div className="carousel-div-1">
                                    <div className="carousel-div-2 d-flex justify-content-center">
                                        <img className="carousel-img" src={PERSON6} alt="person img"/>
                                    </div>
                                    <div className="carousel-text-3">Dil Zaib</div>
                                    <div className="carousel-text-4">Designer</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel>
            </div>
        </div>
            
    )
}

export default Features
