import React from 'react'
import { usePagination } from './PaginationHook'
import { Pagination } from '@mui/material';

const PaginationCall = ({ data }) => {
    const { totalPages,
        startPageIndex,
        endPageIndex,
        currentPageIndex,
        displayPage } = usePagination(3, data.length);

    const display = () => {
        const pageData = []
        for (let i = startPageIndex; i <= endPageIndex; i++) {
            pageData.push(data[i])
        }
        return pageData;
    }

    return (
        <>
            {
                display().map(item=>
                    <div key={item.id}>
                      <h1>ID: {item.id}</h1>
                      <h5>TITLE: {item.title}</h5>
                      <h5>BODY: {item.body}</h5>
                      <hr />
                    </div>
                    )
            }

            <Pagination
                count={totalPages}
                shape='rounded'
                color='primary'
                onChange={(event,value) => displayPage(value)}
            />
        </>
    )
}

export default PaginationCall
