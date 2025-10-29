
import React, { useState } from "react";

function Team() {
    const [showNikhilBio, setShowNikhilBio] = useState(false);
    const [showKailashBio, setShowKailashBio] = useState(false);
     const [showVenuBio, setShowVenuBio] = useState(false);
     const [showHananBio, setShowHananBio] = useState(false);
     const [showSeemaBio, setShowSeemaBio] = useState(false);
     const [showKarthikBio, setShowKarthikBio] = useState(false);

    

  return (
    <div className="container my-5">
      <div className="text-center mb-5">
        <h1 className="fs-2 text-muted">People</h1>
      </div>

      <div
        className="row align-items-center text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.1em" }}
      >
        {/* Image section */}
        <div className="col-md-5 text-center mb-4 mb-md-0">
          <img
            src="/media/images/nithin-kamath.jpg"
            alt="Nithin Kamath - CEO of Zerodha"
            style={{
              borderRadius: "50%",
              width: "65%",
              maxWidth: "250px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
          />
          <h4 className="mt-4 mb-1">Nithin Kamath</h4>
          <h6 className="text-secondary">Founder & CEO</h6>
        </div>

        {/* Text section */}
        <div className="col-md-7">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade-long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on{" "}
            <a href="/" className="text-decoration-none text-primary">
              Homepage
            </a>{" "}
            /{" "}
            <a href="/" className="text-decoration-none text-primary">
              TradingQnA
            </a>{" "}
            /{" "}
            <a href="/" className="text-decoration-none text-primary">
              Twitter
            </a>
          </p>
        </div>
      </div>

      {/* Row of 3 team members */}
      <div className="row text-center mt-5 text-muted">
        {/* Member 1 */}
        <div className="col-md-4 mb-5">
          <img
            src="/media/images/Nikhil.jpg"
            alt="Nikhil Kamath"
            style={{
              borderRadius: "50%",
              width: "70%",
              maxWidth: "200px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
          />
          <h5 className="mt-3 mb-1">Nikhil Kamath</h5>
          <h6 className="text-secondary">Co-founder & CFO</h6>
          {/* Likes toggle section */}
          
          <p
            onClick={() => setShowNikhilBio(!showNikhilBio)}
            style={{
              cursor: "pointer",
            //   color: "#007bff",
              userSelect: "none",
              fontWeight: "500",
            }}
          >
            Bio{" "}
            <span style={{ fontSize: "1.2em" }}>
              {showNikhilBio ? "▾" : "▴"}
            </span>
          </p>
          {showNikhilBio && (
            <p style={{ fontSize: "0.9em" }}>
              Nikhil is an astute and experienced investor, heading financial
              planning at Zerodha. An avid reader, he always appreciates a good
              game of chess.
            </p>
          )}
        </div>

        {/* Member 2 */}
        <div className="col-md-4 mb-5">
          <img
            src="/media/images/Austin.jpg"
            alt="Dr. Kailash Nadh"
            style={{
              borderRadius: "50%",
              width: "70%",
              maxWidth: "200px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
          />
          <h5 className="mt-3 mb-1">Dr. Kailash Nadh</h5>
          <h6 className="text-secondary">CTO</h6>
           <p
            onClick={() => setShowKailashBio(!showKailashBio)}
            style={{
              cursor: "pointer",
            //   color: "#007bff",
              userSelect: "none",
              fontWeight: "500",
            }}
          >
            Bio{" "}
            <span style={{ fontSize: "1.2em" }}>
              {showKailashBio ? "▾" : "▴"}
            </span>
          </p>
          {showKailashBio && (
            <p style={{ fontSize: "0.9em" }}>
              Kailash has a PhD in Artificial Intelligence & Computational Linguistics, and is the brain behind all our technology and products. He has been a developer from his adolescence and continues to write code every day.
            </p>
            )}
        </div>

        {/* Member 3 */}
        <div className="col-md-4 mb-5">
          <img
            src="/media/images/Venu.jpg"
            alt="Venu Madhav"
            style={{
              borderRadius: "50%",
              width: "70%",
              maxWidth: "200px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
          />
          <h5 className="mt-3 mb-1">Venu Madhav</h5>
          <h6 className="text-secondary">COO</h6>
                 
<p
            onClick={() => setShowVenuBio(!showVenuBio)}
            style={{
              cursor: "pointer",
            //   color: "#007bff",
              userSelect: "none",
              fontWeight: "500",
            }}
          >
            Bio{" "}
            <span style={{ fontSize: "1.2em" }}>
              {showVenuBio ? "▾" : "▴"}
            </span>
          </p>
          {showVenuBio && (
            <p style={{ fontSize: "0.9em" }}>
             Venu is the backbone of Zerodha taking care of operations and ensuring that we are compliant to rules and regulations. He has over a dozen certifications in financial markets and is also proficient in technical analysis. Workouts, cycling, and adventuring is what he does outside of Zerodha.
            </p>
            )}



        </div>





        {/* Row of 3 team members */}
      <div className="row text-center mt-5 text-muted">
        {/* Member 1 */}
        <div className="col-md-4 mb-5">
          <img
            src="/media/images/Hanan.jpg"
            alt="hanan delvi"
            style={{
              borderRadius: "50%",
              width: "70%",
              maxWidth: "200px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
          />
          <h5 className="mt-3 mb-1">Hanan Delvi</h5>
          <h6 className="text-secondary">CCO</h6>
          {/* Likes toggle section */}
          
          <p
            onClick={() => setShowHananBio(!showHananBio)}
            style={{
              cursor: "pointer",
            //   color: "#007bff",
              userSelect: "none",
              fontWeight: "500",
            }}
          >
            Bio{" "}
            <span style={{ fontSize: "1.2em" }}>
              {showHananBio ? "▾" : "▴"}
            </span>
          </p>
          {showHananBio && (
            <p style={{ fontSize: "0.9em" }}>
             We take pride in the way we support our clients, and Hanan is responsible for this with his never ending flow of energy. He is the man behind many of our support initiatives that have helped us stay ahead of the game. A free thinker, Hanan can be seen posing as one in his free time.
            </p>
          )}
        </div>

        {/* Member 2 */}
        <div className="col-md-4 mb-5">
          <img
            src="/media/images/Seema.jpg"
            alt="Seema Patil"
            style={{
              borderRadius: "50%",
              width: "70%",
              maxWidth: "200px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
          />
          <h5 className="mt-3 mb-1">Seema Patil</h5>
          <h6 className="text-secondary">Director</h6>
           <p
            onClick={() => setShowSeemaBio(!showSeemaBio)}
            style={{
              cursor: "pointer",
            //   color: "#007bff",
              userSelect: "none",
              fontWeight: "500",
            }}
          >
            Bio{" "}
            <span style={{ fontSize: "1.2em" }}>
              {showSeemaBio ? "▾" : "▴"}
            </span>
          </p>
          {showSeemaBio && (
            <p style={{ fontSize: "0.9em" }}>
              Seema who has lead the quality team since the beginning of Zerodha, is now a director. She is an extremely disciplined fitness enthusiast.
            </p>
            )}
        </div>

        {/* Member 3 */}
        <div className="col-md-4 mb-5">
          <img
            src="/media/images/karthik.jpg"
            alt="karthik"
            style={{
              borderRadius: "50%",
              width: "70%",
              maxWidth: "200px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
          />
          <h5 className="mt-3 mb-1">karthik</h5>
          <h6 className="text-secondary">COO</h6>
                 
<p
            onClick={() => setShowKarthikBio(!showKarthikBio)}
            style={{
              cursor: "pointer",
            //   color: "#007bff",
              userSelect: "none",
              fontWeight: "500",
            }}
          >
            Bio{" "}
            <span style={{ fontSize: "1.2em" }}>
              {showKarthikBio ? "▾" : "▴"}
            </span>
          </p>
          {showKarthikBio && (
            <p style={{ fontSize: "0.9em" }}>
            Karthik "Guru" Rangappa single handledly wrote Varsity, Zerodha's massive educational program. He heads investor education initiatives at Zerodha and loves stock markets, classic rock, single malts, and photography.
           
            </p>
        )}



        </div>
      </div>
</div>

    </div>
  );
}

export default Team;
