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
          elements: {
            point: {
              radius: 0
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
              ticks: {
                padding: 10
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
              },
              ticks: {
                padding: 10
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