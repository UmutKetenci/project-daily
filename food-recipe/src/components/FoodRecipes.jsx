import React from "react";
import Recipe from "./Recipe";
import "./FoodRecipes.css";

const FoodRecipes = ({ data }) => {
  return (
    <section className="recipe-container">
      {data ? (
        data.map((food, index) => {
          const { calories, label, image, url } = food.recipe;
          return (
            <Recipe
              key={index}
              calories={calories}
              label={label}
              image={image}
              url={url}
            />
          );
        })
      ) : (
        <div style={{ textAlign: "center" }}>loading</div>
      )}
    </section>
  );
};

export default FoodRecipes;
