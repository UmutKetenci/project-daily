import React from "react";
import "./Recipe.css";

const Recipe = ({ label, image, calories, url }) => {
  return (
    <a href={url} target={"_blank"}>
      <article className="food">
        <div className="img-container">
          <img src={image} alt="" />
        </div>
        <h1>{label}</h1>
        <p>Calories {calories}</p>
      </article>
    </a>
  );
};

export default Recipe;
