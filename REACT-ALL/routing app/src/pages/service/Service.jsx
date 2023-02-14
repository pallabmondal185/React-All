import React from 'react';
import './service.css'
import office1 from '../asset/image/office-man-1.jpeg';
import office2 from '../asset/image/office-man-2.jpg';
import office3 from '../asset/image/office-man-3.jpeg';


function Service() {
  return (
    <>
      <section id="service">
    <div className="container text-center">
        <h1 className="title"><u><i>WHAT WE DO ?</i></u></h1>
        <div className="row">
            <div className="col-md-4 service">
                <img className="service-img rounded" src={office1} alt="" />
                <h4>Growth Marketing:-</h4>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores placeat soluta veniam perferendis, reiciendis sint neque quisquam veritatis </p>
            </div>
            <div className="col-md-4 service">
                <img className="service-img rounded" src={office2} alt="" />
                <h4>Online Brending:-</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, nisi itaque dolorem, animi esse at sequi laudantium consequuntur ut </p>
            </div>
            <div className="col-md-4 service">
                <img className="service-img rounded" src={office3} alt="" />
                <h4>Animeted Adds:-</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam vel veniam voluptatum reiciendis at exercitationem sit </p>
            </div>
        </div>
        <button className="btn">All Services</button>    
    </div>
</section>

    </>
  )
}

export default Service
