import "./Hero.css";
import productImage from "../assets/products.png"; // update filename as needed

const Hero = () => {
  return (
    <div className="hero-container">
      <video className="hero-video" autoPlay loop muted>
       <source src="https://cdn.shopify.com/videos/c/o/v/765473ff393741b0b3ef7f46ac5a4006.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="hero-content">
        <h1>LIVE ALOHA</h1>
        <h1>DRINK WAIĀKEA</h1>
        <div className="hero-buttons">
          <button className="hero-btn">SHOP NOW</button>
          <button className="hero-btn">LEARN MORE</button>
        </div>
      </div>


      <div className="hero-image">
        <img src={productImage} alt="Waiakea Products" />
      </div>
    </div>
  );
};

export default Hero;
