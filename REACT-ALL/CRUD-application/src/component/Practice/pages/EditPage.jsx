import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { axiosInstance } from '../axiosMethods/axiosInstanceEg';

const EditPage = () => {

    const initState = { name: '', email: '', phone: '', city: '' };
    const navigate = useNavigate();
    const {id} = useParams();
    const [editData, setEditData] = useState(initState);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditData({ ...editData, [name]: value });
    }

    const putData=async()=>{
        // await axiosInstance.put('/'+id,editData);
        await axiosInstance.patch('/'+id,editData);
    }

    const handleClick = () => {
        putData();
        navigate('/');

    }

    const getEditData = async () => {        
        const res=await axiosInstance.get('/'+id)
        setEditData(res.data);
    }

    useEffect(() => {
        getEditData();
    }, []);
    
    // console.log(id);
    console.log(editData);

    return (
        <>
            <pre>{JSON.stringify(editData, null, 2)}</pre>

            <div className='d-flex justify-content-center'>
                <div className='w-50 bg-dark text-light p-5 m-5'>
                    <form>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Full Name</label>
                            <input onChange={handleChange} name='name' value={editData.name} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Full Name" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input onChange={handleChange} name='email' value={editData.email} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Phone Number</label>
                            <input onChange={handleChange} name='phone' value={editData.phone} type="number" className="form-control" id="exampleInputPassword1" placeholder="Enter Phone Number" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">City</label>
                            <input onChange={handleChange} name='city' value={editData.city} type="text" className="form-control" id="exampleInputPassword1" placeholder="Enter City" />
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

export default EditPage;
