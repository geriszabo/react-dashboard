import {useState} from 'react'
import { Bar } from 'react-chartjs-2'
import Chart from 'chart.js/auto';

export function BarChart({dataSum}) {
    // const [data, setData] = useState(dataSum.map(e => e["Unit price"]))

    // const labels = dataSum.map(e => e["Unit Price"] > 15 ? e["Product Name"] : "");


  return (
    <div>BarChart</div>

    // <Bar
    // data = {{
    //     labels,
    //     datasets: [
    //       {
    //         label: "fasz",
    //         data: data.filter(e => e > 15),
    //         backgroundColor: 'rgba(255, 99, 132, 0.5)',
    //       }]
    //     }}

    //     width="600px"
    //     height="400px"
    //     options={{
    //         responsive: true,
    //     }}
    //       >

    // </Bar>
  )
}

