import React from "react";

function Pricing() {
  return (
    <div className="container my-5">
      <div className="row align-items-center text-center text-md-start">
        {/* Left Section */}
        <div className="col-12 col-md-5 mb-4 mb-md-0">
          <h1 className="fw-semibold mb-3">Unbeatable pricing</h1>
          <p className="text-muted mb-3">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a
            href="/Pricing"
            style={{
              textDecoration: "none",
              color: "rgb(56,126,209)",
              fontWeight: "500",
            }}
          >
            See Pricing <i className="fa fa-arrow-right" aria-hidden="true"></i>
          </a>
        </div>

        {/* Spacer (hidden on mobile) */}
        <div className="d-none d-md-block col-md-1"></div>

        {/* Right Section (Cards) */}
        <div className="col-12 col-md-6">
          <div className="row text-center g-3">
            <div className="col-12 col-sm-6">
              <div className="p-4 border rounded-4 shadow-sm h-100">
                <h1 className="fs-2 mb-3 text-primary">₹0</h1>
                <p className="mb-0 text-muted">
                  Free equity delivery and <br /> direct mutual funds
                </p>
              </div>
            </div>

            <div className="col-12 col-sm-6">
              <div className="p-4 border rounded-4 shadow-sm h-100">
                <h1 className="fs-2 mb-3 text-primary">₹20</h1>
                <p className="mb-0 text-muted">Intraday and F&O</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
