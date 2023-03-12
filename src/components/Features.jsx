import React from "react";

import Feature1 from "../assets/Icon.png";
import Feature2 from "../assets/Icon-1.png";
import Feature3 from "../assets/Icon-2.png";

const Features = () => {
  return (
    <div>
      <h1>Features</h1>
      <div>
        <div>
          <img src={Feature1} alt="Feature 1 icon" />
          <h2>Simple Accounting</h2>
        </div>
        <p>Manage expenses, and generate detailed reports with a few clicks.</p>
      </div>
      <div>
        <div>
          <img src={Feature2} alt="Feature 2 icon" />
          <h2>Powerful Features</h2>
        </div>
        <p>Financial Tracking, Expense Management and Ai Automation</p>
      </div>
      <div>
        <div>
          <img src={Feature3} alt="Feature 3 icon" />
          <h2>Expert AI Analytics</h2>
        </div>
        <p>Ability to streamline finances and gain valuable insights.</p>
      </div>
    </div>
  );
};

export default Features;
