// src/components/Pagination.jsx

import React from "react";
import "./css/pagination.css";

const Pagination = ({ prevPage, nextPage, currentPage }) => {
  return (
    <div>
      {currentPage > 1 && <button onClick={prevPage}>Previous Page</button>}
      <button onClick={nextPage}>Next Page</button>
    </div>
  );
};

export default Pagination;
