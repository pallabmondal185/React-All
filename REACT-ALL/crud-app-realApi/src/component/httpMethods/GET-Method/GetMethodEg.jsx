import axios from 'axios';
import React, { useEffect, useState } from 'react';

function GetMethodEg() {
  const [data, setData] = useState([]);
  const [error, setError] = useState('')

  useEffect(() => {
    axios.get('http://127.0.0.1:3003/user')
      .then((res) => setData(res.data))
      .catch((error) => setError(error.message))
  }, [])

  return (
    <>
      <h1>getData</h1>
      {
        error
          ?
          <h3>{error}</h3>
          :
          data.map((item) => {
            const { name, email, phone, city, id } = item;
            return (
              <div key={item.id}>
                {/* <h3>{item.id} {item.name} {item.email} {item.phone} {item.city}</h3> */}

                <pre>{id}   {name}   {email}   {phone}   {city}</pre><hr />
              </div>
            )
          })
      }
    </>
  )
}

export default GetMethodEg;
