// import "./Navbar.css";
// import logo from "../assets/waikea-logo.svg"; // Replace with actual logo image path
// import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <div className="navbar-left">
//         <img src={logo} alt="Waiakea Logo" className="logo" />
//       </div>
//       <ul className="navbar-center">
//         <li>SHOP</li>
//         <li>SUSTAINABILITY</li>
//         <li>VOLCANIC</li>
//         <li>COMMUNITY</li>
//       </ul>
//       <div className="navbar-right">
//         <FaSearch className="icon" />
//         <FaUser className="icon" />
//         <FaShoppingCart className="icon" />
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// import React, { useState } from "react";
// import "./Navbar.css";
// import logo from "../assets/waikea-logo.svg";
// import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";
// import waterImg from "../assets/water.jpg";      // Replace with actual image paths
// import coffeeImg from "../assets/coffee.jpg";
// import storeImg from "../assets/store.jpg";
// import merchImg from "../assets/merch.jpg";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [hoverShop, setHoverShop] = useState(false);

//   return (
//     <>
//       <nav className="navbar">
//         <div className="navbar-left">
//           <img src={logo} alt="Waiakea Logo" className="logo" />
//         </div>
//         <ul className="navbar-center">
//           <li
//             onMouseEnter={() => setHoverShop(true)}
//             onMouseLeave={() => setHoverShop(false)}
//           >
//             <Link to="/shop" className="shop-link">SHOP</Link>
//             {hoverShop && (
//               <div className="shop-dropdown" onMouseEnter={() => setHoverShop(true)} onMouseLeave={() => setHoverShop(false)}>
//                 <div className="shop-item">
//                   <img src={waterImg} alt="Water" />
//                   <span>WATER</span>
//                 </div>
//                 <div className="shop-item">
//                   <img src={coffeeImg} alt="Coffee" />
//                   <span>COFFEE</span>
//                 </div>
//                 <div className="shop-item">
//                   <img src={storeImg} alt="Shop in Store" />
//                   <span>SHOP IN STORE</span>
//                 </div>
//                 <div className="shop-item">
//                   <img src={merchImg} alt="Merch" />
//                   <span>MERCH</span>
//                 </div>
//               </div>
//             )}
//           </li>
//           <li>SUSTAINABILITY</li>
//           <li>VOLCANIC</li>
//           <li>COMMUNITY</li>
//         </ul>
//         <div className="navbar-right">
//           <FaSearch className="icon" />
//           <FaUser className="icon" />
//           <FaShoppingCart className="icon" />
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/waikea-logo.svg";
import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";
import waterImg from "../assets/water.jpg";
import coffeeImg from "../assets/coffee.jpg";
import storeImg from "../assets/store.jpg";
import merchImg from "../assets/merch.jpg";




const Navbar = () => {
  const [hoverShop, setHoverShop] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/">
          <img src={logo} alt="Waiakea Logo" className="logo" />
        </Link>
      </div>

      <ul className="navbar-center">
        <li
          onMouseEnter={() => setHoverShop(true)}
          onMouseLeave={() => setHoverShop(false)}
        >
          <Link to="/shop" className="shop-link">
            SHOP
          </Link>
          {hoverShop && (
            <div
              className="shop-dropdown"
              onMouseEnter={() => setHoverShop(true)}
              onMouseLeave={() => setHoverShop(false)}
            >
              <div className="shop-item">
                <Link to="/shop/water">
                  <img src={waterImg} alt="Water" />
                  <span>WATER</span>
                </Link>
              </div>
              <div className="shop-item">
                <Link to="/shop/coffee">
              <img src={coffeeImg} alt="Coffee" />
                <span>COFFEE</span>
                </Link>
              </div>
              <div className="shop-item">
                <Link to="/shop/store">
                  <img src={storeImg} alt="Shop in Store" />
                <span>SHOP IN STORE</span>
                </Link>
              </div>
              <div className="shop-item">
                <Link to="/shop/merch">
                 <img src={merchImg} alt="Merch" />
                <span>MERCH</span>
                </Link>
              </div>
          
            </div>
          )}
        </li>
        <li>
          <Link to="/sustainability" className="nav-link">
            SUSTAINABILITY
          </Link>
        </li>
        <li>
          <Link to="/volcanic" className="nav-link">
            VOLCANIC
          </Link>
        </li>
        <li>
          <Link to="/community" className="nav-link">
            COMMUNITY
          </Link>
        </li>
      </ul>

      <div className="navbar-right">
        <FaSearch className="icon" />
        <FaUser className="icon" />
        <FaShoppingCart className="icon" />
      </div>
    </nav>
  );
};

export default Navbar;
