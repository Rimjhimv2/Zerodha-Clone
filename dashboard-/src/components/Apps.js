import React from "react";

const Apps = () => {
  const appList = [
    {
      id: 1,
      title: "Kite",
      name: "Kite",
      description:
        "A sleek and powerful trading platform to buy, sell, and analyze stocks in real-time.",
      button: "Explore",
      link: "https://kite.zerodha.com/",
    },
    {
      id: 2,
      title: "Console",
      name: "Console",
      description:
        "Your central dashboard for portfolio insights, reports, and trade analytics.",
      button: "Explore",
      link: "https://console.zerodha.com/",
    },
    {
      id: 3,
      title: "Varsity",
      name: "Varsity",
      description:
        "Comprehensive educational modules to learn stock markets and investing strategies.",
      button: "Explore",
      link: "https://zerodha.com/varsity/",
    },
  ];

  return (
    <div className="apps-container">
      <h3 className="apps-heading fw-light">Connected Apps</h3>
      <p className="apps-subheading">
        Manage and explore all your connected trading or analytics apps in one
        place.
      </p>

      <div className="apps-list">
        {appList.map((app) => (
          <div className="app-item" key={app.id}>
            <div className="app-left">
              <div className="app-details">
                <h4 className="app-title">{app.title}</h4>
                <p className="app-description">{app.description}</p>
              </div>
            </div>
            <button
              className="app-btn"
              onClick={() => window.open(app.link, "_blank")}
            >
              {app.button}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Apps;


