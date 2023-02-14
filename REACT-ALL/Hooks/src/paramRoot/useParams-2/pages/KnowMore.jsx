import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const KnowMore = () => {
    const [moreData, setMoreData] = useState({});

    const { id } = useParams();

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((res) => setMoreData(res.data))
    }, [])
    
    return (
        <>
            {/* <pre>{JSON.stringify(moreData, null, 2)}</pre> */}

            
               
                    <div className="card" style={{ width: '18rem' }} >
                        <div className="card-body">
                            <h5 className="card-title">{moreData.name}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{moreData.phone}</h6>
                        </div>
                    </div>

        </>
    )
}

export default KnowMore
