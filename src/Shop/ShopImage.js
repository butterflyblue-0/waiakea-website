
import waterImage from "../assets/water-header.jpg";
import coffeeImage from "../assets/coffee-header.jpg";
import './ShopImage.css';

const ShopImage = ({ category }) => {
  const imageMap = {
    water: waterImage,
    coffee: coffeeImage,
    // Add more as needed
  };

  const imageToUse = imageMap[category];

  return (
    <div className="shop-image-container">
      {imageToUse && (
        <img src={imageToUse} alt={`${category} header`} className="shop-image" />
      )}
    </div>
  );
};

export default ShopImage;
