import React from "react";
import { useNavigate } from "react-router-dom";
import "./Universe.css"; // 👈 add this CSS file

const Universe = () => {
  const navigate = useNavigate();

  return (
    <div className="container mt-5 text-center">
      <h1 className="mt-5 fs-3 p-3">The Zerodha Universe</h1>
      <p className="text-muted small text-center mt-5 mb-5">
        Extend your trading and investment experience even further with our
        partner platforms
      </p>

      <div className="row mt-4 universe-row">
        <div className="col-md-4 col-4 p-3 mt-5">
          <img
            src="media/images/zerodhaFundhouse.png"
            alt="ZerodhaFundhouse"
            className="universe-img"
          />
          <p className="text-muted small mt-4">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>

        <div className="col-md-4 col-4 p-3 mt-5">
          <img
            src="media/images/sensibullLogo.svg"
            alt="Sensibull"
            className="universe-img"
          />
          <p className="text-muted small mt-4">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>

        <div className="col-md-4 col-4 p-3 mt-5">
          <img
            src="media/images/tijori.svg"
            alt="Tijori"
            className="universe-img"
          />
          <p className="text-muted small mt-4">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>

        <div className="col-md-4 col-4 p-3 mt-5">
          <img
            src="media/images/streakLogo.png"
            alt="streakLogo"
            className="universe-img"
          />
          <p className="text-muted small mt-4">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>

        <div className="col-md-4 col-4 p-3 mt-5">
          <img
            src="media/images/smallcaseLogo.png"
            alt="smallcaseLogo"
            className="universe-img"
          />
          <p className="text-muted small mt-4">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>

        <div className="col-md-4 col-4 p-3 mt-5">
          <img
            src="media/images/ditto-logo.png"
            alt="ditto"
            className="universe-img-small"
          />
          <p className="text-muted small mt-4">
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>

        <div className="text-center">
          <button
            className="p-3 btn btn-primary fs-5 mb-5 signup-btn"
            onClick={() => navigate("/signup")}
          >
            Signup Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Universe;
