import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const ThirdPage = ({ data }) => {
  useEffect(() => {
    if (!data) {
      return;
    }
    const newData = data?.data;
    console.log(data, "********");
  }, []);
  return (
    <>
      <BarChart
        width={700}
        height={400}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis dataKey="name" scale="point"></XAxis>
        <YAxis></YAxis>

        <Tooltip />
        <Legend></Legend>
        <Bar dataKey={""} />
      </BarChart>
    </>
  );
};

export default ThirdPage;
