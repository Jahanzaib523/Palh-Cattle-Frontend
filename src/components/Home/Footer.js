import React from 'react'
import { FacebookOutlined, YoutubeOutlined, InstagramOutlined, LinkedinOutlined, TwitterOutlined } from '@ant-design/icons';


function TestFooter() {
    return (
        <div className="footer-outer-div slideanim slide">
            <div className="row">
                <div className="col-12 col-xl-6 footer-left-div slideanim slide">
                    <div className="row">
                        <div className="col-div col-12 col-xl-6">
                            <p className="footer-about-heading">About Palh</p>
                            <p className="footer-about-text">Palh Cattle farm came into being in 2019. Initially, the initiative was taken by Aurangzeb Palh & siblings. 
                            The main purpose of the project is buy cattle, grow them up & then selling them on special occasions.</p>
                        </div>
                        <div className="col-div col-12 col-xl-6">
                            <p className="footer-about-heading">Connect</p>
                            <a target="_blank" rel="noreferrer" href="https://www.facebook.com/palhcattlefarm/"><span className="footer-logo"><FacebookOutlined/></span></a>
                            <a target="_blank" rel="noreferrer" href="facbook"><span className="footer-logo"><TwitterOutlined/></span></a>
                            <a target="_blank" rel="noreferrer" href="https://instagram.com/palh_cattlefarm?utm_medium=copy_link"><span className="footer-logo"><InstagramOutlined/></span></a>
                            <a target="_blank" rel="noreferrer" href="facbook"><span className="footer-logo"><LinkedinOutlined /></span></a>
                            <a target="_blank" rel="noreferrer" href="facbook"><span className="footer-logo"><YoutubeOutlined/></span></a>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-xl-6 footer-right-div slideanim slide">
                    <div className="d-flex justify-content-between row">
                        <div className="col-div col-12 col-xl-6">
                            <p className="footer-about-heading">SERVICES</p>
                            <p className="footer-about-text">Cattle Shop</p>
                            <p className="footer-about-text">Selling Cattle</p>
                            <p className="footer-about-text">Buying Cattle</p>
                            <p className="footer-about-text">Contact Seller</p>
                        </div>
                        <div className="col-div col-12 col-xl-6">
                            <p className="footer-contact-heading">CONTACT</p>
                            <p className="footer-about-text">Pak Singhar, Tando Allah Yar, Sindh Tando Allahyar, Sindh, Pakistan</p>
                            <p><a href="tel://923479666466" className="footer-contact-text">+92 347-9666466</a></p>
                            <p><a href="mailto:palh@gmail.com" className="footer-contact-text">palhcattle@gmail.com</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom-div d-flex justify-content-between">
                <p className="footer-about-text footer-bottom-text">© 2021 Palh Cattle Farm . All Right Reserved</p>
                <p className="footer-about-text footer-bottom-text">Developed By: <strong>NODEPTR.</strong></p>
            </div>
        </div>
    )
}

export default TestFooter
