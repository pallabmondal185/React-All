import React from 'react';
import { useState, useEffect } from 'react';
import { Edit, UpdateStudent } from '../redux/StudentSlice';
import { useNavigate, useParams } from 'react-router-dom'

const initialValue = {
    name:"",
    email:"",
    phone:"",
    city:"",
    address:"",
    class:""
}

const EditStudent = () => {
    const [student, setStudent] = useState(initialValue);
    const [error, setError] = useState({});
    const navigate = useNavigate();
    const { id } = useParams()

    const getUserData = async () => {
        let response = await Edit(id)

        console.log('hadgash', response);
        setStudent(response.data)
    }

    useEffect(() => {
        getUserData()
    }, [])

    const validation = () => {
        let error = {}

        if (!student.name) {
            error.name = "Name is Required"
        }

        if (!student.email) {
            error.email = "Email is Required"
        } else if (
            !/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(student.email)
        ) {
            error.email = "Enter a valid Email"
        }

        if (!student.phone) {
            error.phone = "Phone is Required"
        }

        if (!student.city) {
            error.city = "City name is Required"
        }
        if (!student.address) {
            error.address = "Address is Required"
        }
        if (!student.class) {
            error.class = "className name is Required"
        }
        return error
    }
    
    let name, value
    const postUserData = (e) => {
        name = e.target.name
        value = e.target.value
        setStudent({ ...student, [name]: value })

        if (name === "name") {
            if (value.length === 0) {
                setError({ ...error, name: "@Name is Required" })
                setStudent({ ...student, name: "" })
            } else {
                setError({ ...error, name: "" })
                setStudent({ ...student, name: value })
            }
        }
        if (name === "email") {
            if (value.length === 0) {
                setError({ ...error, email: "Email is required" })
                setStudent({ ...student, email: "" })
            } else {
                setError({ ...error, email: "" })
                setStudent({ ...student, email: value })
            }
        }
        if (name === "phone") {
            if (value.length === 0) {
                setError({ ...error, phone: "@Phone is Required" })
                setStudent({ ...student, phone: "" })
            } else {
                setError({ ...error, phone: "" })
                setStudent({ ...student, phone: value })
            }
        }
        if (name === "city") {
            if (value.length === 0) {
                setError({ ...error, city: "@City is Required" })
                setStudent({ ...student, city: "" })
            } else {
                setError({ ...error, city: "" })
                setStudent({ ...student, city: value })
            }
        }
        if (name === "address") {
            if (value.length === 0) {
                setError({ ...error, address: "@City is Required" })
                setStudent({ ...student, address: "" })
            } else {
                setError({ ...error, address: "" })
                setStudent({ ...student, address: value })
            }
        }
        if (name === "className") {
            if (value.length === 0) {
                setError({ ...error, class: "@City is Required" })
                setStudent({ ...student, class: "" })
            } else {
                setError({ ...error, class: "" })
                setStudent({ ...student, class: value })
            }
        }
    }
    const SubmitInfo = async e => {
        e.preventDefault()
        let ErrorList = validation()
        setError(validation())

        if (Object.keys(ErrorList).length === 0) {
            await UpdateStudent(student, id)
            navigate('/student')
           
        }
    }
    return (
        <>
            <div className='container mt-5'>
                <div className="card">
                    <h1>Update  Student</h1>
                    <div className="card-body">
                        <form onSubmit={SubmitInfo}>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Name</label>
                                <input type="text" className="form-control"
                                    name='name'
                                    value={student.name}
                                    onChange={e => postUserData(e)} />
                                <span style={{ color: "red", marginLeft: "24px" }}> {error.name} </span>
                            </div>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Email</label>
                                <input type="email" className="form-control"
                                    name='email'
                                    value={student.email}
                                    onChange={e => postUserData(e)} />
                                <span style={{ color: "red", marginLeft: "24px" }}> {error.email} </span>
                            </div>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Phone</label>
                                <input type="text" className="form-control"
                                    name='phone'
                                    value={student.phone}
                                    onChange={e => postUserData(e)} />
                                <span style={{ color: "red", marginLeft: "24px" }}> {error.phone} </span>
                            </div>
                            <div className="form-group">
                                <label for="exampleInputEmail1">City</label>
                                <input type="text" className="form-control"
                                    name='city'
                                    value={student.city}
                                    onChange={e => postUserData(e)} />
                                <span style={{ color: "red", marginLeft: "24px" }}> {error.city} </span>
                            </div>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Address</label>
                                <input type="text" className="form-control"
                                    name='address'
                                    value={student.address}
                                    onChange={e => postUserData(e)} />
                                <span style={{ color: "red", marginLeft: "24px" }}> {error.address} </span>
                            </div>
                            <div className="form-group">
                                <label for="exampleInputEmail1">class</label>
                                <input type="text" className="form-control"
                                    name='class'
                                    value={student.class}
                                    onChange={e => postUserData(e)} />
                                <span style={{ color: "red", marginLeft: "24px" }}> {error.className} </span>
                            </div>


                            <button type="submit" className="btn btn-primary">Update Student</button>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default EditStudent