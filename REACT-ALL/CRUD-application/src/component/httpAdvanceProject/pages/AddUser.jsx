import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { postUser } from '../axiosMethods/ApiMethods';

function AddUser() {
  const initialState={name:'', email:'', phone:'', city:''}
  const [formData,setFormData]=useState(initialState);
  // const [isSubmit,setIsSubmit]=useState(false);
  const navigate=useNavigate()

  const handleChange=(e)=>{
    const {name,value}=e.target;
    setFormData({...formData, [name]:value})
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    postUser(formData);
    setFormData(initialState);
    navigate('/all')
    // setIsSubmit(true);
    // setTimeout(() => {
    //   setIsSubmit(false)
    // }, 2000);
  }

  return (
    <>
   {/* <pre> {JSON.stringify(formData,undefined,2)}</pre> */}

      {/* {isSubmit &&
       <h3 className='text-success text-center'>Data Added Successfully</h3> } */}

      <center>
        <div className='w-50 mt-3 p-5 bg-dark text-light text-left'>
          <h3 className='text-primary text-center'>Enter Your Details</h3>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" onChange={handleChange} name='name' value={formData.name} className="form-control" id="" aria-describedby="emailHelp" placeholder="Enter name" />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="text" onChange={handleChange} name='email' value={formData.email} className="form-control" id="" placeholder="Enter e-mail" />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input type="number" onChange={handleChange} name='phone' value={formData.phone} className="form-control" id="" aria-describedby="emailHelp" placeholder="Enter Phone Number" />
            </div>

            <div className="form-group">
              <label htmlFor="city">City</label>
              <input type="text" onChange={handleChange} name='city' value={formData.city} className="form-control" id="" aria-describedby="emailHelp" placeholder="Enter City" />
            </div>

            <div className='text-center'>
            <button type="submit" className="btn btn-primary">Add Data</button>
            </div>
          </form>
        </div>
      </center>
    </>
  )
}

export default AddUser
