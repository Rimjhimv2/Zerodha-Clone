import React from 'react';
import { useNavigate } from "react-router-dom";

function OpenAccount() {
  const navigate = useNavigate();

  return (
    <div className="container py-5 mb-5">
      <div className="row text-center justify-content-center">
        <div className="col-12 col-md-8">
          <h1 className="mt-4 fw-semibold">Open a Zerodha account</h1>
          <p className="text-muted mb-4">
            Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
          </p>

          <button
            className="btn btn-primary fs-5 py-3 px-5"
            style={{
              backgroundColor: "rgb(56,126,209)",
              color: "white",
              border: "none",
              borderRadius: "8px",
              width: "100%",
              maxWidth: "250px",
            }}
            onClick={() => navigate("/signup")}
          >
            Sign up now
          </button>
        </div>
      </div>
    </div>
  );
}

export default OpenAccount;
