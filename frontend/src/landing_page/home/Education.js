import React from "react";

function Education() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row align-items-center text-center text-md-start">
        
        <div className="col-12 col-md-6 mb-4 mb-md-0 d-flex justify-content-center">
          <img
            src="media/images/education.svg"
            alt="veracity"
            className="img-fluid"
            style={{ maxWidth: "80%", height: "auto" }}
          />
        </div>

     
        <div className="col-12 col-md-6">
          <h1 className="mb-3 fs-2 fw-semibold">Free and open market education</h1>

          <p className="text-muted">
            Varsity, the largest online stock market education book in the world,
            covering everything from the basics to advanced trading.
          </p>
          <a
            href="/Varsity"
            className="d-inline-block mb-4"
            style={{ textDecoration: "none", color: "rgb(56,126,209)", fontWeight: "500" }}
          >
            Varsity <i className="fa fa-arrow-right" aria-hidden="true"></i>
          </a>

          <p className="text-muted mt-4">
            TradingQ&A, the most active trading and investment community in India
            for all your market-related queries.
          </p>
          <a
            href="/Varsity"
            style={{ textDecoration: "none", color: "rgb(56,126,209)", fontWeight: "500" }}
          >
            TradingQ&A <i className="fa fa-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
