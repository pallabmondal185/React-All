import React, { useEffect, useState } from 'react';

function FetchApi() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((result) => setData(result));

        setTimeout(() => {
            setLoading(false);
        }, 2000);

    }, [])
    console.log(data);
    return (
        <>
            <h1>Fetch Api</h1>
            {
                setLoading ? 'Loading...' :

                    data.length === 0 ? 'Data Not Foud'
                        :
                        data.map((item) =>
                            <div className='row' key={item.id}>
                                <div className="card col-md-6" style={{ width: '18rem' }}>
                                    <div className="card-header">
                                        <strong>Id: </strong>{item.id}
                                    </div>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">
                                            <strong>Title: </strong>{item.title}
                                        </li>
                                        <li className="list-group-item">
                                            <strong>Body: </strong>{item.body}
                                        </li>
                                    </ul>
                                </div><br /><br />
                            </div>
                        )
            }
        </>
    )
}

export default FetchApi
