import React from 'react';
import './testimonials.css';
import office1 from '../asset/image/office-man-1.jpeg'

function Testimonials() {
  return (
    <>
      <section id="testimonials">
    <div className="container ">
        <h1 className="title text-center"><u><i>What Client Say ?</i></u></h1>
        <div className="row offset-1">
            <div className="col-md-5 testimonials">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus quam omnis exercitationem ipsa vitae eligendi! Lorem ipsum dolor sit amet.</p>
                <img className="user-img" src={office1} alt="" />
                <p className="user-details"><b>alina johmson</b><br />marketing manager</p>
            </div>          
            <div className="col-md-5 testimonials">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus quam omnis exercitationem ipsa vitae eligendi! Lorem ipsum dolor sit amet.</p>
                <img className="user-img" src={office1} alt="" />
                <p className="user-details"><b>alina johmson</b><br />marketing manager</p>
            </div>

        </div>
    </div>
</section>

    </>
  )
}

export default Testimonials
