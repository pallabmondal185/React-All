import React from 'react';
import image1 from '../asset/images/building.jpg';
import image2 from '../asset/images/galary1.jpeg'
import image3 from '../asset/images/library.jpeg'
import Nav from '../component/common/Nav';


export default function Banner() {
    return (
        <>
            <Nav />

        <div>
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner m-1">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src={image1} alt="First slide" height={600} />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={image2} alt="Second slide" height={600} />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={image3} alt="Third slide" height={600} />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>

        </div>
        </>
    )
}
