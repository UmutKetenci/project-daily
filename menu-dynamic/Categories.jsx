import React from "react";
import Category from "./Category";
import data from "../assets/data";

const Categories = () => {
  const allCategories = ["all", ...new Set(data.map((item) => item.category))];
  console.log(allCategories);
  return (
    <div className="categories">
      {data.map((item) => {
        const { id } = item;
        return <Category key={id} allCategories={allCategories}></Category>;
      })}
    </div>
  );
};

export default Categories;
