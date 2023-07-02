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
            },
            legend: {
              display: true
            }
          },
          scales: {
            y: {
              position: 'right',
              beginAtZero: true,
              display: true,
              grid : {
                display: false
              },
              max: 5000
            },
            y1: {
              position: 'left',
              grid: {
                display: false
              },
              ticks: {
                display: false
              }
            },
            x: {
              position: 'bottom',
              reverse: true,
              grid : {
                display: false
              }              
            },
            x1: {
              position: 'top',
              grid: {
                display: false
              },
              ticks: {
                display: false
              }              
            }
          }
        }}
      />
    </div>
  );
}