import React, { useState, useEffect } from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import FadeLoader from "react-spinners/FadeLoader";


function ReactSpinnersEg() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000);
    })

    return (
        <>
            {/* <ClipLoader
        color={'green'}
        loading={loading}
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      /> */}

            {
                loading ?
                    <>
                        <center>
                            <h3>Loading....</h3>
                            <FadeLoader color="#36d7b7" loading={loading} />
                        </center>
                    </>
                    :
                    <center>
                        <h1>React Spinner Example</h1>
                        <h3>Fetcing Data</h3>
                    </center>
            }
        </>
    )
}

export default ReactSpinnersEg
