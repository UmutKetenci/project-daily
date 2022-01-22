import "./App.css";
import Search from "./components/Search";
import FoodRecipes from "./components/FoodRecipes";
import { useEffect, useState } from "react";
import Axios from "axios";

function App() {
  const [text, setText] = useState("");
  const [data, setData] = useState(null);
  const [option, setOption] = useState(null);
  const url = `https://api.edamam.com/search?q=${text}&app_id=1da59b28&app_key=dd3951660a589fd4692a7272ad18b552&from=0&to=8${
    option ? `&health=${option}` : ""
  }`;

  const getRecipes = async () => {
    const response = await Axios.get(url);
    setData(response.data.hits);
  };
  console.log(data);
  return (
    <>
      <header className="header">
        <h1>FOOD🍔 RECIPES 💖</h1>
      </header>
      <main className="main">
        <Search
          getRecipes={getRecipes}
          text={text}
          setText={setText}
          data={data}
          setOption={setOption}
          className="search-container"
        ></Search>
        <FoodRecipes data={data}></FoodRecipes>
      </main>
    </>
  );
}

export default App;
