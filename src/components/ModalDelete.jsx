import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteUser, getUserList } from "../store/Actions/actionUser";

export default function ModalDelete({ id }) {
  localStorage.setItem("userId", id);

  const dispatch = useDispatch();

  const handleDelete = () => {
    const id = localStorage.getItem("userId");

    dispatch(deleteUser(id)).then(() => {
      dispatch(getUserList());
    });
  };

  return (
    <div className="modal fade" id="exampleModalDelete" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body fw-bold fs-5">Are you sure you want to delete?</div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
              No
            </button>
            <button onClick={() => handleDelete()} type="button" className="btn btn-danger" data-bs-dismiss="modal">
              Yes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
