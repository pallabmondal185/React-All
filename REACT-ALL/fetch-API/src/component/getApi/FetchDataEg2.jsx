import React,{useState,useEffect} from 'react';

function FetchDataEg2() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts').then(
            (response) => response.json()
        ).then(
            (result) => {
                console.log(result);
                setData(result);
            }
        );
    }, [])

    return (
        <>
            <h2>Fetch API Example 2:-</h2>
            <div>
                {data.map((item) =>
                        <div  key={item.id}>
                            <p><strong> userId:</strong> {item.userId} <br /></p>
                            <p><strong>id:</strong> {item.id} <br /></p>
                            <p><strong>title:</strong> {item.title} <br /></p>
                            <p><strong>body:</strong> {item.body} <br /></p>
                            <hr />
                        </div>
                    
                )}
            </div>

        </>
    )
}

export default FetchDataEg2;
