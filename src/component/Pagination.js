import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

const PER_PAGE = 10;

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    fetch("https://ihsavru.me/Demo/uploads.json")
      .then((res) => res.json())
      .then((data) => {
        const {
          course: { uploads },
        } = data;
        setData(uploads);
      });
  }

  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };

  const offset = currentPage * PER_PAGE;
  console.log("off", offset);

  const currentPageData = data
    .slice(offset, offset + PER_PAGE)
    .map(({ thumburl }) => <img src={thumburl} />);

  const pageCount = Math.ceil(data.length / PER_PAGE);

  return (
    <div className="App">
      <h1>Paginate Demo</h1>

      {currentPageData}

      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        previousLinkClassName={"pagination__link"}
        nextLinkClassName={"pagination__link"}
        disabledClassName={"pagination__link--disabled"}
        activeClassName={"pagination__link--active"}
      />
    </div>
  );
};

export default Pagination;
