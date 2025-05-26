import "./Impact.css";
import bgImage from "../assets/impact-bg.png";
import icon1 from "../assets/impact-icon1.png";
import icon2 from "../assets/impact-icon2.png";
import icon3 from "../assets/impact-icon3.png";

const Impact = () => {
  return (
    <div className="impact-wrapper">
      <img src={bgImage} alt="Impact Background" className="impact-bg" />

      <div className="impact-content">
        <h2>MAKING WAVES FOR A BETTER PLANET</h2>
        <div className="impact-icons">
          <div className="impact-item">
            <img src={icon1} alt="Oceanplast" />
            <p>100% RPET<br />OCEANPLAST® BOTTLES</p>
          </div>
          <div className="impact-item">
            <img src={icon2} alt="Certified B" />
            <p>CERTIFIED B<br />CORPORATION</p>
          </div>
          <div className="impact-item">
            <img src={icon3} alt="Kokua Initiative" />
            <p>DONATING TO COMMUNITY PROJECTS<br />THROUGH OUR KŌKUA INITIATIVE</p>
          </div>
        </div>
        <button className="impact-btn">LEARN ABOUT OUR IMPACT</button>
      </div>
    </div>
  );
};

export default Impact;
