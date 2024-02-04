import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getPostById } from "../store/Actions/actionPost";
import { useDispatch, useSelector } from "react-redux";

export default function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostById(id));
  }, [id]);

  const { detailPost } = useSelector((state) => state.post);

  return (
    <div>
      <div className="bg-white my-5">
        <h3 className="fw-bold mb-3 container">Detail Post</h3>

        <div className="bg-muted container-lg border border-1 rounded ">
          <div className="my-4 container">
            <p className="fs-4 fw-bold">{detailPost.title}</p>
            <div className="border-bottom border-primary my-2"></div>
            <div className="mt-5">
              <div className="row align-items-start">
                <div className="col-6">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVTmbh7dPgDLsJuUn-2ckKRLIsRw1EMHHPGhmEEPLREGjvRyJKSxL-xlBvZmWZnIyV73Q&usqp=CAU"
                    className="card-img-top img-fluid"
                    alt="product"
                    style={{ width: "50%", height: "auto" }}
                  />
                </div>
                <div className="col-6 d-flex align-self-center">
                  <div className="" style={{ width: "25rem" }}>
                    <div className="card-body">
                      <p className="fs-6" style={{ textAlign: "justify" }}>
                        {detailPost.body}
                      </p>
                    </div>
                    <div className="d-grid gap-5 mt-5">
                      <button type="button" style={{ backgroundColor: "#9b59b6" }} className="btn text-white btn-lg  gap-2 fw-semibold">
                        Add to Favorite
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
