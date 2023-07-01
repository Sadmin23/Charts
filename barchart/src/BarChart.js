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
            }
          },
          scales: {
            x: {
              grid: {
                display: false
              },
              ticks: {
                  maxRotation: 90,
                  minRotation: 90
              }
            },
            y: {
              grid: {
                display: false
              }
            }
          }
        }}
      />
    </div>
  );
};