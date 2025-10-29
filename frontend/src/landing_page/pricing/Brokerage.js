import React from "react";

function Brokerage() {
  return (
    <div className="container my-5">
      {/* Heading */}
      <div className="row">
        <div className="col-12">
          <h2 className="p-3 p-md-5 text-center text-md-start text-muted">
            Charges explained
          </h2>
        </div>
      </div>

      {/* Two-column layout */}
      <div className="row">
        {/* LEFT COLUMN */}
        <div className="col-12 col-md-6 p-3 p-md-5">
          <h5 className="fw-semibold mb-2">
            Securities/Commodities transaction tax
          </h5>
          <p className="text-muted small">
            Tax by the government when transacting on the exchanges. Charged as
            above on both buy and sell sides when trading equity delivery.
            Charged only on selling side when trading intraday or on F&O.
          </p>
          <p className="text-muted small">
            When trading at Zerodha, STT/CTT can be a lot more than the
            brokerage we charge. Important to keep a tab.
          </p>

          <h5 className="fw-semibold mb-2">Transaction/Turnover Charges</h5>
          <p className="text-muted small">
            Charged by exchanges (NSE, BSE, MCX) on the value of your
            transactions.
          </p>
          <p className="text-muted small">
            BSE has revised transaction charges in XC, XD, XT, Z and ZP groups
            to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been
            merged into a new group X w.e.f 01.12.2017)
          </p>
          <p className="text-muted small">
            BSE has revised transaction charges in SS and ST groups to ₹1,00,000
            per crore of gross turnover.
          </p>
          <p className="text-muted small">
            BSE has revised transaction charges for group A, B and other
            non-exclusive scrips (non-exclusive scrips from group E, F, FC, G,
            GC, W, T) at ₹375 per crore of turnover on flat rate basis w.e.f.
            December 1, 2022.
          </p>
          <p className="text-muted small">
            BSE has revised transaction charges in M, MT, TS and MS groups to
            ₹275 per crore of gross turnover.
          </p>

          <h5 className="fw-semibold mb-2">Call & trade</h5>
          <p className="text-muted small">
            Additional charges of ₹50 per order for orders placed through a
            dealer at Zerodha including auto square off orders.
          </p>

          <h5 className="fw-semibold mb-2">Stamp charges</h5>
          <p className="text-muted small">
            Stamp charges by the Government of India as per the Indian Stamp Act
            of 1899 for transacting in instruments on the stock exchanges and
            depositories.
          </p>

          <h5 className="fw-semibold mb-2">NRI brokerage charges</h5>
          <ul className="text-muted small">
            <li>
              For a non-PIS account, 0.5% or ₹50 per executed order for equity
              and F&O (whichever is lower).
            </li>
            <li>
              For a PIS account, 0.5% or ₹200 per executed order for equity
              (whichever is lower).
            </li>
            <li>
              ₹500 + GST as yearly account maintenance charges (AMC) charges.
            </li>
          </ul>

          <h5 className="fw-semibold mb-2">Account with Balance</h5>
          <p className="text-muted small">
            If the account is in debit balance, any order placed will be charged
            ₹40 per executed order instead of ₹20.
          </p>

          <h5 className="fw-semibold mb-2">
            Charges for Investor’s Protection Fund Trust (IPFT) by NSE
          </h5>
          <ul className="text-muted small">
            <li>Equity and Futures - ₹10 per crore + GST.</li>
            <li>Options - ₹50 per crore + GST (premium value).</li>
            <li>
              Currency - ₹0.05 per lakh + GST for Futures and ₹2 per lakh + GST
              for Options.
            </li>
          </ul>

          <h5 className="fw-semibold mb-2">Margin Trading Facility (MTF)</h5>
          <ul className="text-muted small">
            <li>
              MTF Interest: 0.04% per day (₹40 per lakh) on the funded amount.
            </li>
            <li>
              MTF Brokerage: 0.3% or ₹20/executed order, whichever is lower.
            </li>
            <li>
              MTF pledge charge: ₹15 + GST per pledge/unpledge request per ISIN.
            </li>
          </ul>
        </div>

        {/* RIGHT COLUMN */}
        <div className="col-12 col-md-6 p-3 p-md-5">
          <h5 className="fw-semibold mb-2">GST</h5>
          <p className="text-muted small">
            Tax levied by the government on services rendered — 18% of
            (brokerage + SEBI + transaction charges).
          </p>

          <h5 className="fw-semibold mb-2">SEBI Charges</h5>
          <p className="text-muted small">
            ₹10 per crore + GST charged by SEBI for market regulation.
          </p>

          <h5 className="fw-semibold mb-2">DP (Depository participant) charges</h5>
          <p className="text-muted small">
            ₹15.34 per scrip charged on sell transactions (₹3.5 CDSL fee + ₹9.5
            Zerodha fee + ₹2.34 GST).
          </p>

          <h5 className="fw-semibold mb-2">Pledging charges</h5>
          <p className="text-muted small">₹30 + GST per pledge request per ISIN.</p>

          <h5 className="fw-semibold mb-2">AMC (Account maintenance charges)</h5>
          <p className="text-muted small">
            BSDA: Free if holding value  ₹4,00,000. Non-BSDA: ₹300/year + GST
            charged quarterly.
          </p>

          <h5 className="fw-semibold mb-2">Corporate action order charges</h5>
          <p className="text-muted small">
            ₹20 + GST per OFS / buyback / takeover / delisting order.
          </p>

          <h5 className="fw-semibold mb-2">Off-market transfer charges</h5>
          <p className="text-muted small">₹25 per transaction.</p>

          <h5 className="fw-semibold mb-2">Physical CMR request</h5>
          <p className="text-muted small">
            First CMR free. ₹20 + ₹100 courier + GST for subsequent requests.
          </p>

          <h5 className="fw-semibold mb-2">Payment gateway charges</h5>
          <p className="text-muted small">
            ₹9 + GST (Not levied on transfers done via UPI).
          </p>

          <h5 className="fw-semibold mb-2">Delayed Payment Charges</h5>
          <p className="text-muted small">
            Interest at 18% p.a. (0.05% per day) on debit balances.
          </p>

          <h5 className="fw-semibold mb-2">
            Trading using 3-in-1 account with block functionality
          </h5>
          <ul className="text-muted small">
            <li>Delivery & MTF Brokerage: 0.5% per executed order.</li>
            <li>Intraday Brokerage: 0.05% per executed order.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;

