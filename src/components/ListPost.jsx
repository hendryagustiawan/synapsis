import React from "react";
import { Link } from "react-router-dom";

export default function ListPost({ id, title, body }) {
  return (
    <div>
      <div className="container-md mb-4">
        <div className="form-check d-flex">
          <div className="flex-grow-1">
            <Link to={`/detail/${id}`} className="text-decoration-none">
              <h6 className="fw-semibold text-primary fs-5">{title}</h6>
            </Link>

            <p className="fw-normal" style={{ textAlign: "justify" }}>
              {body}
            </p>
          </div>
        </div>
        <div className="border-bottom border-primary"></div>
      </div>
    </div>
  );
}
