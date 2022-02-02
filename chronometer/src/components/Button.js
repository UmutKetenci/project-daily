import React from "react";

const Button = ({ func, text, type }) => {
  return (
    <button className={`${type ? type : "default"}`} onClick={func}>
      {text ? text : `default`}
    </button>
  );
};

export default Button;
