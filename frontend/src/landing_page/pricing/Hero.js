import React from 'react';

function Hero() {
  return (
    <div className="container mt-5">
      {/* Header Section */}
      <div className="row text-center">
        <h1 className="fs-3 fw-semibold">Charges</h1>
        <h3 className="text-muted mt-3 fs-5">List of all charges and taxes</h3>
      </div>

      {/* Cards Section */}
      <div className="row text-center mt-5">
        {/* Card 1 */}
        <div className="col-md-4 col-12 p-4">
          <img
            src="media/images/pricingEquity.svg"
            alt="Free equity delivery"
            style={{ width: "80%" }}
            className="mb-3"
          />
          <h2 className="fs-5 fw-semibold">Free equity delivery</h2>
          <p className="text-muted mt-3">
            All equity delivery investments (NSE, BSE) are absolutely free — ₹0 brokerage.
          </p>
        </div>

        {/* Card 2 */}
        <div className="col-md-4 col-12 p-4">
          <img
            src="media/images/other-trades.svg"
            alt="Intraday and F&O trades"
            style={{ width: "80%" }}
            className="mb-3"
          />
          <h2 className="fs-5 fw-semibold">Intraday & F&O trades</h2>
          <p className="text-muted mt-3">
            Flat ₹20 or 0.03% (whichever is lower) per executed order on intraday trades across
            equity, currency, and commodity trades. Flat ₹20 on all option trades.
          </p>
        </div>

        {/* Card 3 */}
        <div className="col-md-4 col-12 p-4">
          <img
            src="media/images/pricing0.svg"
            alt="Free direct mutual funds"
            style={{ width: "80%" }}
            className="mb-3"
          />
          <h2 className="fs-5 fw-semibold">Free direct MF</h2>
          <p className="text-muted mt-3">
            All direct mutual fund investments are absolutely free — ₹0 commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
