import { Bar } from "react-chartjs-2";

export const BarChart = ({ chartData, title }) => {
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>{title}</h2>
      <Bar
        data={chartData}
        options={{
          plugins: {
            title: {
              display: false,
              text: ""
            },
            legend: {
              display: false,
              position: 'top'
            },
          },
          scales: {
            x: {
              grid: {
                display: false,
                drawTicks: false
              },
              ticks: {
                  maxRotation: 90,
                  minRotation: 90
              },
              border: {
                display: true
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
            },
            y: {
              position: 'left',
              grid: {
                display: false
              },
              max: 1
            },
            y1: {
              position: 'right',
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
};