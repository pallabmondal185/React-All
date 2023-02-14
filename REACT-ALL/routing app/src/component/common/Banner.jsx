import React from 'react';
import './banner.css';

function Banner() {
    return (
        <>
            <section id='banner'>
                <div className='banner'>
                    <div className="row">
                        <div className="col-md-6"></div>
                        <div className="col-md-6">
                            <div className='banner-text'>
                                <h1><i>Welcome to our agency:-</i></h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi cum itaque, quod quae porro minima aut nemo similique nisi cupiditate, impedit accusantium iure eum sint sed dolor voluptatem quo mollitia.</p>
                                <h1><i>Make Full  Website:-</i></h1>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde ducimus nesciunt molestias quis tenetur, quae perspiciatis blanditiis doloremque amet hic!</p>
                            </div>
                            <div className='banner-btn'>
                            <button className="btn"><b><i>Log-In</i></b></button>
                            <button className="btn"><b><i>Sign-Up</i></b></button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner
