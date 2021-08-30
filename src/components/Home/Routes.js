import React, { useRef } from 'react'
import Header from './Header'
import Carousel from './Carousel'
import Features from './Features'
import ContactUs from './ContactUs'
import Footer from './Footer'

function Routes(props) {
    const AboutRef = useRef(null);
    const TestimonialRef = useRef(null);
    const ClientRef = useRef(null);
    const ServiceRef = useRef(null);
    const ContactRef = useRef(null);

    return (
        <div className="home-page">
            <Header BaseURL = {props.BaseURL} AboutRef = {AboutRef} TestimonialRef = {TestimonialRef} ClientRef = {ClientRef} ServiceRef = {ServiceRef} ContactRef = {ContactRef}/>
            <Carousel BaseURL = {props.BaseURL}/>
            <Features BaseURL = {props.BaseURL} AboutRef = {AboutRef} TestimonialRef = {TestimonialRef} ClientRef = {ClientRef} ServiceRef = {ServiceRef}/>
            <ContactUs BaseURL = {props.BaseURL} ContactRef = {ContactRef}/>
            <Footer BaseURL = {props.BaseURL}/>
        </div>
    )
}

export default Routes
