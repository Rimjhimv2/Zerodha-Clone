import React from 'react';
import '../../index.css';

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5 text-center text-md-start" id="supportWrapper">
        <h3>Support Portal</h3>
        <a href="#">Track Tickets</a>
      </div>

      <div className="row p-4 m-2">
        {/* Left section */}
        <div className="col-12 col-md-6 p-4">
          <h1 className="fs-4 fs-md-3">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input
            type="text"
            placeholder="Eg. how do I activate F&O"
            className="form-control mb-3"
          />

          <div className="mt-3 d-flex flex-wrap gap-3">
            <a href="#" className="text-decoration-none text-primary">Trade account opening</a>
            <a href="#" className="text-decoration-none text-primary">Track segment activation</a>
            <a href="#" className="text-decoration-none text-primary">Intraday margins</a>
            <a href="#" className="text-decoration-none text-primary">Kite user manual</a>
          </div>
        </div>

        {/* Right section */}
        <div className="col-12 col-md-6 p-4">
          <h1 className="fs-4 fs-md-3">Featured</h1>
          <ol className="ps-3">
            <li>
              <a href="#" className="text-decoration-none text-primary">
                Current Takeovers and Delisting - January 2024
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none text-primary">
                Latest Intraday leverages - MS & CO
              </a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
