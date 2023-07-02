import { Bar } from "react-chartjs-2";

export const BarChart = ({ chartData, title, width, height }) => {
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>{title}</h2>
      <Bar
        data={chartData}
        width={width? width : '200'}
        height={height? height : '300'}
        options={{
          plugins: {
            title: {
              display: false
            },
            legend: {
              display: false
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