import React, { useState, useEffect } from 'react';

function FetchAsync() {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);


    async function getData() {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUser(data);
    }

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
        
        getData();
    }, [])

    return (
        <>
            <h2>Fetching Data Using Async Await</h2>
            {
                loading ?
                <h4>Loading...</h4>
                :               
                    user.length===0 ?
                    <h3>Data Not Found</h3>
                    :               
                <div className='row'>
                {
                    user.map((item) =>
                        <div className='col-md-4' key={item.id}>
                            <div className="card" style={{ width: '18rem' }}>
                                <div className="card-body">
                                    <h5 className="card-title">Special title treatment</h5>
                                    <p><strong>Name: </strong>{item.name}</p>
                                    <p><strong>username: </strong>{item.username}</p>
                                    <p><strong>e-mail:</strong>{item.email}</p>
                                    <p><strong>City: </strong>{item.address.city}</p>
                                    <p><strong>Phone: </strong>{item.phone}</p>
                                    <p><strong>Website: </strong>{item.website}</p>
                                    <p><strong>Company Name: </strong>{item.company.name}</p>                                <a href="#" className="btn btn-primary">Go somewhere</a>
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

export default FetchAsync;

