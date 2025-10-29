import React from "react";

function Awards() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row align-items-center text-center text-md-start">
      
        <div className="col-12 col-md-6 mb-4 mb-md-0 d-flex justify-content-center">
          <img
            src="media/images/largestBroker.svg"
            alt="Broker"
            className="img-fluid"
            style={{ maxWidth: "80%", height: "auto" }}
          />
        </div>

        <div className="col-12 col-md-6">
          <h1 className="fw-semibold mb-3">Largest stock broker in India</h1>
          <p className="text-muted mb-4">
            2+ million Zerodha clients contribute to over 15% of all volumes in
            India daily by trading and investing in:
          </p>

          
          <div className="row text-start">
            <div className="col-6">
              <ul className="list-unstyled">
                <li>
                  <p className="mb-2">Futures and Options</p>
                </li>
                <li>
                  <p className="mb-2">Commodity derivatives</p>
                </li>
                <li>
                  <p className="mb-2">Currency derivatives</p>
                </li>
              </ul>
            </div>

            <div className="col-6">
              <ul className="list-unstyled">
                <li>
                  <p className="mb-2">Stocks & IPOs</p>
                </li>
                <li>
                  <p className="mb-2">Direct mutual funds</p>
                </li>
                <li>
                  <p className="mb-2">Bonds & Govt. securities</p>
                </li>
              </ul>
            </div>
          </div>

          
          <div className="mt-4 d-flex justify-content-center justify-content-md-start">
            <img
              src="media/images/pressLogos.png"
              alt="Press Logos"
              className="img-fluid"
              style={{ maxWidth: "90%", height: "auto" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awards;
