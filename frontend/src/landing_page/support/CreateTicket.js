import React from "react";
import "./CreateTicket.css"; // 👈 Add this file for styling

function CreateTicket() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5 text-center">
        <h2 className="fs-2 p-5 text-muted">
          To create a ticket, select a relevant topic
        </h2>
      </div>

      <div className="row create-ticket-row">
        {/* Account Opening */}
        <div className="col-md-4 col-4 p-4 ticket-box">
          <h4 className="fs-5 mb-3">
            <i className="fa fa-plus-circle" aria-hidden="true"></i> Account Opening
          </h4>
          <a href="#">Resident Individual</a><br />
          <a href="#">Minor</a><br />
          <a href="#">Non Resident Indian (NRI)</a><br />
          <a href="#">Company, Partnership, HUF and LLP</a>
        </div>

        {/* Your Zerodha Account */}
        <div className="col-md-4 col-4 p-4 ticket-box">
          <h4 className="fs-5 mb-3">
            <i className="fa fa-user" aria-hidden="true"></i> Your Zerodha Account
          </h4>
          <a href="#">Your Profile</a><br />
          <a href="#">Account modification</a><br />
          <a href="#">Client master report (CMR) and DP</a><br />
          <a href="#">Nomination</a>
        </div>

        {/* Kite */}
        <div className="col-md-4 col-4 p-4 ticket-box">
          <h4 className="fs-5 mb-3">
            <i className="fa fa-paper-plane" aria-hidden="true"></i> Kite
          </h4>
          <a href="#">IPO</a><br />
          <a href="#">Trading FAQs</a><br />
          <a href="#">Charts and orders</a><br />
          <a href="#">Alerts and Nudges</a>
        </div>

        {/* Funds */}
        <div className="col-md-4 col-4 p-4 ticket-box">
          <h4 className="fs-5 mb-3">
            <i className="fa fa-credit-card-alt" aria-hidden="true"></i> Funds
          </h4>
          <a href="#">Add Money</a><br />
          <a href="#">Withdraw money</a><br />
          <a href="#">Add bank account</a><br />
          <a href="#">eMandates</a>
        </div>

        {/* Console */}
        <div className="col-md-4 col-4 p-4 ticket-box">
          <h4 className="fs-5 mb-3">
            <i className="fa fa-search" aria-hidden="true"></i> Console
          </h4>
          <a href="#">Portfolio</a><br />
          <a href="#">Corporate actions</a><br />
          <a href="#">Funds statement</a><br />
          <a href="#">Segments</a>
        </div>

        {/* Coin */}
        <div className="col-md-4 col-4 p-4 ticket-box">
          <h4 className="fs-5 mb-3">
            <i className="fa fa-circle" aria-hidden="true"></i> Coin
          </h4>
          <a href="#">Mutual Funds</a><br />
          <a href="#">Fixed Deposit</a><br />
          <a href="#">Features on Coin</a><br />
          <a href="#">Payments and others</a>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
