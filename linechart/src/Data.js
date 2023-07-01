 export const lines = [
  {
    title: "Personalized",
    color: "#8B5CF6",
    data: [
      {
        name: "06/04", //x axis value
        val: 4000, //y axis value
      },
      {
        name: "06/03",
        val: 4000,
      },
      {
        name: "06/02",
        val: 2000,
      },
      {
        name: "06/01",
        val: 2780,
      },
    ],
  },
  { 
    title: "Toplist", 
    color: "#22C55E",
    data: [
      {
        name: "06/04", //x axis value
        val: 4000, //Y axis value
      },
      {
        name: "06/03",
        val: 3000,
      },
      {
        name: "06/02",
        val: 2000,
      },
      {
        name: "06/01",
        val: 2780,
      },
    ] 
  },
];

/*
const labels = lines[0].data.map((data)=>data.name)

const datasets = lines.map(value => { return {
  label: value.title,
  data: value.data.map(x=>x.val),
  borderColor: value.color
}})

const chartData = {
  labels,
  datasets
};

datasets.map(x=>console.log(x.data))
*/