import React from "react";

function LeftSection({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        {/* Image Section */}
        <div className="col-md-6 text-center">
          <img
            src={imageUrl}
            alt={productName}
            className="img-fluid p-4"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>

        {/* Text Section */}
        <div className="col-md-6 p-4 mt-4 mt-md-0">
          <h1 className="fw-semibold mb-3">{productName}</h1>
          <p className="text-muted">{productDescription}</p>

          {/* Demo & Learn Links */}
          <div className="mt-4">
            <a
              href={tryDemo}
              style={{ textDecoration: "none", marginRight: "30px" }}
            >
              Try Demo{" "}
              <i className="fa fa-arrow-right" aria-hidden="true"></i>
            </a>
            <a href={learnMore} style={{ textDecoration: "none" }}>
              Learn More{" "}
              <i className="fa fa-arrow-right" aria-hidden="true"></i>
            </a>
          </div>

          {/* App Store Buttons */}
          <div className="mt-4 d-flex align-items-center">
            <a href={googlePlay}>
              <img
                src="media/images/googlePlayBadge.svg"
                alt="Google Play"
                style={{ height: "40px" }}
              />
            </a>
            <a href={appStore} className="ms-3">
              <img
                src="media/images/appstore-badge.svg"
                alt="App Store"
                style={{ height: "40px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
