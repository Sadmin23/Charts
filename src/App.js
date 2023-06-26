import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import { BarChart } from "./BarChart";

Chart.register(CategoryScale);
 
export default function App() {
  const chartData = {
    labels: ['Red', 'Orange', 'Blue'],
    // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
    datasets: [
        {
          data: [55, 23, 96],
          // you can set indiviual colors for each bar
          backgroundColor: [
            "#50AF95",
            "#f3ba2f",
            "#2a71d0"
          ],
          borderColor: "black",
        }
    ]
  };
 
  return (
    <div className="App">
      <BarChart chartData={chartData} />
      <BarChart chartData={chartData} />
    </div>
  );
  }