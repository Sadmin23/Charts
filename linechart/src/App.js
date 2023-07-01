import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import LineChart from "./LineChart";
import { lines } from './Data'

Chart.register(CategoryScale);

const labels = lines[0].data.map((data)=>data.name)

const datasets = lines.map(value => { return {
  label: value.title,
  data: value.data.map(x=>x.val),
  borderColor: value.color
}})

export default function App() {

  const chartData = {
    labels,
    datasets
  };
 
  console.log(chartData);

  return (
    <div className="App" style={{width: '100%'}}>
      <LineChart chartData={chartData} />
    </div>
  );
}