import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import LineChart from "./LineChart";
import { lines } from './Data'

Chart.register(CategoryScale);

const labels = ['06/01', '06/02', '06/03', '06/04', '06/05', '06/06']


const datasets = lines.map(value => { return {
  label: value.title,
  data: value.data.map(x=>x.val).reverse(),
  borderColor: value.color
}})
export default function App() {

  const chartData = {
    labels,
    datasets
  };
 
  console.log(chartData);

  return (
    <div className="App" style={{  width: '800px', justifyContent: 'center'}}>
      <LineChart chartData={chartData} />
    </div>
  );
}