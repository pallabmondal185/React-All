import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { axiosInstance } from '../axiosMethods/axiosInstanceEg';
import { postData } from '../server/PracSlice';

const AddData = () => {
  const initState = { name: '', email: '', phone: '', city: '' };
  const [formData, setFormData] = useState(initState);
  const navigate=useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  // const postData=async()=>{
  //   await axiosInstance.post('/',formData);
  // }

  const handleClick=()=>{
    postData(formData);
    setFormData(initState);
    navigate('/')
  }

  return (
    <>
      {/* <pre>{JSON.stringify(formData, null, 2)}</pre> */}

      <div className='d-flex justify-content-center'>
        <div className='w-50 bg-dark text-light p-5 m-5'>
          <form>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Full Name</label>
              <input onChange={handleChange} name='name' value={formData.name} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Full Name" />
            </div>

            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input onChange={handleChange} name='email' value={formData.email} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            </div>

            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Phone Number</label>
              <input onChange={handleChange} name='phone' value={formData.phone} type="number" className="form-control" id="exampleInputPassword1" placeholder="Enter Phone Number" />
            </div>

            <div className="form-group">
              <label htmlFor="exampleInputPassword1">City</label>
              <input onChange={handleChange} name='city' value={formData.city} type="text" className="form-control" id="exampleInputPassword1" placeholder="Enter City" />
            </div>
          </form>

          <div className='d-flex justify-content-center'>
            <button onClick={handleClick} className="btn btn-primary">Submit</button>
          </div>

        </div>
      </div>
    </>
  )
}

export default AddData;
