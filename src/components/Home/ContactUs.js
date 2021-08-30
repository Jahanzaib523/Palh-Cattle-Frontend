import React, { useState } from 'react'
import { Input } from 'antd';
import { NumberOutlined } from '@ant-design/icons';


function ContactUs(props) {
    const [number,setNumber] = useState(0);
    const [message,setMessage] = useState('');

    const { TextArea } = Input;

    const SetMessage = (e) => {
        setNumber(e.target.value)
    }

    const SetPhoneNumber = (e) => {
        setMessage(e.target.value)
    }

    const SendMessage = () => {
        var formdata = new FormData();
        formdata.append("phone", number);
        formdata.append("message", message);

        var requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
        };
          
        fetch("http://192.168.1.3:5000/contact", requestOptions)
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }

    return (
        <div ref={props.ContactRef} className="contact-outer-div">
            <p className="contact-heading">Contact Us</p>
            <div className="contact-number-div d-flex justify-content-center"><Input className="contact-number" onChange={SetPhoneNumber} size="large" placeholder="You'r phone #" prefix={<NumberOutlined />} /></div>
            <TextArea rows={4} onChange={SetMessage} placeholder="You'r Message"/>
            <div className="contact-btn-div d-flex justify-content-center">
                <div onClick={SendMessage} className="contact-btn">
                    Send Message
                </div>
            </div>
        </div>
    )
}

export default ContactUs
