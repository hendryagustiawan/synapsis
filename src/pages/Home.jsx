import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPostList } from "../store/Actions/actionPost";
import ListPost from "../components/ListPost";
import DataNotFound from "../components/DataNotFound";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPostList(currentPage));
  }, [currentPage]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const { postList } = useSelector((state) => state.post);

  if (postList === null || postList.length === 0) {
    return <DataNotFound />;
  }

  return (
    <div>
      <div className="bg-white my-5">
        <div className="bg-muted container-lg border border-1 rounded ">
          <div className="m-3">
            <p className="fs-3 my-4 fw-bold">Post List</p>

            <div>
              {postList?.map((el) => {
                return <ListPost key={el.id} id={el.id} title={el.title} body={el.body} />;
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
                {[...Array(postList.length).keys()].map((page) => (
                  <li key={page + 1} className={`page-item ${currentPage === page + 1 && "active"}`}>
                    <a className="page-link" href="#" onClick={() => handlePageChange(page + 1)}>
                      {page + 1}
                    </a>
                  </li>
                ))}
                <li className={`page-item ${currentPage === postList.length && "disabled"}`}>
                  <a className="page-link" href="#" onClick={() => handlePageChange(currentPage + 1)}>
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
