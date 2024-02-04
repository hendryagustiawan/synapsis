import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, getUserList } from "../store/Actions/actionUser";
import UserList from "../components/UserList";
import DataNotFound from "../components/DataNotFound";

export default function User() {
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputStatus, setInputStatus] = useState("");
  const [inputGender, setInputGender] = useState("");
  const [searchName, setSearchName] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserList(searchName, currentPage));
  }, [searchName, currentPage]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleSearch = (e) => {
    e.preventDefault();
  };

  const { userList } = useSelector((state) => state.user);

  const handleAddUser = (e) => {
    e.preventDefault();
    dispatch(
      addUser({
        name: inputName,
        email: inputEmail,
        gender: inputGender,
        status: inputStatus,
      })
    ).then(() => {
      dispatch(getUserList());
    });
  };

  return (
    <div>
      <div className="bg-white my-5">
        <div className="row mb-5 justify-content-center align-items-center">
          <div className="col-lg-4 col-sm-5">
            <div>
              <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalAdd">
                Add User
              </button>
              {/* <!-- Modal --> */}
              <div className="modal fade" id="exampleModalAdd" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="exampleModalLabel">
                        Add User
                      </h1>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <div className="modal-body">
                      <form onSubmit={handleAddUser}>
                        <div className="mb-3">
                          <label htmlFor="exampleInputEmail1" className="form-label">
                            Name
                          </label>
                          <input value={inputName} onChange={(e) => setInputName(e.target.value)} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="invalid-feedback">Please select a valid state.</div>
                        <div className="mb-3">
                          <label htmlFor="exampleInputPassword1" className="form-label">
                            Email
                          </label>
                          <input value={inputEmail} onChange={(e) => setInputEmail(e.target.value)} type="email" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="exampleInputEmail1" className="form-label">
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
                          <label htmlFor="exampleInputEmail1" className="form-label">
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

                        <div className="modal-footer">
                          <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">
                            Save
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-5">
            <form className="d-flex container" role="search" onSubmit={handleSearch}>
              <input value={searchName} onChange={(e) => setSearchName(e.target.value)} className="form-control me-2" type="search" placeholder="Search by name" aria-label="Search" />
              <button className="btn btn-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>

        {userList === null || userList.length === 0 ? (
          <DataNotFound />
        ) : (
          <div className="bg-muted container-lg border border-1 rounded ">
            <div className="m-3">
              <p className="fs-3 my-4 fw-bold">User List</p>

              <div>
                {userList.map((el) => {
                  return <UserList key={el.id} id={el.id} name={el.name} email={el.email} gender={el.gender} status={el.status} />;
                })}
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <nav aria-label="Page navigation example">
                <ul className="pagination">
                  <li className={`page-item ${currentPage === 1 && "disabled"}`}>
                    <a className="page-link" href="#" onClick={() => handlePageChange(currentPage - 1)}>
                      Previous
                    </a>
                  </li>
                  {[...Array(userList.length).keys()].map((page) => (
                    <li key={page + 1} className={`page-item ${currentPage === page + 1 && "active"}`}>
                      <a className="page-link" href="#" onClick={() => handlePageChange(page + 1)}>
                        {page + 1}
                      </a>
                    </li>
                  ))}
                  <li className={`page-item ${currentPage === userList.length && "disabled"}`}>
                    <a className="page-link" href="#" onClick={() => handlePageChange(currentPage + 1)}>
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
