import React, { useState, useEffect } from 'react';
import { FadeLoader } from 'react-spinners';

import './commentStyle.css'

function Comment() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
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
                  <div className='col-md-4' >
                    <div className="media g-mb-30 media-comment">
                      <div className="media-body u-shadow-v18 g-bg-secondary g-pa-30">
                        <div className="g-mb-15">
                          <h5 className="h5 g-color-gray-dark-v1 mb-0"><strong>Name: </strong>{item.name}</h5>
                          <span className="g-color-gray-dark-v4 g-font-size-12"><strong>e-mail: </strong>{item.email}</span>
                        </div>

                        <p><strong>Body: </strong>{item.body}</p>
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

export default Comment;
