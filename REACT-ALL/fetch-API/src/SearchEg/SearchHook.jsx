import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const SearchHook = ({ data, display }) => {
    const [filteredData, setFilteredData] = useState([]);

    const handleChange = (e) => {
        let p = [];
        p = data.filter((item) => {
            const x = item.title.toLowerCase();
            if (e.target.value === '') {
                return true;
            } else {
                return x.includes(e.target.value);
            }
        })

        if (!p) {
            setFilteredData(data);
        } else {
            setFilteredData(p);
        }
    }

    useEffect(() => {
        setFilteredData(data);
    }, [data])

    return (
        <>
            <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" onChange={handleChange} type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>

            {
                display(filteredData)
            }
        </>
    )
}

export default SearchHook ;
