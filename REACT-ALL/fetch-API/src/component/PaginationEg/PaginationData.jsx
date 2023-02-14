import React, { useEffect, useState } from 'react';
import PaginationEg1 from './PaginationEg1'

function Post() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(result => {
                setData(result);
            });
    }, []);

    function display(currentItems) {
        return (
            <div className="row">
            {
                
            currentItems.map((item) => (
                <div className="col-md-6" key={item.id}>
                    <div className="card" >
                        <div className="card-header text-success">
                            <strong>Id: </strong> {item.id}
                        </div>
                        <div className="card-body">
                            <h5 className="card-title"><strong> Title: </strong> {item.title}</h5>
                            <p className="card-text"><strong> Body: </strong> {item.body}</p>

                            <a href="#" className="btn btn-primary">Know More</a>
                        </div>
                    </div>
                </div>
            ))
            }
            </div>
        )
    }

    return (
        <>
            <PaginationEg1 items={data} itemsPerPage={4} display={display} />
        </>
    )
}

export default Post
