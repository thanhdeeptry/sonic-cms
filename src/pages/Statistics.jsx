import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import * as ApiClient from "../helpers/ApiClient";
import moment from "moment";
const Statistics = () => {
  const [data, setData] = useState();
  let token = localStorage.getItem("");
  const fetchData = async () => {
    const _data = await ApiClient.ApiGET("statistics", token);
    const data = _data.map((item) => {
      const newDate = moment(item.date).format("DD/MM/YYYY");

      return { ...item, date: newDate };
    });
    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, ...[]);
  return (
    <LineChart
      width={window.screen.width - 200}
      height={500}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 50,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="phoneAmount"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="laptopAmount" stroke="#82ca9d" />
      <Line type="monotone" dataKey="accessoriesAmount" stroke="#coral" />
    </LineChart>
  );
};
