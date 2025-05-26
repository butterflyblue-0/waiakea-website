import React from "react";
import productData from "./productData";
import "./ProductGrid.css";

const ProductGrid = ({ category }) => {
  const products = productData.filter((item) => item.category === category);

  return (
    <div className="product-grid">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img
            src={product.image}
            alt={product.title}
            className="product-image"
            width={394}
            height={394}
          />
          <div className="product-info">
            <h3 className="product-title">{product.title}</h3>
            <p className="product-rating">★ {product.rating}</p>
            <p className="product-price">Starting at {product.price}</p>
          </div>
          <button className="add-to-cart-shop">ADD TO CART</button>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
