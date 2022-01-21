import React from "react";
import "./Search.css";

const Search = ({ text, setText, setClick, click }) => {
  return (
    <div className="search">
      <div className="search-center">
        <input
          className="input-field"
          type="text"
          placeholder="Enter your location"
          required
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            setClick(true);
          }}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
