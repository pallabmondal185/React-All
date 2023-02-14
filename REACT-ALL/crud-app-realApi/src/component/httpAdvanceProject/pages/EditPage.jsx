import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { updateUser } from '../axiosMethods/ApiMethods';

function EditPage(props) {
    const initialState = { name: '', email: '', phone: '', city: '' }
    const [formData, setFormData] = useState(initialState)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = () => {
        updateUser(props.id, formData);
        setFormData(initialState)
        props.handleClose();
        props.getData();
    }

    const handleClose = () => props.handleClose();

    return (
        <>
            <Modal show={props.show} onHide={handleClose}>

                <Modal.Body >
                    <div className='bg-dark text-light p-5'>
                        <h3 className='text-success text-center'>Update data</h3>
                        <form>
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

                        </form>
                        <center>
                    
                    <Button variant="secondary m-1" onClick={handleClose}>Close</Button>
                    <Button variant="primary m-1" onClick={handleSubmit}>Update Data</Button> 
            </center>
                    </div>

                </Modal.Body>

               
            </Modal>
        </>
    )
}

export default EditPage;
