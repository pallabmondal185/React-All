import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

const PaginationEg1 = ({ itemsPerPage, items, display }) => {

    // We start with an empty list of items.
    const [currentItems, setCurrentItems] = useState([]); //stores the API Data.
    const [pageCount, setPageCount] = useState(0);

    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {

        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(items.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(items.length / itemsPerPage));

        // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    }, [items, itemOffset,itemsPerPage]);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        setItemOffset(newOffset);

        // console.log(`User requested page number ${event.selected}, which is offset ${newOffset}, total length ${items.length}`);
    };




    return (
        <>


            {
                display(currentItems)

            }

            <div className="d-flex justify-content-center mt-2">
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel="< previous"
                    renderOnZeroPageCount={null}

                    className={"pagination"}
                    pageLinkClassName={"page-link"}
                    previousLinkClassName={"page-link bg-success text-light"}
                    nextLinkClassName={"page-link bg-success text-light"}
                    activeLinkClassName={"bg-danger text-light"}
                />
            </div>
        </>
    )
}

export default PaginationEg1;
