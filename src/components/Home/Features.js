import React, { useRef } from 'react'
import BG1 from './Images/about.jpeg'
import BG2 from './Images/shop.jpeg'
import BG3 from './Images/cattle.jpeg'
import PERSON1 from './Images/PERSON1.png'
import PERSON2 from './Images/PERSON2.png'
import PERSON3 from './Images/PERSON3.jpeg'
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
                    <p className="about-dashboard-text">Far far away, behind the word mountains, far from the<br/>countries Vokalia and Consonantia, there live the blind texts.</p>
                    <span onClick={AboutScroll} className="about-dashboard-btn" >About Us</span>
                </div>
                <div ref={AboutRef} className="why-us-div slideanim slide">
                    <span>WHY Palh?</span>
                    <p className="why-us-heading">You still thinking about why you<br/>should choose us?</p>
                    <p className="why-us-text">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,<br/>there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the<br/>Semantics, a large language ocean.</p>
                </div>
                <div className="experience-div slideanim slide">
                    <p className="experience-text">Far far away, behind the word mountains, far<br/>from the countries Vokalia and Consonantia,<br/>there live the blind texts.</p>
                    <div className="experience-number-div">
                        <p className="experience-number">12</p>
                        <p className="experience-text">Years of experience</p>
                        <p className="experience-number">34</p>
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
                    <p className="grow-text">Far far away, behind the word mountains, far from the countries Vokalia and<br/>Consonantia, there live the blind texts.</p>
                    <div className="services-div row slideanim slide">
                        <span className="single-service">
                            <p className="service-heading">Different Cattle</p>
                            <p className="service-text">Far far away, behind the word<br/>mountains, far from the countries.</p>
                        </span>
                        <span className="single-service">
                            <p className="service-heading">Cattle Breeds</p>
                            <p className="service-text">Far far away, behind the word<br/>mountains, far from the countries.</p>
                        </span>
                    </div>
                    <a href={`${props.BaseURL}/shop`} className="about-dashboard-btn" >Visit Our Shop</a>
                </div>
            </div>
            <div className="count-div slideanim slide">
                <img className="count-div-img" src={BG3} alt="background-img"/>
                <div className="count-overlay"/>
                <div className="count-text-outer-div d-flex justify-content-center">
                    <div className="count-text-inner-div slideanim slide"><p className="count-number">20,345+</p><p className="count-text">Users</p></div>
                    <div className="count-text-inner-div slideanim slide"><p className="count-number">34,695+</p><p className="count-text">Cattle Breeds</p></div>
                    <div className="right-div slideanim slide"><p className="count-number">20+</p><p className="count-text">Cattles</p></div>
                </div>
            </div>
            <div ref={props.ClientRef} className="row client-review-outer-div">
                <div className="single-review col-12 col-sm-4">
                    <p className="client-heading">Our Blog</p>
                    <p className="client-heading2">Recent Client Reviews</p>
                    <p className="client-date">23, Aug 2020</p>
                    <p className="client-text">Far far away, behind the word<br/>mountains, far from the countries</p>
                    <p className="client-text2">Far far away, behind the word mountains, far<br/>from the countries Vokalia and Consonantia,<br/>there live the blind texts.</p>
                    <p><ArrowRightOutlined className="client-arrow"/></p>
                </div>
                <div className="single-review col-12 col-sm-4">
                    <p className="client-heading">Our Blog</p>
                    <p className="client-heading2">Recent Client Reviews</p>
                    <p className="client-date">23, Aug 2020</p>
                    <p className="client-text">Far far away, behind the word<br/>mountains, far from the countries</p>
                    <p className="client-text2">Far far away, behind the word mountains, far<br/>from the countries Vokalia and Consonantia,<br/>there live the blind texts.</p>
                    <p><ArrowRightOutlined className="client-arrow"/></p>
                </div>
                <div className="single-review col-12 col-sm-4">
                    <p className="client-heading">Our Blog</p>
                    <p className="client-heading2">Recent Client Reviews</p>
                    <p className="client-date">23, Aug 2020</p>
                    <p className="client-text">Far far away, behind the word<br/>mountains, far from the countries</p>
                    <p className="client-text2">Far far away, behind the word mountains, far<br/>from the countries Vokalia and Consonantia,<br/>there live the blind texts.</p>
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
                                    <div className="carousel-text-3">Name</div>
                                    <div className="carousel-text-4">Palh, Co-Founder</div>
                                </div>
                            </div>
                            <div className="carousel-box box-2 col">
                                <div className="carousel-div-1">
                                    <div className="carousel-div-2 d-flex justify-content-center">
                                        <img className="carousel-img" src={PERSON2} alt="person img"/>
                                    </div>
                                    <div className="carousel-text-3">Gulzeb</div>
                                    <div className="carousel-text-4">Palh, CEO</div>
                                </div>
                            </div>
                            <div className="carousel-box box-3 col">
                                <div className="carousel-div-1">
                                    <div className="carousel-div-2 d-flex justify-content-center">
                                        <img className="carousel-img" src={PERSON3} alt="person img"/>
                                    </div>
                                    <div className="carousel-text-3">Shahzaib</div>
                                    <div className="carousel-text-4">Palh, Manager</div>
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
                                        <img className="carousel-img" src={PERSON1} alt="person img"/>
                                    </div>
                                    <div className="carousel-text-3">Name</div>
                                    <div className="carousel-text-4">Palh, Co-Founder</div>
                                </div>
                            </div>
                            <div className="carousel-box box-5 col">
                                <div className="carousel-div-1">
                                    <div className="carousel-div-2 d-flex justify-content-center">
                                        <img className="carousel-img" src={PERSON2} alt="person img"/>
                                    </div>
                                    <div className="carousel-text-3">Gulzeb</div>
                                    <div className="carousel-text-4">Palh, CEO</div>
                                </div>
                            </div>
                            <div className="carousel-box box-6 col">
                                <div className="carousel-div-1">
                                    <div className="carousel-div-2 d-flex justify-content-center">
                                        <img className="carousel-img" src={PERSON3} alt="person img"/>
                                    </div>
                                    <div className="carousel-text-3">Shahzaib</div>
                                    <div className="carousel-text-4">Palh, Manager</div>
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
