import React from 'react';
import address from '../../../asset/images/building.jpg'

export default function Main() {
    return (
        <>

            {/*----------------- course details ------------------------------ */}
            <div className="row mt-1 mb-1">
                <div className="col-md-6">
                    <div className="card w-100">
                        <div className="card-header">
                            <h3 className="text-info">bachelor courses:-</h3>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">B.tech in Electronics and Communication Engineering</li>
                            <li className="list-group-item">B.tech in Computer Science Engineering</li>
                            <li className="list-group-item">B.tech in Mechanical Engineering</li>
                            <li className="list-group-item">B.tech in Electrical Engineering</li>
                            <li className="list-group-item">B.tech in Biotechnology</li>
                            <li className="list-group-item">B.tech in Information technology</li>
                            <li className="list-group-item">Bsc in Physics</li>
                            <li className="list-group-item">Bsc in Chemistry</li>

                        </ul>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card w-100">
                        <div className="card-header">
                            <h3 className="text-info">Masters courses:-</h3>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">B.Tech in Electronics and Communication Engineering</li>
                            <li className="list-group-item">M.Tech in Computer Science Engineering</li>
                            <li className="list-group-item">M.Tech in Mechanical Engineering</li>
                            <li className="list-group-item">M.Tech in Electrical Engineering</li>
                            <li className="list-group-item">M.Tech in Biotechnology</li>
                            <li className="list-group-item">M.Tech in Information technology</li>
                            <li className="list-group-item">Msc in Chemistry</li>
                            <li className="list-group-item">Msc in Physics</li>

                        </ul>
                    </div>
                </div>
            </div>

            {/* ----------------enter details------------         */}

            <div className="container-fluid">
                <div className="row">
                    <div className='col-md-6 border border-dark jumbotron'>
                        <h3 className="text-success">Enter your Details for Admisssion:-</h3>
                        <form>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Email address:</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                    placeholder="Enter email" />
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>

                            <div className="form-group">
                                <label for="exampleInputEmail1">Mobile No:</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                    placeholder="Enter Mobile no" />
                                <small id="emailHelp" className="form-text text-muted">We'll never share your Mobile with anyone else.</small>
                            </div>

                            <label className="my-1 mr-2" for="inlineFormCustomSelectPref">chose your Degree course:</label>
                            <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                                <option selected>Choose...</option>
                                <option value="1">B.tech in ECE</option>
                                <option value="2">B.tech in CSE</option>
                                <option value="3">B.tech in EEE</option>
                                <option value="3">B.tech in CS</option>
                                <option value="3">B.tech in ME</option>
                                <option value="3">B.tech in EE</option>

                            </select>

                            <div className="form-group form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" for="exampleCheck1">Check me out</label>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>

                    </div>

                    {/*------------------ contact----------------- */}
                    <div className='col-md-6'>
                        <div className='border border-dark p-1'>
                            <div className="card-body text-center jumbotron mb-0">
                                <h1 className="card-title m-0">Contact details:-</h1>
                                <p className="card-text m-0">address: 20 Ramkanto Bose Street Kolkata-700 003</p>
                                <p className="card-text m-0">Call:033-25555565</p>
                                <p className="m-0">Email :principalmmccollege@gmail.com</p>
                                <p className="card-text m-0"><a className='text-info' href="/">website: www.webskitter.com</a></p>
                            </div>
                            <img className='w-100 mt-0' src={address} alt="" height={270} />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
