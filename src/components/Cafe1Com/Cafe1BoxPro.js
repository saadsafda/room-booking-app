import React from "react";
import { Link } from "react-router-dom";

const Cafe1BoxPro = (props) => {
  return (
    <>
      <div className="col-xl-4 col-lg-5">
        <Link to={props.http}>
          <div className="card shadow mb-4">
            <div
              className="
            card-header
            py-3
            d-flex
            flex-row
            align-items-center
            justify-content-between
            "
            >
              <h6 className="m-0 font-weight-bold text-primary">
                {props.title}
              </h6>
            </div>
            {/* Card Body */}
            <div className="card-body">
              <div>
                <img className="w-100 " src={props.img} alt="img" />
              </div>
            </div>
          </div>
          </Link>
      </div>
    </>
  );
};

export default Cafe1BoxPro;
