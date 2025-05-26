import React from "react";
import "./PremiumSection.css";
import flower1 from "../assets/flower1.png";
import flower2 from "../assets/flower2.png";
import flower3 from "../assets/flower3.png";

const PremiumSection = () => {
  return (
    <div className="premium-section">
      <h2>PREMIUM BY NATURE ®</h2>

      <div className="premium-items">
        <div className="premium-item">
          <img src={flower1} alt="Flower 1" />
          <p>Naturally alkaline volcanic water with pH of 7.6–8.2</p>
        </div>
        <div className="premium-item">
          <img src={flower2} alt="Flower 2" />
          <p>
            Responsibly sourced with sustainability and ethics at the core of
            every product
          </p>
        </div>
        <div className="premium-item">
          <img src={flower3} alt="Flower 3" />
          <p>Coffee grown in the rich volcanic soil of Hawai'i</p>
        </div>
      </div>

      <button className="premium-btn">SHOP OUR COLLECTION</button>
    </div>
  );
};

export default PremiumSection;
