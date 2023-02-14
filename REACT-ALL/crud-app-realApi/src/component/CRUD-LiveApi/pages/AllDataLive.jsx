import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AllDataLive = () => {
  const [liveData, setLiveData] = useState([]);
  
  const getLiveData = async () => {
    const res = await axios.get('https://backendapinodejsraju.herokuapp.com/api/allstudent');
    setLiveData(res.data.data);
  }

  const deleteLiveData = async (id) => {
    await axios.delete(`https://backendapinodejsraju.herokuapp.com/api/delete/${id}`)
  }

  const handleDelete = (id) => {
    deleteLiveData(id);
  }

  useEffect(() => {
    getLiveData();
  }, [handleDelete]);

  return (
    <>
      <div className="container">
        <div className="row">
          {
            liveData.map((item) =>
              <div className="card-group col-md-4" key={item._id}>
                <div className="card mt-2">
                  <div className="card-body">
                    <h5 className="card-title text-primary"><strong>Name: </strong>{item.name}</h5><hr />
                    <p className="card-text"><strong>email: </strong>{item.email}</p>
                    <p className="card-text"><strong>Phone: </strong>{item.phone}</p>
                    <p className="card-text"><strong>Address: </strong>{item.address}</p>
                    <p className="card-text"><strong>City: </strong>{item.city}</p>
                    <p className="card-text"><strong>Class: </strong>{item.class}</p><hr />

                    <div className="d-flex justify-content-center">
                      <Link to={`/edit/${item._id}`} className="btn btn-warning mx-2">Edit</Link>
                      <button onClick={() => handleDelete(item._id)} className="btn btn-danger mx-2">Delete</button>
                    </div>

                  </div>
                </div>
              </div>
            )
          }
        </div>
      </div>
    </>
  )
}

export default AllDataLive;
