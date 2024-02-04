import React, { useEffect, useState } from "react";
import ModalDelete from "./ModalDelete";
import { Link } from "react-router-dom";

export default function UserList({ id, name, email, gender, status }) {
  const [selectId, setSelectId] = useState("");

  return (
    <div>
      <div className="container-md mb-4">
        <div className="form-check d-flex">
          <div className="flex-grow-1">
            <h6 className="fw-semibold text-primary fs-5">{name}</h6>

            <p className="fw-normal">
              {gender} - {status === "active" ? <span className="fw-semibold text-success">{status}</span> : <span className="fw-semibold text-danger">{status}</span>}
            </p>
          </div>

          <div className="mx-auto d-flex px-5">
            <div className="me-4">
              <Link to={`/edit/${id}`} state={{ id, name, email, gender, status }}>
                <button type="button" className="btn btn-success">
                  Edit
                </button>
              </Link>
            </div>
            <div>
              <button onClick={() => setSelectId(id)} type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModalDelete">
                Delete
              </button>

              {/* <!-- Modal --> */}
              <ModalDelete id={selectId} />
            </div>
          </div>
        </div>
        <div className="border-bottom border-primary"></div>
      </div>
    </div>
  );
}
