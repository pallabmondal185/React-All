import React, { useState, useEffect } from 'react';
import FadeLoader from "react-spinners/FadeLoader";


//Fetching Data Using table Form.
//Loading is Used.

function FetchDataEg3() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000);

        fetch('https://jsonplaceholder.typicode.com/posts').then((response) => response.json())
            .then((result) => {
                // console.log(result);
                setData(result);
            });
    }, [])

    return (
        <>
            <center>
                <h1>Fetch API Example 3:-</h1>
                {
                    loading ?
                        <>
                            <h3>Loading....</h3>
                            <FadeLoader color="#36d7b7" loading={loading} />
                        </>
                        :
                        <>
                            <table border={1}>
                                <thead>
                                    <tr>
                                        <th>UserId</th>
                                        <th>Id</th>
                                        <th>title</th>
                                        <th>body</th>
                                    </tr>
                                </thead>

                                {
                                    data.length === 0
                                        ?
                                        <h3>No DataFound or Network Error</h3>
                                        :
                                        data.map((item) =>
                                            <tbody  key={item.id}>
                                                <tr>
                                                    <td>{item.userId}</td>
                                                    <td>{item.id}</td>
                                                    <td>{item.title}</td>
                                                    <td>{item.body}</td>
                                                </tr>
                                            </tbody>
                                        )
                                }

                            </table>
                        </>
                }
            </center>
        </>
    )
}

export default FetchDataEg3;
