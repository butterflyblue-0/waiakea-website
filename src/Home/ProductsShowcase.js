
import "./ProductsShowcase.css";
import waterImg from "../assets/water-showcase.png";
import coffeeImg from "../assets/coffee-showcase.png";

const ProductsShowcase = () => {
  return (
    <div className="products-section">
      <h2>PURE REFRESHMENT, ELEVATED TASTE</h2>
      <div className="product-images">
        <img src={waterImg} alt="Hawaiian Volcanic Water" />
        <img src={coffeeImg} alt="Hawaiian Volcanic Coffee" />
      </div>
    </div>
  );
};

export default ProductsShowcase;
