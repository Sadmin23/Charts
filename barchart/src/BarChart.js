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
              display: false
            }
          }
        }}
      />
    </div>
  );
};