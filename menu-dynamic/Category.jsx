import React from "react";

const Category = ({ allCategories }) => {
  {
    allCategories.map((category) => {
      return <button className="category-btn">{category}</button>;
    });
  }
};

export default Category;
