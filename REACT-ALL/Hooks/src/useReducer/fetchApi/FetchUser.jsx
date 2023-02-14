import React, { useEffect, useReducer, useState } from 'react';
import { RingLoader } from 'react-spinners';

function FetchUser() {
    const [loading,setLoading]=useState(true);
    const initialState = { error: false, data: {} };

    const reducer = (state, action) => {
        switch (action.type) {
            case 'SUCCESS': return { error: false, data: action.payLoad };
            case 'ERROR': return { error: true, data: {} };
            default: return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/1')
            .then((response) => response.json())
            .then((d) => {
                dispatch({ type: 'SUCCESS', payLoad: d })
                // console.log(d);
            })
            .catch(dispatch({ type: 'ERROR' }));

            setTimeout(() => {
                setLoading(false)
            }, 2000);
    }, []);

    return (
        <center>
        <h1>Fetch API from User:</h1>
            {
                loading
                    ?
                    <div>
                    <h4>Loading...</h4>
                    <RingLoader color="#36d7b7" loading={loading}/>
                    </div>
                    :
                    state.error
                        ?
                        <h4>Data Not Found</h4>
                        :
                        <div>
                            
                            <p>Name: {state.data.name}</p>
                            <p>username: {state.data.username}</p>
                            <p>e-mail: {state.data.email}</p>
                        </div>
            }

            {/* {state.error || null} */}
        </center>
    )
}

export default FetchUser;
