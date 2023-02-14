import React, { useEffect, useState } from "react";
import axios from 'axios'
import { Link } from "react-router-dom";

const Home = () => {
  const [user, setUser] = useState([]);
 
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((res)=>{
         setUser(res.data)
    })
  });
  return (
    <div>
   <div className="container">
        <div className="row">
          {user.map((CurrentData) => {
            return (
              <div className="col-md-4" key={CurrentData.id}>
                <div className="card cardd">
                  Name: {CurrentData.name}
                  <div className="card-body">
                    <h5 className="card-title">Email: {CurrentData.email}</h5>
                    <p className="card-text">
                      City : {CurrentData.address.city}
                    </p>
                    <p className="card-text">
                      ZipCode : {CurrentData.address.zipcode}
                    </p>
                       <Link to={`/about/ ${CurrentData.id}`}  className="btn btn-primary">
                      userDetails
                    </Link> 
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  )
}

export default Home
