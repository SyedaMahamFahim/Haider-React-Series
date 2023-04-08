import React from "react";
import "./banner.css";

const Banner = () => {
  return (
    <>
      <div className="container d-flex align-items-center justify-content-center banner__div">
        <div className="row d-flex flex-column-reverse gap-5 gap-xl-0 flex-xl-row">
          <div className="col-xl-6 gap-3 d-flex flex-column justify-content-center align-items-xl-start ">
            <h1 className="fw-bold banner__h1">
              {" "}
              Incididunt sint aliquip Collection{" "}
            </h1>
            <p className="fs-5">
              {" "}
              Duis reprehenderit labore nulla mollit non consectetur quis aute
              eu amet sint.{" "}
            </p>
            <button className="banner__btn"> Join our discord </button>
            {/**/}
          </div>
          <div className="col-xl-6 flex justify-content-center ">
            <img className="banner__img" src="/images/nfts.png" alt="image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
