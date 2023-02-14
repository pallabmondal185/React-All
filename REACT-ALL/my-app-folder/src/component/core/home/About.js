import React from 'react';
import aboutImg from '../../../asset/images/principal.jpeg';

export default function About() {
    return (
        <>
        {/* ----------------Abput------------------------------ */}
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 w-100%">
                        <div className="jumbotron text-justify">
                            <h4>ABOUT OUR INSTITUTION:-</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem distinctio fugiat iure praesentium at. Maxime esse saepe dolore delectus, rerum harum exercitationem voluptas eaque atque sit error repudiandae, fugiat reiciendis ducimus quo fugit inventore quis vel est! Rerum ullam quos, facilis nesciunt nulla odit recusandae aliquam voluptate molestiae totam enim.</p>

                            <h4>ABOUT OUR FACULTY:-</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus perspiciatis a assumenda dicta, atque nostrum perferendis nemo totam accusamus deserunt dolorum sed similique provident. Nisi minima fuga debitis rerum harum esse veniam, qui illo cum quam quos itaque accusamus quisquam sunt ipsam soluta, nulla provident unde adipisci repellendus asperiores ratione!</p>
                        </div>
                    </div>

{/* -----------------principal ------------------------ */}
                    <div className="col-md-6">
                        <div className="card jumbotron p-1">
                            <img className="card-img-top w-50 mx-auto rounded-circle" src={aboutImg} alt="Cardimg" height={200} />
                            <div className="card-body">
                                <center><h5 className="card-title">Principal of this institute</h5></center>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit, perferendis!</p>
                            </div>
                        </div>

{/* ------------------------ placement report------------------ */}
                        <div className='border border-dark p-2'>
                            <h3>Placement Report:-</h3>
                            <label htmlFor="">Electromics and Communication Engineering:-</label>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style={{ width: '85%' }}>
                                    85%
                                </div>
                            </div>

                            <label htmlFor="">Computer Science Engineering:-</label>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{ width: '80%' }}>
                                    80%
                                </div>
                            </div>

                            <label htmlFor="">Electrical Engineering:-</label>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{ width: '70%' }}>
                                    70%
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
