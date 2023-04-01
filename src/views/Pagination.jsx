import React from "react";

const Pagination = () => {
  return (
    <nav
      aria-label="..."
      className="my-2 py-3 shadow d-flex justify-content-around"
    >
      <ul className="pagination pagination-circle m-0">
        <li className="page-item">
          <a className="page-link">Previous</a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            1
          </a>
        </li>
        <li className="page-item active" aria-current="page">
          <a className="page-link" href="#">
            2 <span className="visually-hidden">(current)</span>
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            3
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
