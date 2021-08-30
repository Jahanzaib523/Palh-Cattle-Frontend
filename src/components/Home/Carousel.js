import React, { useState, useEffect } from 'react'
import BG1 from './Images/Picture_1.png'
import BG2 from './Images/Picture_2.png'
import BG3 from './Images/Picture_3.png'
import { Carousel } from 'antd';

function CarouselSection(props) {

    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [blink, setBlink] = useState(true);
    const [reverse, setReverse] = useState(false);
    const [words] = useState(["Sell Cattle", "Contact Seller", 'Compare Cattle Breed']);


    useEffect(() => {
        if (index === words.length) return;
    
        if ( subIndex === words[index].length + 1 && index !== words.length - 1 && !reverse ) {
          setReverse(true);
          return;
        }
    
        if (subIndex === 0 && reverse) {
          setReverse(false);
          setIndex((prev) => prev + 1);
          return;
        }
    
        const timeout = setTimeout(() => { setSubIndex((prev) => prev + (reverse ? -1 : 1));}, Math.max(reverse ? 75 : subIndex === words[index].length ? 1000 : 150, parseInt(Math.random() * 350)));
    
        return () => clearTimeout(timeout);
      }, [subIndex, index, reverse, words]);
    
      // blinker
      useEffect(() => {
        const timeout2 = setTimeout(() => {
          setBlink((prev) => !prev);
        }, 400);
        return () => clearTimeout(timeout2);
      }, [blink]);

    const contentStyle = {
        height: '100vh',
        color: '#fff',
        background: '#364d79',
      };

    return (
        <div>
            <Carousel effect="fade" autoplay dots={false}>
                <div>
                    <div style={contentStyle}>
                        <div className="overlay"/>
                        <img className="caroysel-img" src={BG1} alt="bg1"/>
                        <section class="carousel-text-div">
                            <div class="text-1">Best Place to buy cattle</div>
                            <div class="text-2">Palh, Cattle Farm</div>
                            <div class="text-3">where you can <span className="typing">{`${words[index].substring(0, subIndex)}${blink ? "|" : " "}`}</span></div>
                            <div className="carousel-btn-div">
                                <a href={`${props.BaseURL}/shop`} className="carousel-btn">Our Shop</a>
                            </div>
                        </section>
                    </div>
                </div>
                <div>
                    <div style={contentStyle}>
                        <div className="overlay"/>
                        <img className="caroysel-img" src={BG2} alt="bg2"/>
                        <section class="carousel-text-div">
                            <div class="text-1">Best Place to buy cattle</div>
                            <div class="text-2">Palh, Cattle Farm</div>
                            <div class="text-3">where you can <span className="typing">{`${words[index].substring(0, subIndex)}${blink ? "|" : " "}`}</span></div>
                            <div className="carousel-btn-div">
                                <a href={`${props.BaseUrl}/shop`} className="carousel-btn">Our Shop</a>
                            </div>
                        </section>
                    </div>
                </div>
                <div>
                    <div style={contentStyle}>
                        <div className="overlay"/>
                        <img className="caroysel-img" src={BG3} alt="bg3"/>
                        <section class="carousel-text-div">
                            <div class="text-1">Best Place to buy cattle</div>
                            <div class="text-2">Palh, Cattle Farm</div>
                            <div class="text-3">where you can <span className="typing">{`${words[index].substring(0, subIndex)}${blink ? "|" : " "}`}</span></div>
                            <div className="carousel-btn-div">
                                <a href={`${props.BaseUrl}/shop`} className="carousel-btn">Our Shop</a>
                            </div>
                        </section>
                    </div>
                </div>
            </Carousel>
        </div>
    )
}

export default CarouselSection
