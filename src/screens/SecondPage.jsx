import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";
const SecondPage = ({ data }) => {
  const [selected, setSelected] = useState("");
  const [index, setIndex] = useState(0);
  const [countries, setCountries] = useState();
  const displayChartData = {
    labels: ["Red", "Yellow", "Green", "Blue", "Purple", "Orange"],
    datasets: [{ data: [12, 19, 3, 5, 2, 3] }],
  };

  return <></>;
};

export default SecondPage;
