import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import LineChart from "./LineChart";

Chart.register(CategoryScale);

const labels = ['06/01', '06/02', '06/03', '06/04', '06/05', '06/06']

const datasets = [
  {
    label: 'Top-list',
    data: [4200, 3300, 3000, 2800, 3000, 3500],
    borderColor: '#22C55E'
  },
  {
    label: 'Personalized',
    data: [{
      x: '06/01',
      y: 3200
    }, {
      x: '06/02',
      y: 2800
    }, {
      x: '06/03',
      y: 1500
    }, {
      x: '06/04',
      y: 2500
    }],
    borderColor: '#8B5CF6'
  },
  {
    label: 'Random',
    data: [{
      x: '06/02',
      y: 3200
    }, {
      x: '06/03',
      y: 2600
    }, {
      x: '06/04',
      y: 1700
    }, {
      x: '06/05',
      y: 2500
    }],
    borderColor: '#b2beb5'
  }
]

export default function App() {

  const chartData = {
    labels,
    datasets
  };
 
  console.log(chartData);

  return (
    <div className="flex justify-center">
      <div className="w-1/2">
        <LineChart chartData={chartData} />
      </div>
    </div>
  );
}