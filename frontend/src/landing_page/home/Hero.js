import React from 'react';
import { useNavigate } from 'react-router-dom';

function Hero() {
  const navigate = useNavigate();

  return (
    <div className="container py-5 mb-5">
      <div className="row text-center justify-content-center align-items-center">
        <div className="col-12 col-md-10 col-lg-8">
          <img
            src="media/images/homeHero.png"
            alt="Hero Banner"
            className="img-fluid mb-5"
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />

          <h1 className="mt-4 fw-semibold">Invest in everything</h1>
          <p className="fs-5 text-muted mb-4">
            Online platform to invest in stocks, derivatives, mutual funds,
            ETFs, bonds, and more.
          </p>

          <button
            className="btn btn-primary fs-5 mb-5"
            style={{
              width: "60%",
              maxWidth: "250px",
              backgroundColor: "rgb(56,126,209)",
              color: "white",
            }}
            onClick={() => navigate("/signup")}
          >
            Signup Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;

