import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((res) => setData(res.data));
    }, [])

    return (
        <>

            {
                data.map((item) =>
                    <div className="card" style={{ width: '18rem' }} key={item.id}>
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{item.username}</h6>
                            <h6 className="card-subtitle mb-2 text-muted">{item.email}</h6>


                            <Link to={`/know/${item.id}`} className="card-link">
                                <button className='btn btn-primary'>Know More</button>
                            y</Link>

                        </div>
                    </div>

                )
            }

        </>
    )
}

export default Home
