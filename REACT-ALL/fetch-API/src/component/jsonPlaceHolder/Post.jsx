import React, { useEffect, useState } from 'react';
import { FadeLoader } from 'react-spinners';

function Post() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
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
            {/* <pre>{JSON.stringify(data,null,2)}</pre> */}
            {
                loading ?
                    <center>
                        <h3>Loading....</h3>
                        <FadeLoader color="#36d7b7" loading={loading} />
                    </center>
                    :
                    data.length===0 ? <center><h3>Data Not Found</h3></center>
                    : 
                    <div className='row'>
                        {
                            data.map((item) =>
                                <div className="col-md-6" key={item.id}>
                                    <div className="card" >
                                        <div className="card-header text-success">
                                            <strong>Id: </strong> {item.id}
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title"><strong> Title: </strong> {item.title}</h5>
                                            <p className="card-text"><strong> Body: </strong> {item.body}</p>

                                            <a href="#" className="btn btn-primary">Know More</a>
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

export default Post
