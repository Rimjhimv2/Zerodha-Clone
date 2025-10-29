import React from 'react';

function Footer() {
   
  return (
   <footer style={{backgroundColor:"rgb(240,240,240)"}}> 
    <div className="container border-top mt-5"
    >
      <div className="row mt-5">
        <div className="col">
          <img src="media/images/logo.svg" alt="logo" style={{width: "50%"}}/>
        <p>&copy; 2010 - 2025, Zerodha Broking Ltd.</p>
        <p>All rights reserved.</p>
        
{/* ==== Social Icons ==== */}
            <div className="d-flex gap-4 mt-3">
              <a
                href="https://www.instagram.com/zerodhaonline/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark">
             <i class="fa fa-instagram" aria-hidden="true"></i>
             </a>
                

              <a
                href="https://x.com/zerodhaonline"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark"
              >
<i class="fa fa-twitter-square" aria-hidden="true"></i>
              </a>

              <a
                href="https://www.facebook.com/zerodha.social/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark"
              >
  <i class="fa fa-facebook-official" aria-hidden="true"></i>
              </a>
            </div>
         




        
        </div>
         <div className="col">
          <p>Company</p>
          <a href="/" className="text-decoration-none text-muted">About</a>
          <br/>
          <a href="/" className="text-decoration-none  text-muted">Philosophy</a>
          <br/>
          <a href="/" className="text-decoration-none text-muted">Press & Media</a>
          <br/>
          <a href="/" className="text-decoration-none text-muted">Careers</a>
          <br/>
        <a href="/" className="text-decoration-none text-muted" >Zerodha Cares (CSR)</a>
       <br/>
       <a href="/" className="text-decoration-none text-muted">Zerodha.tech</a>
      <br/>
      <a href="/" className="text-decoration-none text-muted">Open Source</a>
         </div>
          <div className="col">
            <p>Support</p>
         <a href="/contact" className="text-decoration-none text-muted">Contact us</a>   
         <br/>
<a href="/" className="text-decoration-none text-muted">Support Portal</a>
<br/>
  <a href="/" className="text-decoration-none text-muted">How to file a complaint?</a>
  <br/>
  <a href="/" className="text-decoration-none text-muted">Status of your complaints</a>
  <br/>
  <a href="/" className="text-decoration-none text-muted">Bulletin</a>
  <br/>
  <a href="/" className="text-decoration-none text-muted">Circular</a>
  <br/>
  <a href="/" className="text-decoration-none text-muted">Z-Connect Blog</a>
  

          </div>
           <div className="col">
            <p>Account</p>
            <div className="footer-links d-flex flex-column gap-2">
  <a href="/" className="text-decoration-none text-muted">Open Demat Account</a>
 
  <a href="/" className="text-decoration-none text-muted">Minor Demat Account</a>
 
  <a href="/" className="text-decoration-none text-muted">NRI Demat Account</a>
  
  <a href="/" className="text-decoration-none text-muted">Commodity</a>

  <a href="/" className="text-decoration-none text-muted">Dematerialisation</a>
  
  <a href="/" className="text-decoration-none text-muted">Fund Transfer</a>
  
  <a href="/" className="text-decoration-none text-muted">MTF</a>
 
  <a href="/" className="text-decoration-none text-muted">Referral Program</a>
</div>


           </div>

      </div>
      <div className="mt-5 text-muted " style={{ fontSize: "12px" }}>
      <p>Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF </p>

<p>Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>

<p>Smart Online Dispute Resolution | Grievances Redressal Mechanism</p>

<p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>

<p>Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>

<p>India's largest broker based on networth as per NSE. NSE broker factsheet</p>

<p>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.
</p>

</div>
    </div>
     
     </footer>

   
  );
}

export default Footer;