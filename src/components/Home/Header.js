import React, { useState } from 'react'
import { Drawer } from 'antd';
import { MenuUnfoldOutlined, UserOutlined, WhatsAppOutlined, SolutionOutlined, ShopOutlined, ProjectOutlined, TeamOutlined } from '@ant-design/icons';
import logo from './Images/Logo.png'


function Header(props) {
    const [visible, setVisible] = useState(false);

    const AboutScroll = () => window.scrollTo({ behavior: 'smooth', top: props.AboutRef.current.offsetTop })   
    const TestimonialScroll = () => window.scrollTo({ behavior: 'smooth', top: props.TestimonialRef.current.offsetTop })   
    const ClientScroll = () => window.scrollTo({ behavior: 'smooth', top: props.ClientRef.current.offsetTop })   
    const ServiceScroll = () => window.scrollTo({ behavior: 'smooth', top: props.ServiceRef.current.offsetTop })   
    const ContactScroll = () => window.scrollTo({ behavior: 'smooth', top: props.ContactRef.current.offsetTop }) 

    const showDrawer = () => {
        setVisible(true)
    };
    
    const onClose = () => {
        setVisible(false)
    };

    const drawerClose = (btn) => {
        onClose()
        switch (btn) {
            case 'about':
                AboutScroll();
                break;
            case 'testimonial':
                TestimonialScroll();
                break;
            case 'client':
                ClientScroll();
                break;
            case 'service':
                ServiceScroll();
                break;
            case 'contact':
                ContactScroll();
                break;
            default:
                break;
        }
    }

      

    return (
        <div>
            <div className="mobile-view-header">
                <div className="mobile-view-header-sidenav-logo">
                    <MenuUnfoldOutlined className="mobile-view-header-sidenav" onClick={showDrawer}/>
                </div>
                <div className="mobile-view-header-logo-div">
                    <img className="header-logo" src={logo} alt="logo"/>
                </div>
                <Drawer
                    title="Palh Cattle Farm"
                    placement='left'
                    className="header-drawer"
                    closable={true}
                    onClose={onClose}
                    visible={visible}
                    key={'left'}
                    >
                    <p className="header-drawer-btn" onClick={() => {drawerClose('about')}}><ProjectOutlined style={{fontSize: '30px', margin: '0px 10px'}} />About Us</p>
                    <p className="header-drawer-btn" onClick={() => {drawerClose('service')}}><SolutionOutlined style={{fontSize: '30px', margin: '0px 10px'}} />Services</p>
                    <p className="header-drawer-btn"><a href={`${props.BaseURL}/shop`}><ShopOutlined style={{fontSize: '30px', margin: '0px 10px'}} />Shop</a></p>
                    <p className="header-drawer-btn" onClick={() => {drawerClose('client')}}><UserOutlined style={{fontSize: '30px', margin: '0px 10px'}} />Clients Review</p>
                    <p className="header-drawer-btn" onClick={() => {drawerClose('testimonial')}}><TeamOutlined style={{fontSize: '30px', margin: '0px 10px'}} />Testimonials</p>
                    <p className="header-drawer-btn" onClick={() => {drawerClose('contact')}}><WhatsAppOutlined style={{fontSize: '30px', margin: '0px 10px'}} />Contact Us</p>
                </Drawer>
            </div>
            <div className="header-outer-div">
                <div className="d-flex justify-content-between">
                    <div className="logo-div">
                        <img className="header-logo" src={logo} alt="logo"/>
                    </div>
                    <div className="header-features-div">
                        <span onClick={AboutScroll}>About Us</span>
                        <span onClick={ServiceScroll}>Services</span>
                        <a href={`${props.BaseURL}/shop`}>Shop</a>
                        <span onClick={ClientScroll}>Clients Review</span>
                        <span onClick={TestimonialScroll}>Testimonials</span>
                        <span onClick={ContactScroll}>Contact Us</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
