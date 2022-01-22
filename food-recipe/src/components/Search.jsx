import React, { useState } from "react";
import "./Search.css";
const Search = ({ getRecipes, text, setText, data, setOption }) => {
  const [fare, setFare] = useState("");
  return (
    <>
      <div className="search-container">
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            getRecipes();
          }}
        >
          <input
            type="text"
            className="input-txt"
            value={text}
            placeholder="Type in the ingredient"
            //autoComplete = "Off"
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
          <select
            onClick={(e) => {
              setOption(e.target.value);
            }}
            name=""
            className="search-options"
            id=""
          >
            <option value="">All</option>
            <option value="vegan">vegan</option>
            <option value="wheat-free">wheat-free</option>
          </select>
          <button className="search-btn">GET RECIPE</button>
        </form>
      </div>
    </>
  );
};

export default Search;
