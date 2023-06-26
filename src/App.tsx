import BarChart from "./BarChart.tsx"
import { UserData } from "./Data.ts"

export default function App() {

  const chartData = {
    labels: UserData.data.map((data)=>data.name),
    datasets: [{
      data: UserData.data.map((data)=>data.value)
    }]
  }

  return (
      <div>
        <BarChart userData={chartData}/>
      </div>
    )
}
