import React from "react";
import Category from "./Category";
import data from "../assets/data";

const Categories = ({ filterItems }) => {
  return <Category filterItems={filterItems}></Category>;
};

export default Categories;
