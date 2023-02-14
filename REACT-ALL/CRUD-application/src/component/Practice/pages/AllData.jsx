import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { deleteData, getData } from '../server/PracSlice';
import { axiosInstance } from '../axiosMethods/axiosInstanceEg';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const AllData = () => {
  const { data, loading, error } = useSelector(state => state.pracReducer);
  const [isDelete,setIsDelete]=useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // console.log(data);
  // console.log(loading);
  // console.log(error);

  // 
  // const deleteData = async (id) => {
  //   await axiosInstance.delete(`/${id}`)
  // }

  const handleDelete = (id) => {
    deleteData(id); //coming from reducers
    setIsDelete(!isDelete);
  }


  useEffect(() => {
    dispatch(getData());
  }, [isDelete])

  return (
    <>
      <h1>All Data</h1>
      <div className="container">
        <table className="table table-striped table-dark">
          <thead>
            <tr>
              <th scope="col">Full Name</th>
              <th scope="col">Email Address</th>
              <th scope="col">Phone NUmber</th>
              <th scope="col">City</th>
              <th scope="col" colSpan={2} className='text-center'>Action</th>
            </tr>
          </thead>

          <tbody>
            {
              data.map(item =>
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>{item.city}</td>
                  <td><button onClick={()=>navigate(`/edit/${item.id}`)} className='btn btn-warning'>Edit</button></td>
                  <td><button onClick={() => handleDelete(item.id)} className='btn btn-danger'>Delete</button ></td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>

    </>
  )
}

export default AllData;
