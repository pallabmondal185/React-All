import React from 'react';
import './aboutUs.css'
import officeMen from '../asset/image/office-men.jpg'

function AboutUs() {
  return (
    <>
      <section id="about-us">
        <div className="container">
          <h1 className="title text-center"><u><i>ABOUT US</i></u></h1>
          <div className="row">
            <div className="col-md-6">
              <h4 >Why we are different ?</h4>
              <ul className="text-left mb-4">
                <li>Lorem ipsum dolor sit amet consectetur.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere.</li>
                <li>Lorem ipsum dolor sit amet consectetur.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit, amet consectetur adipisicing.</li>
              </ul>
              <center><button className="btn">Know more</button></center>
            </div>
            <div className="col-md-6">
              <img className='about-img' src={officeMen} alt="" />
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default AboutUs
