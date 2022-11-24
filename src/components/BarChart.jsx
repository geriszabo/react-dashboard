import {useState} from 'react'
import { Bar } from 'react-chartjs-2'
import Chart from 'chart.js/auto';

export function BarChart({products}) {
    const [data, setData] = useState(products.map(e => e["Unit price"]))

    const labels = products.map(e => e["Unit Price"] > 15 ? e["Product Name"] : "");


  return (
    <Bar
    data = {{
        labels,
        datasets: [
          {
            label: "fasz",
            data: data.filter(e => e > 15),
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          }]
        }}

        width="600px"
        height="400px"
        options={{
            responsive: true,
        }}
          >

    </Bar>
  )
}

