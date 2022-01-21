import { useState, useEffect } from "react";
import "./App.css";
import Search from "../src/components/Search";
import Widget from "../src/components/Widget";

function App() {
  const [text, setText] = useState("");
  const [click, setClick] = useState(false);
  const [data, setData] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const getWeatherData = async () => {
    if (click) {
      setIsLoaded(false);
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=73ae36c4025b4af130c44e1de213c1dc`
        );
        const result = await response.json();
        setData(result);
        setIsLoaded(true);
      } catch (e) {
        console.log(e);
      }
    }
  };
  useEffect(() => {
    getWeatherData();
    setClick(false);
    setText("");
  }, [click]);

  return (
    <>
      <main className="main">
        <div className="main-center">
          <div className="search-container">
            <Search
              text={text}
              setText={setText}
              click={click}
              setClick={setClick}
            ></Search>
          </div>
          <div className="widget-container">
            {isLoaded ? <Widget data={data}></Widget> : <div>boop</div>}
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
