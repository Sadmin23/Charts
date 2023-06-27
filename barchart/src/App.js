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
          // you can set indiviual colors for each bar
          backgroundColor: chartdata.data.map(data=>data.color),
          borderColor: "black",
        }
    ]
  };
 
  return (
      <div>
        <h1>First Run</h1>
        <div className="App" style={{ display: 'flex', width: '100%' , justifyContent: 'center'}}>
          <div style={{ flex: 1 }}>
            <BarChart chartData={userData} title="Recall@10" />
          </div>
          <div style={{ flex: 1 }}>
            <BarChart chartData={userData} title="Precision@10" />
          </div>
          <div style={{ flex: 1 }}>
            <BarChart chartData={userData} title="NDCG@10" />
          </div>
        </div>
      </div>
  );
 }