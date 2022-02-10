import "./App.css";
import { useEffect, useState } from "react";
import FirstPage from "./screens/FirstPage";
import SecondPage from "./screens/SecondPage";
import ThirdPage from "./screens/ThirdPage";
function App() {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await fetch("https://countries.trevorblades.com", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: `query {continents{countries{code name languages {name code} emoji} code name}}`,
        }),
      });
      const result = await response.json();
      setData(result);
      setLoading(false);
    };

    fetchData();
  }, [data]);
  return (
    <>
      {/*sadece bir defa prop drilling yapmamız gerek bu yüzden useContext vs. kullanmadım.*/}
      <FirstPage data={data}></FirstPage>
      <SecondPage data={data}></SecondPage>
      <ThirdPage data={data}></ThirdPage>
    </>
  );
}

export default App;
