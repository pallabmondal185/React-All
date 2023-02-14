import React from 'react';
import './contact.css';
import social2 from '../asset/image/social-2.png';
import social1 from '../asset/image/social-5.png'

function Contact() {
    return (
        <>
            <section id="contact">
                <div className="container">
                    <div className="row">
                    <div className="col-md-6 contact-text">
                        <h1 className="title text-center"><u><i>Contact Us</i></u></h1>
                        <address>
                            Postmaster, Post Office PARK STREET (HEAD OFFICE), KOLKATA, WEST BENGAL, India, Pin Code:- 700016. <br />
                            ph no: 85123478 <br />
                            email: ouregency@gmail.com
                        </address>
                        <img className='contact-img1' src={social1} alt="" />
                    </div>
                    <div className="col-md-6 text-right pt-5">
                        <img className='contact-img2' src={social2} alt="" />
                    </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact
