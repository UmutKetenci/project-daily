import { useState } from "react";
import "./App.css";
import data from "./assets/data";
import Categories from "./components/Categories";
import Menu from "./components/Menu";

function App() {
  const [menuItems, setMenuItems] = useState(data);
  const filterItems = (category) => {
    if (category === "all") return setMenuItems(data);
    const newMenu = data.filter((item) => item.category === category);
    setMenuItems(newMenu);
  };
  return (
    <section className="center">
      <h1>Our Menu</h1>
      <Categories filterItems={filterItems}></Categories>
      <Menu menuItems={menuItems}></Menu>
    </section>
  );
}

export default App;
