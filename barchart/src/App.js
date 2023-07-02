import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { BarChart } from "./BarChart";
import { chartdata } from "./Data";

Chart.register(CategoryScale);
 
export default function App() {
  const userData = {
    labels: chartdata.data.map(data=>data.name),
    // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
    datasets: [
        {
          data: chartdata.data.map(data=>data.value),
          backgroundColor: chartdata.data.map(data=>data.color),
          borderColor: "black",
          barPercentage: 0.5
        }
    ]
  };
 
  return (
      <div>
        <h1 className="pl-10">First Run</h1>
        <div className="flex justify-center">
          <div className="w-1/4">
            <BarChart chartData={userData} title="Recall@10" width={300} height={200}/>
          </div>
          <div className="w-1/4">
            <BarChart chartData={userData} title="Precision@10" />
          </div>
        </div>
      </div>
  );
 }