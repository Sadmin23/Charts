import { scales } from "chart.js";
import React from "react";
import { Line } from "react-chartjs-2";

export default function LineChart({ chartData }) {
  return (
    <div className="chart-container">
      <Line
        data={chartData}
        options={{
          plugins: {
            title: {
              display: false,
              text: "Users Gained between 2016-2020"
            },
            legend: {
              display: true
            }
          },
          scales: {
            y: {
              position: 'right',
              beginAtZero: true,
              min: 0,
              max: 6000,
              display: false
            }
          }
        }}
      />
    </div>
  );
}