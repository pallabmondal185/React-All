import React, { useState } from 'react';

function FormValidationExam2() {
  const initialValue = { username: '', email: '', password: '' };
  const [formValue, setFormValue] = useState(initialValue);
  const [formError, setFormerror] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
    // console.log(formValue);
  }

  function validate(values) {
    const error = {};
    const regex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!values.username) {
      error.username = 'User Name is required';
    }
    else if (values.username.length < 6 || values.username.length > 10) {
      error.username = 'username is between 6 and 10 characters';
    }

    if (!values.password) {
      error.password = 'Password is required';
    }
    else if (values.password.length < 6 || values.password.length > 10) {
      error.password = 'Pasword is between 6 and 10 characters';
    }

    if (!values.email) {
      error.email = 'Password is required';
    }
    else if (!regex.test(values.email)) {
      error.email = 'Enter valid email';
    }

    return error;
  }

  function handleSubmit(e) {
    e.preventDefault();
    setFormerror(validate(formValue));
    setIsSubmit(true)
  }

  return (
    <div className='container bg-dark text-light p-5 mt-2'>
      {
        isSubmit && Object.keys(formError).length === 0
          ?
          <h3 className="text-success">Registration Successful</h3>
          :
          ''
      }
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Username</label>
          <input type="text" onChange={handleChange} name='username' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Username" />
          <span className="text-danger">{formError.username}</span>
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputPassword1">email Address</label>
          <input type="text" onChange={handleChange} name='email' className="form-control" id="exampleInputPassword1" placeholder="email" />
          <span className="text-danger">{formError.email}</span>
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password" onChange={handleChange} name='password' className="form-control" id="exampleInputPassword1" placeholder="Password" />
          <span className="text-danger">{formError.password}</span>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default FormValidationExam2;
