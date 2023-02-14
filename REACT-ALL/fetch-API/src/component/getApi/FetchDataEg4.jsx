import React, { useState, useEffect } from 'react';
import FadeLoader from "react-spinners/FadeLoader";


function FetchDataEg2() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [flag, setFlag] = useState(0);

    function getDataClick() {
        setFlag(1);
        setTimeout(() => {
            setLoading(false)
        }, 2000);
    }

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts').then(
            (response) => response.json()
        ).then(
            (result) => {
                // console.log(result);
                setData(result);
            }
        );
    },)
    return (
        <>
            <center>
                <h2>Fetch API Example 4:-</h2>
                <button onClick={getDataClick}>Get Data</button><br />
            </center>
            <div>
                {
                flag === 0 ? ''
                    :
                    loading
                        ?
                        <center>
                            <h3>Loading...</h3>
                            <FadeLoader color="#36d7b7" loading={loading} />
                        </center>
                        :
                        data.length === 0
                            ?
                            <center>No Data Found</center>
                            :
                            data.map((item) =>                             
                                    <div key={item.id}>
                                        <p><strong> userId:</strong> {item.userId} <br /></p>
                                        <p><strong>id:</strong> {item.id} <br /></p>
                                        <p><strong>title:</strong> {item.title} <br /></p>
                                        <p><strong>body:</strong> {item.body} <br /></p>
                                        <hr />
                                    </div>                               
                            )
                }
            </div>

        </>
    )
}

export default FetchDataEg2;
