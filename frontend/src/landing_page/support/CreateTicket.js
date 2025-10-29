import React from 'react';

function CreateTicket() {
  return (
    <div className="container">
      <div className="row p-3 p-md-5 mt-5 mb-5">
        <h2 className="fs-2 text-muted text-center mb-5">
          To create a ticket, select a relevant topic
        </h2>

        {/* Column 1 */}
        <div className="col-12 col-md-4 p-3">
          <h4 className="fs-5">
            <i className="fa fa-plus-circle" aria-hidden="true"></i> Account Opening
          </h4>
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>Resident Individual</a><br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>Minor</a><br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>Non Resident Indian (NRI)</a><br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>Company, Partnership, HUF and LLP</a>
        </div>

        {/* Column 2 */}
        <div className="col-12 col-md-4 p-3">
          <h4 className="fs-5">
            <i className="fa fa-user" aria-hidden="true"></i> Your Zerodha Account
          </h4>
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>Your Profile</a><br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>Account modification</a><br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>Client master report (CMR) and Depository Participant (DP)</a><br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>Nomination</a>
        </div>

        {/* Column 3 */}
        <div className="col-12 col-md-4 p-3">
          <h4 className="fs-5">
            <i className="fa fa-paper-plane"></i> Kite
          </h4>
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>IPO</a><br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>Trading FAQs</a><br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>Charts and order</a><br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>Alerts and Nudges</a>
        </div>

        {/* Column 4 */}
        <div className="col-12 col-md-4 p-3">
          <h4 className="fs-5">
            <i className="fa fa-credit-card-alt" aria-hidden="true"></i> Funds
          </h4>
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>Add Money</a><br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>Withdraw money</a><br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>Add bank account</a><br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>eMandates</a>
        </div>

        {/* Column 5 */}
        <div className="col-12 col-md-4 p-3">
          <h4 className="fs-5">
            <i className="fa fa-search" aria-hidden="true"></i> Console
          </h4>
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>Portfolio</a><br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>Corporate actions</a><br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>Funds statement</a><br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>Segments</a>
        </div>

        {/* Column 6 */}
        <div className="col-12 col-md-4 p-3">
          <h4 className="fs-5">
            <i className="fa fa-circle"></i> Coin
          </h4>
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>Mutual Funds</a><br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>Fixed Deposit</a><br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>Features on Coin</a><br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>Payments and other</a>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
