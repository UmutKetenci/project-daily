import { isListType } from "graphql";
import React, { useEffect, useState } from "react";

const FirstPage = ({ data }) => {
  const [selected, setSelected] = useState("");
  const [index, setIndex] = useState(0);
  const [countries, setCountries] = useState();
  const showModal = () => {};
  useEffect(() => {
    if (!data) {
      return;
    }
    console.log(data);
    const { countries } = data?.data?.continents[index];
    console.log(countries);
    setCountries(countries);
    return;
  }, [index]);
  return (
    <>
      <select
        onChange={(e) => {
          setSelected(e.target.value);
          setIndex(e.target.options.selectedIndex);
        }}
        name=""
        id=""
        className="select-continent"
      >
        {data?.data?.continents?.map((continent, index) => {
          return (
            <option value={continent.name} key={index}>
              {continent.name}
            </option>
          );
        })}
      </select>
      <div className="countries">
        {countries
          ?.sort((a, b) => a.name.localeCompare(b.name))
          .map((country, i) => (
            <div className="country" key={i}>
              <p>{country.name}</p>
              <p>{country.emoji}</p>
              <button onClick={showModal}>info</button>
            </div>
          ))}
      </div>
    </>
  );
};

export default FirstPage;
