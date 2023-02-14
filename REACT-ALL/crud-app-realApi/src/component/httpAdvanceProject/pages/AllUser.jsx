import React, { useEffect, useState } from 'react';
import { getUser, deleteUser } from '../axiosMethods/ApiMethods';
import EditPage from './EditPage';

function AllUser() {
  const [userData, setUserData] = useState([]);
  const [show, setShow] = useState(false);
  const [editId,setEditId]=useState(0);
  

  const handleClose = () => setShow(false);

  const handleEdit = (id) => {
    setEditId(id);
    setShow(true);
  }

  const handleDelete = (id) => {
    deleteUser(id);
    getData();
  }

  const getData = () => {
    getUser().then((res) => setUserData(res.data));
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <>
      <div className="container mt-3 text-center">
        <table className="table table-striped border border-dark ">
          <thead className='bg-success text-light'>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">e-mail</th>
              <th scope="col">Phone</th>
              <th scope="col">City</th>
              <th scope="col" colSpan={2}>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              userData.map((item) =>
                <tr key={item.id}>
                  <th scope="row" >{item.id}</th>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>{item.city}</td>
                  <td><button className='btn btn-warning' onClick={() => handleEdit(item.id)}>Edit</button></td>
                  <td><button className='btn btn-danger' onClick={() => handleDelete(item.id)}>Delete</button></td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>

      <EditPage show={show} handleClose={handleClose} id={editId} getData={getData}/>
    </>
  )
}

export default AllUser;
