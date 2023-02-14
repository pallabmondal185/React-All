import React, { useState, useEffect } from 'react';
import { FadeLoader } from 'react-spinners';


function Photos() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=10')
      // fetch('https://api.github.com/users')
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
                  <div className='col mb-2' key={item.id}>
                    <div className="card" style={{ width: '18rem' }}>
                      <img className="card-img-top" src={item.url} alt="Card image cap" />
                      <div className="card-body">
                        <p className="card-title"><strong>Title: </strong> {item.title}</p>
                      </div>
                    </div>

                  </div>
                )
              }
            </div>
      }
    </>
  )
}

export default Photos
