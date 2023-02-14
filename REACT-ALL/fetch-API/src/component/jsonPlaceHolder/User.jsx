import React, { useState, useEffect } from 'react';
import { FadeLoader } from 'react-spinners';

function User() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(result => {
        setData(result);
        // console.log(result);
      });
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  }, []);

  return (
    <>
      {
        loading ?
          <center>
            <h3>Loading....</h3>
            <FadeLoader color="#36d7b7" loading={loading} />
          </center>
          :
          data.length === 0 ? <center><h3>Data Not Found</h3></center>
            :
            <div className="row">
              {
                data.map((item) =>
                  <div className="card col-md-6" key={item.id}>
                    <div className="card-header">
                      <strong>Id: </strong> {item.id} <br />
                      <strong>Name: </strong> {item.name}
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">
                        <strong>Username: </strong> {item.username} <br />
                        <strong>e-mail: </strong> {item.email} <br />
                        <strong>Phone: </strong> {item.phone}
                      </h5>
                      <address>
                        <p className="card-text">
                          <strong>Address: </strong>
                          {item.address.street}, {item.address.suite}, {item.address.city}, {item.address.zipcode},
                        </p>
                      </address>
                      <p className="card-text">
                        <strong>Company: </strong>
                        {item.company.name}, <br />
                        {item.company.catchPhrase}, <br />
                        {item.company.bs}.
                      </p>
                      <a href="#" className="btn btn-primary">Know More</a>
                    </div>
                  </div>
                )
              }
            </div>
      }
    </>
  )
}

export default User;
