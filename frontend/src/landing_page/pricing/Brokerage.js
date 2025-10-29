import React from "react";

function Brokerage() {
  return (
    <div className="container">
      <div className="row">
        <h2 className="p-5 text-muted">Charges explained</h2>
      </div>
      <div className="row">
        <div className="col-6 p-5">
          <h5 className="fs-5 fw-light">Securities/Commodities transaction tax</h5>
<p className="text-muted fw-light" style={{ fontSize: "0.85rem" }}>
  Tax by the government when transacting on the exchanges. Charged as above on
  both buy and sell sides when trading equity delivery. Charged only on selling
  side when trading intraday or on F&O.
</p>
<p className="text-muted fw-light" style={{ fontSize: "0.85rem" }}>
  When trading at Zerodha, STT/CTT can be a lot more than the brokerage we
  charge. Important to keep a tab.
</p>

<h5 className="fs-5 fw-light">Transaction/Turnover Charges</h5>
<p className="text-muted fw-light" style={{ fontSize: "0.85rem" }}>
  Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.
</p>
<p className="text-muted fw-light" style={{ fontSize: "0.85rem" }}>
  BSE has revised transaction charges in XC, XD, XT, Z and ZP groups to ₹10,000
  per crore w.e.f 01.01.2016. (XC and XD groups have been merged into a new
  group X w.e.f 01.12.2017)
</p>
<p className="text-muted fw-light" style={{ fontSize: "0.85rem" }}>
  BSE has revised transaction charges in SS and ST groups to ₹1,00,000 per crore
  of gross turnover.
</p>
<p className="text-muted fw-light" style={{ fontSize: "0.85rem" }}>
  BSE has revised transaction charges for group A, B and other non exclusive
  scrips (non-exclusive scrips from group E, F, FC, G, GC, W, T) at ₹375 per
  crore of turnover on flat rate basis w.e.f. December 1, 2022.
</p>
<p className="text-muted fw-light" style={{ fontSize: "0.85rem" }}>
  BSE has revised transaction charges in M, MT, TS and MS groups to ₹275 per
  crore of gross turnover.
</p>

<h5 className="fs-5 fw-light">Call & trade</h5>
<p className="text-muted fw-light" style={{ fontSize: "0.85rem" }}>
  Additional charges of ₹50 per order for orders placed through a dealer at
  Zerodha including auto square off orders
</p>

<h5 className="fs-5 fw-light">Stamp charges</h5>
<p className="text-muted fw-light" style={{ fontSize: "0.85rem" }}>
  Stamp charges by the Government of India as per the Indian Stamp Act of 1899
  for transacting in instruments on the stock exchanges and depositories.
</p>

<h5 className="fs-5 fw-light">NRI brokerage charges</h5>
<ul>
<li className="text-muted fw-light" style={{ fontSize: "0.85rem" }}>
  For a non-PIS account, 0.5% or ₹50 per executed order for equity and F&O
  (whichever is lower).
</li>
<li className="text-muted fw-light" style={{ fontSize: "0.85rem" }}>
  For a PIS account, 0.5% or ₹200 per executed order for equity (whichever is
  lower).
</li>
<li className="text-muted fw-light" style={{ fontSize: "0.85rem" }}>
  ₹500 + GST as yearly account maintenance charges (AMC) charges
</li>
</ul>

<h5 className="fs-5 fw-light">Account with Balance</h5>
<p className="text-muted fw-light" style={{ fontSize: "0.85rem" }}>
  If the account is in debit balance, any order placed will be charged ₹40 per
  executed order instead of ₹20 per executed order.
</p>

<h5 className="fs-5 fw-light">Charges for Investor's Protection Fund Trust (IPFT) by NSE</h5>
<ul>
<li className="text-muted fw-light" style={{ fontSize: "0.85rem" }}>
  Equity and Futures - ₹10 per crore + GST of the traded value.
</li>
<li className="text-muted fw-light" style={{ fontSize: "0.85rem" }}>
  Options - ₹50 per crore + GST traded value (premium value).
</li>
<li className="text-muted fw-light" style={{ fontSize: "0.85rem" }}>
  Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2 per lakh + GST
  of premium for Options.
</li>
</ul>

<h5 className="fs-5 fw-light">Margin Trading Facility (MTF)</h5>
<ul>
<li className="text-muted fw-light" style={{ fontSize: "0.85rem" }}>
  MTF Interest: 0.04% per day (₹40 per lakh) on the funded amount. The interest
  is applied from T+1 day until the day MTF stocks are sold.
</li>
<li className="text-muted fw-light" style={{ fontSize: "0.85rem" }}>
  MTF Brokerage: 0.3% or Rs. 20/executed order, whichever is lower.
</li>
<li className="text-muted fw-light" style={{ fontSize: "0.85rem" }}>
  MTF pledge charge: ₹15 + GST per pledge and unpledge request per ISIN.
</li>
</ul>
</div>
<div className="col-6 p-5">
<h5 className="fs-5 fw-light">GST</h5>
<p className="text-muted fw-light" style={{ fontSize: "0.85rem" }}>
  Tax levied by the government on the services rendered. 18% of (brokerage +
  SEBI charges + transaction charges).
</p>

<h5 className="fs-5 fw-light">SEBI Charges</h5>
<p className="text-muted fw-light" style={{ fontSize: "0.85rem" }}>
  Charged at ₹10 per crore + GST by Securities and Exchange Board of India for
  regulating the markets.
</p>

<h5 className="fs-5 fw-light">DP (Depository participant) charges</h5>
<p className="text-muted fw-light" style={{ fontSize: "0.85rem" }}>
  ₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is charged on
  the trading account ledger when stocks are sold, irrespective of quantity.
</p>
<p className="text-muted fw-light" style={{ fontSize: "0.85rem" }}>
  Female demat account holders (as first holder) will enjoy a discount of ₹0.25
  per transaction on the CDSL fee.
</p>
<p className="text-muted fw-light" style={{ fontSize: "0.85rem" }}>
  Debit transactions of mutual funds & bonds get an additional discount of ₹0.25
  on the CDSL fee.
</p>

<h5 className="fs-5 fw-light">Pledging charges</h5>
<p className="text-muted fw-light" style={{ fontSize: "0.85rem" }}>
  ₹30 + GST per pledge request per ISIN.
</p>

<h5 className="fs-5 fw-light">AMC (Account maintenance charges)</h5>
<p className="text-muted fw-light" style={{ fontSize: "0.85rem" }}>
  For BSDA demat account: Zero charges if the holding value is less than
  ₹4,00,000. To learn more about BSDA, Click here.
</p>
<p className="text-muted fw-light" style={{ fontSize: "0.85rem" }}>
  For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly (90 days).
  To learn more about AMC, Click here.
</p>

<h5 className="fs-5 fw-light">Corporate action order charges</h5>
<p className="text-muted fw-light" style={{ fontSize: "0.85rem" }}>
  ₹20 plus GST will be charged for OFS / buyback / takeover / delisting orders
  placed through Console.
</p>

<h5 className="fs-5 fw-light">Off-market transfer charges</h5>
<p className="text-muted fw-light" style={{ fontSize: "0.85rem" }}>
  ₹25 per transaction.
</p>

<h5 className="fs-5 fw-light">Physical CMR request</h5>
<p className="text-muted fw-light" style={{ fontSize: "0.85rem" }}>
  First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST for
  subsequent requests.
</p>

<h5 className="fs-5 fw-light">Payment gateway charges</h5>
<p className="text-muted fw-light" style={{ fontSize: "0.85rem" }}>
  ₹9 + GST (Not levied on transfers done via UPI).
</p>

<h5 className="fs-5 fw-light">Delayed Payment Charges</h5>
<p className="text-muted fw-light" style={{ fontSize: "0.85rem" }}>
  Interest is levied at 18% a year or 0.05% per day on the debit balance in your
  trading account. Learn more.
</p>

<h5 className="fs-5 fw-light">Trading using 3-in-1 account with block functionality</h5>
<ul>
<li className="text-muted fw-light" style={{ fontSize: "0.85rem" }}>
  Delivery & MTF Brokerage: 0.5% per executed order.
</li>
<li className="text-muted fw-light" style={{ fontSize: "0.85rem" }}>
  Intraday Brokerage: 0.05% per executed order.
</li>
</ul>
</div>
        </div>
     
    </div>
  );
}

export default Brokerage;
