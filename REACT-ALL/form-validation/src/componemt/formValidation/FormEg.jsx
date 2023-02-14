import React, { useEffect, useState } from 'react';

function FormEg() {

    const initialValue = { fname: '', lname: '', email: '', phone: '', city: '', pin: '', address: '', qualification: '' };
    const [formValue, setFormValue] = useState(initialValue);
    const [formError, setFormError] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)

    function handleChange(e) {
        const { name, value } = e.target;
        setFormValue({ ...formValue, [name]: value });
    }

    const validate = (values) => {
        const error = {};
        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!values.fname) {
            error.fname = 'First Name is Required.';
        }
        if (!values.lname) {
            error.lname = 'Last Name is Required.';
        }

        if (!values.email) {
            error.email = 'e-mail is Required.';
        } else if (!regex.test(values.email)) {
            error.email = 'Enter Valid e-mail.';
        }

        if (!values.phone) {
            error.phone = 'Phone Number is Required.';
        } else if (values.phone.length !== 10) {
            error.phone = 'Phone Number must have 10 digit.';
        }

        if (!values.city) {
            error.city = 'City is Required.';
        }

        if (!values.pin) {
            error.pin = 'Pin Code is Required.'
        } else if (values.pin.length !== 6) {
            error.pin = 'PIN code must have 6 digit.';
        }

        if (!values.address) {
            error.address = 'Address is Required.';
        }
        if (!values.qualification) {
            error.qualification = 'Qualification is Required.';
        }
        return error;
    }

    function handleSubmit(e) {
        // console.log('Name: ' + formValue.fname);
        // console.log('Name: ' + formValue.lname);
        // console.log('e-mail: ' + formValue.email);
        // console.log('Phone: ' + formValue.phone);
        // console.log('City: ' + formValue.city);
        // console.log('PIN: ' + formValue.pin);
        // console.log('Address: ' + formValue.address);
        // console.log('Qualification: ' + formValue.qualification);

        setFormError(validate(formValue));
        e.preventDefault();
        setIsSubmit(true);
    }

    // useEffect(() => {
    //     console.log(formError);
    //     if (Object.keys(formError).length === 0 && isSubmit) {
    //         console.log(formError);
    //     }
    // }, [formError])


    return (
        <>
        
           {
             Object.keys(formError).length===0 && isSubmit 
             ? 
             <center><h3 className='text-success'>Congratulation!  Registration successfull</h3> </center>
             :""
           }


            <div className='container-fluid' >
                <form onSubmit={handleSubmit} className='border border-dark p-5' style={{ backgroundColor: '#1b1d1f', color: '#e5e9ee' }}>
                    <center><h1>Form Validation Example:-</h1></center><br />
                    <div className="row">
                        <div className="col">
                            <label htmlFor="formGroupExampleInput">Enter the First Name:-</label>
                            <input onChange={handleChange} name='fname' type="text" className="form-control" placeholder="First Name" />
                            <span className='text-danger'>{formError.fname}</span>
                        </div>
                        <div className="col">
                            <label htmlFor="formGroupExampleInput">Enter the Last Name:-</label>
                            <input onChange={handleChange} name='lname' type="text" className="form-control" placeholder="e-mail" />
                            <span className='text-danger'>{formError.lname}</span>
                        </div>
                        <div className="col">
                            <label htmlFor="formGroupExampleInput">Enter the e-mail:-</label>
                            <input onChange={handleChange} name='email' type="email" className="form-control" placeholder="e-mail" />
                            <span className='text-danger'>{formError.email}</span>
                        </div>
                    </div><br />

                    <div className="row">
                        <div className="col">
                            <label htmlFor="formGroupExampleInput">Enter Phone Number:-</label>
                            <input onChange={handleChange} name='phone'  maxLength={10} type="tel" className="form-control" placeholder="Phone Number" />
                            <span className='text-danger'>{formError.phone}</span>
                        </div>
                        <div className="col">
                            <label htmlFor="formGroupExampleInput">Enter City:-</label>
                            <input onChange={handleChange} name='city' type="text" className="form-control" placeholder="City" />
                            <span className='text-danger'>{formError.city}</span>
                        </div>
                        <div className="col">
                            <label htmlFor="formGroupExampleInput">Enter PIN Code:-</label>
                            <input onChange={handleChange} name='pin' maxLength={6} type="text" className="form-control" placeholder="PIN Code" />
                            <span className='text-danger'>{formError.pin}</span>
                        </div>
                    </div><br /><br />

                    <div className="row">
                        <div className=" col form-group">
                            <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
                            <textarea onChange={handleChange} name='address' className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Address'></textarea>
                            <span className='text-danger'>{formError.address}</span>
                        </div>
                        <div className="col">
                            <label htmlFor="formGroupExampleInput">Enter the Qualification:-</label>
                            <input onChange={handleChange} name='qualification' type="text" className="form-control" placeholder="Qualification" />
                            <span className='text-danger'>{formError.qualification}</span>
                        </div>
                    </div>

                    <div className="col-auto my-1 text-center">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
            <div>
                <pre>
                    {
                        JSON.stringify(formValue, null, 2)
                    }
                </pre>
            </div>
        </>
    )
}

export default FormEg;
