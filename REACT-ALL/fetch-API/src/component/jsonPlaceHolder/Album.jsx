import React, { useState, useEffect } from 'react';
import { FadeLoader } from 'react-spinners';


function Album() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/albums')
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
            <div className='row'>
              {
                data.map((item) =>
                  <div className='col' key={item.id}>
                    <div className="card" style={{ width: '18rem' }}>
                      <div className="card-header">
                        <strong>Id: </strong> {item.id}
                      </div>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item"><strong>Title: </strong>{item.title}</li>
                      </ul>
                    </div>
                  </div>
                )
              }
            </div>
      }
    </>
  )
}

export default Album
