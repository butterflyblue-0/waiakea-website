import React from "react";
import "./Footer.css";
import { FaFacebookF, FaTwitter, FaTiktok, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-col">
          <h4>MAIN MENU</h4>
          <ul>
            <li>The Water</li>
            <li>Blog</li>
            <li>Videos</li>
            <li>'Ohana</li>
            <li>Store Finder</li>
            <li>Rewards</li>
            <li>Refer a Friend</li>
            <li>My Account</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>MORE INFO</h4>
          <ul>
            <li>About Us</li>
            <li>Returns and Shipping</li>
            <li>Privacy Policy</li>
            <li>Terms and Conditions</li>
            <li>Careers</li>
            <li>CCPA: Do Not Sell My Info</li>
            <li>GDPR: Do Not Sell My Info</li>
            <li>Water Quality Report</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>CONTACT</h4>
          <ul>
            <li>Email</li>
            <li>1-855-WAIAKEA</li>
            <li>Contact Us</li>
            <li>Help Desk</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>SOCIAL</h4>
          <ul className="social-icons">
            <li><FaFacebookF /> Facebook</li>
            <li><FaTwitter /> Twitter</li>
            <li><FaTiktok /> TikTok</li>
            <li><FaInstagram /> Instagram</li>
          </ul>
                    <h4>NEWSLETTER</h4>
          <input type="email" placeholder="Your email" className="newsletter-input" />
          <button className="newsletter-btn-footer">SIGN UP</button>
        </div>
      </div>

      <div className="footer-bottom">
        © 2025 Waiākea Hawaiian Volcanic Water | Proud Product of Hilo, HI
      </div>
    </footer>
  );
};

export default Footer;
