import React from "react";
import ShopImage from "./ShopImage";
import ProductGrid from "./ProductGrid";
import FilterBy from "./FilterBy";

const Shop = ({ category }) => {
  return (
    <div>
      <ShopImage category={category} />
       <FilterBy/>
      <ProductGrid category={category} />
    </div>
  );
};

export default Shop;
