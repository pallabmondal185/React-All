import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useParams,useNavigate } from 'react-router-dom';

const UpdateDataLive = () => {
    const { id } = useParams();

    const initialData = { name: '', email: '', phone: '', address: '', city: '', class: '' };
    const [formData, setFormData] = useState(initialData);
    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        updateData();
        setFormData(initialData);
        navigate('/all');
    }

    //https://backendapinodejsraju.herokuapp.com/api/update
    //https://backendapinodejsraju.herokuapp.com/api/edit

    const updateData = async () => {
        await axios.patch(`https://backendapinodejsraju.herokuapp.com/api/update/${id}`, formData)
        //error occurs using 'put' request
     }

    console.log(formData);

    return (
        <>
            <h1>update</h1>

            <div className="container d-flex justify-content-center">
                <form className='my-5 p-5 w-75 bg-primary text-light' onSubmit={handleSubmit}>
                    <div className="row">

                        <div className="form-group col-md-6">
                            <label htmlFor="exampleInputEmail1">Name</label>
                            <input type="text" className="form-control" name='name' value={formData.name} onChange={handleChange} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name" />
                        </div>

                        <div className="form-group col-md-6">
                            <label htmlFor="exampleInputPassword1">Phone Number</label>
                            <input type="tel" className="form-control" name='phone' value={formData.phone} onChange={handleChange} id="exampleInputPassword1" placeholder="Phone Number" />
                        </div>

                        <div className="form-group col-md-6">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" name='email' value={formData.email} onChange={handleChange} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        </div>

                        <div className="form-group col-md-6">
                            <label htmlFor="exampleInputEmail1">Address</label>
                            <input type="text" className="form-control" name='address' value={formData.address} onChange={handleChange} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Address" />
                        </div>

                        <div className="form-group col-md-6">
                            <label htmlFor="exampleInputEmail1">City</label>
                            <input type="text" className="form-control" name='city' value={formData.city} onChange={handleChange} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter City" />
                        </div>

                        <div className="form-group col-md-6">
                            <label htmlFor="exampleInputEmail1">Class</label>
                            <input type="text" className="form-control" name='class' value={formData.class} onChange={handleChange} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Class" />
                        </div>
                    </div>
                    <center>
                        <button type="submit" className="btn btn-success">Submit</button>
                    </center>
                </form>
            </div>

        </>
    )
}

export default UpdateDataLive
