import React from "react";

function Stats() {
  return (
    <div className="container my-5">
      <div className="row align-items-center text-center text-md-start">
        {/* Left Side - Text Section */}
        <div className="col-12 col-md-6 p-3">
          <h1 className="fs-2 fw-semibold mb-4">Trust with confidence</h1>

          <div className="mb-4">
            <h2 className="fs-5 fw-semibold">Customer-first always</h2>
            <p className="text-muted mb-3">
              That’s why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh
              crores of equity investments, making us India’s largest broker;
              contributing to 15% of daily retail exchange volumes in India.
            </p>
          </div>

          <div className="mb-4">
            <h2 className="fs-5 fw-semibold">No spam or gimmicks</h2>
            <p className="text-muted mb-3">
              No gimmicks, spam, “gamification”, or annoying push notifications.
              High-quality apps that you use at your pace, the way you like.
            </p>
          </div>

          <div className="mb-4">
            <h2 className="fs-5 fw-semibold">The Zerodha universe</h2>
            <p className="text-muted mb-3">
              Not just an app, but a whole ecosystem. Our investments in 30+
              fintech startups offer you tailored services specific to your
              needs.
            </p>
          </div>

          <div>
            <h2 className="fs-5 fw-semibold">Do better with money</h2>
            <p className="text-muted mb-3">
              With initiatives like Nudge and Kill Switch, we don’t just
              facilitate transactions, but actively help you do better with your
              money.
            </p>
          </div>
        </div>

        {/* Right Side - Image and Links */}
        <div className="col-12 col-md-6 p-4">
          <img
            src="media/images/ecosystem.png"
            alt="ecosystem"
            className="img-fluid rounded-4 mb-4"
            style={{ maxWidth: "100%", height: "auto" }}
          />

          <div className="text-center">
            <a
              href="/products"
              className="mx-3 mb-3 d-inline-block"
              style={{
                textDecoration: "none",
                color: "rgb(56,126,209)",
                fontWeight: "500",
              }}
            >
              Explore our products{" "}
              <i className="fa fa-arrow-right" aria-hidden="true"></i>
            </a>

            <a
              href="/kite-demo"
              className="mx-3 d-inline-block"
              style={{
                textDecoration: "none",
                color: "rgb(56,126,209)",
                fontWeight: "500",
              }}
            >
              Try Kite demo{" "}
              <i className="fa fa-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
