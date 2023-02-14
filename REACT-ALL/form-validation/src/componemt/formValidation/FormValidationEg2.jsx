import React, { useState } from 'react';

function FormValidationEg2() {
    const initialValue = { username: '', email: '', password: '', checkbox: '' }
    const [formValues, setFormValues] = useState(initialValue);
    const [formError, setFormError] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    }

    function validate(values) {
        const error = {};
        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (!values.username) {
            error.username = 'username is required.'
        } else if (values.username.length < 6 || values.username.length > 10) {
            error.username = 'username is between 6 and 10 characters';
        }

        if (!values.email) {
            error.email = 'e-mail is required.'
        } else if (!regex.test(values.email)) {
            error.email = 'Enter valid email.'
        }

        if (!values.password) {
            error.password = 'Password is required.'
        } else if (values.password.length < 6 || values.password.length > 10) {
            error.password = 'password is between 6 and 10 characters';
        }

        if (!values.checkbox) {
            error.checkbox = 'click on check box.'
        }
        return error;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormError(validate(formValues));
        setIsSubmit(true);
    }

    return (
        <>
            {/* <pre>{JSON.stringify(formValues,null,2)}</pre> */}
            {
                Object.keys(formError).length === 0 && isSubmit
                    ?
                    <center><h3 className='text-success'>Registration Success full</h3></center>
                    :
                    ""
            }

            <div className="w-50 mx-auto my-5 p-5 bg-dark text-light">
                <center><h1>Form validation</h1></center>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Username</label>
                        <input type="text" onChange={handleChange} name='username' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter UserName" />
                        <span className='text-danger'>{formError.username}</span>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" onChange={handleChange} name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        <span className='text-danger'>{formError.email}</span>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" onChange={handleChange} name='password' className="form-control" id="exampleInputPassword1" placeholder="Password" />
                        <span className='text-danger'>{formError.password}</span>
                    </div>
                    <div className="form-group form-check">
                        <input type="checkbox" onChange={handleChange} name='checkbox' className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                        <br /><span className='text-danger'>{formError.checkbox}</span>
                    </div>
                    <center><button type="submit" className="btn btn-primary">Submit</button></center>
                </form>
            </div>
        </>
    )
}

export default FormValidationEg2
