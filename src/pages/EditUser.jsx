import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { editUser, getUserList } from "../store/Actions/actionUser";

export default function EditUser() {
  const { state } = useLocation();
  const { id, name, email, status, gender } = state;

  const [inputName, setInputName] = useState(name);
  const [inputEmail, setInputEmail] = useState(email);
  const [inputStatus, setInputStatus] = useState(status);
  const [inputGender, setInputGender] = useState(gender);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleEditUser = (e) => {
    e.preventDefault();
    dispatch(
      editUser(
        {
          name: inputName,
          email: inputEmail,
          gender: inputGender,
          status: inputStatus,
        },
        id
      )
    ).then(() => {
      navigate("/user");
      dispatch(getUserList());
    });
  };

  return (
    <div className="conatiner my-5">
      <div className="row justify-content-center">
        <div className="col-6">
          <form onSubmit={handleEditUser}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label fw-semibold">
                Name
              </label>
              <input value={inputName} onChange={(e) => setInputName(e.target.value)} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="invalid-feedback">Please select a valid state.</div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label fw-semibold">
                Email
              </label>
              <input value={inputEmail} onChange={(e) => setInputEmail(e.target.value)} type="email" className="form-control" id="exampleInputPassword1" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label fw-semibold">
                Status
              </label>
              <select value={inputStatus} onChange={(e) => setInputStatus(e.target.value)} className="form-select" aria-label="Default select example">
                <option value="" disabled>
                  Open this select status
                </option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label fw-semibold">
                Gender
              </label>
              <select value={inputGender} onChange={(e) => setInputGender(e.target.value)} className="form-select" aria-label="Default select example">
                <option value="" disabled>
                  Open this select gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            <div className="modal-footer mt-4">
              <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
