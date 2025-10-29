import React from 'react';

function RightSection({ imageUrl, productName, productDescription, learnMore }) {
  return (
    <div className="container ">
      <div className="row align-items-center">
        
        <div className="col-md-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div className="mt-3">
            <a href={learnMore} style={{ textDecoration: "none" }}>
              Learn More <i className="fa fa-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>

        
        <div className="col-md-6">
          <img src={imageUrl} alt={productName} className="img-fluid" />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
