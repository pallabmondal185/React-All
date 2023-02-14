import React, { useEffect, useState } from 'react';
import { FadeLoader } from 'react-spinners';
import PaginationCall from './PaginationCall';

function PaginationPage() {
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

    // console.log(data)

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
                    <PaginationCall data={data}/>
                    
            }
        </>
    )
}

export default PaginationPage;
