import React, { useState } from "react";
import "./FilterBy.css"; // Import the CSS file

const FilterBy = ({ onFilterChange }) => {
  const [activeFilter, setActiveFilter] = useState("all");

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    if (onFilterChange) {
      onFilterChange(filter);
    }
  };

  return (
    <div className="filter-container">
      <span className="filter-label">FILTER BY:</span>
      <button
        className={`filter-button ${activeFilter === "all" ? "active-cyan" : "inactive"}`}
        onClick={() => handleFilterClick("all")}
      >
        ALL
      </button>
      <button
        className={`filter-button ${activeFilter === "water" ? "active-blue" : "inactive"}`}
        onClick={() => handleFilterClick("water")}
      >
        WATER
      </button>
      <button
        className={`filter-button ${activeFilter === "coffee" ? "active-cyan" : "inactive"}`}
        onClick={() => handleFilterClick("coffee")}
      >
        COFFEE
      </button>
    </div>
  );
};

export default FilterBy;
