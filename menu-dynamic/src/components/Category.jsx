import React from "react";
import data from "../assets/data";

const Category = ({ filterItems }) => {
  const allCategories = ["all", ...new Set(data.map((item) => item.category))];
  console.log(allCategories);
  return (
    <div>
      {allCategories.map((category) => (
        <button onClick={() => filterItems(category)}>{category}</button>
      ))}
    </div>
  );
};

export default Category;
