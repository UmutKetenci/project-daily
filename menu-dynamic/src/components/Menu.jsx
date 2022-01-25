import React from "react";
import Item from "./Item";

const Menu = ({ menuItems }) => {
  return (
    <div className="menu">
      {menuItems.map((itemData) => {
        const { id } = itemData;
        return <Item key={id} {...itemData}></Item>;
      })}
    </div>
  );
};

export default Menu;
