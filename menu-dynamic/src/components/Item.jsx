import React from "react";

const Item = ({ img, title, desc, price, category }) => {
  return (
    <article className="item">
      <div className="img-container">{img}</div>
      <div className="item-content">
        <h5 className="title">{title}</h5>
        <p className="desc">{desc}</p>
        <h2>{category}</h2>
        <p className="price">{price} ₺</p>
      </div>
    </article>
  );
};

export default Item;
