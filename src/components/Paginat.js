import React from 'react'
import ReactPaginate from 'react-paginate';

const Paginat = ({getPage,pageCount}) => {
    const handlePageClick=(data)=>{
        getPage(data.selected +1 )
    }
  return (
    <ReactPaginate
    breakLabel="..."
    nextLabel="next >"
    onPageChange={handlePageClick}
    marginPagesDisplayed={2}
    pageRangeDisplayed={2}
    pageCount={pageCount}
    previousLabel="< previous"
    containerClassName={'pagination justify-content-center p-3 col-md-12 col-sm-6 flex-wrap'}
    pageClassName={'page-item'}
    pageLinkClassName={"page-link mx-2"}
    previousClassName={"page-item"}
    nextClassName={"page-item"}
    previousLinkClassName={"page-link"}
    nextLinkClassName={"page-link"}
    breakClassName={"page-item"}
    breakLinkClassName={"page-link"}
     activeClassName={"active"}
  />
  )
}

export default Paginat