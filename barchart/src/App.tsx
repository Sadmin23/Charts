import React from "react";
import Chart, { CategoryScale } from "chart.js/auto";
import BarChart from "./BarChart";
import { chartdata } from "./Data";

Chart.register(CategoryScale);


const App = () => {
  const userData: {
    labels: string[];
    datasets: {
      data: number[];
      backgroundColor: string[];
      borderColor: string;
      barPercentage: number;
    }[];
  } = {
    labels: chartdata.data.map((data) => data.name),
    datasets: [
      {
        data: chartdata.data.map((data) => data.value),
        backgroundColor: chartdata.data.map((data) => data.color),
        borderColor: "black",
        barPercentage: 0.5,
      },
    ],
  };

  return (
    <div>
      <h1 className="text-3xl font-bold underline text-center py-10">Bar Chart</h1>
      <div className="flex justify-center">
        <div className="w-1/4">
          <BarChart chartData={userData} title="Recall@10"/>
        </div>
        <div className="w-1/4">
          <BarChart chartData={userData} title="Precision@10" />
        </div>
        <div className="w-1/4">
          <BarChart chartData={userData} title="NDCG@10" />
        </div>
      </div>
    </div>
  );
};

export default App;