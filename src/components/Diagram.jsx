import { useState } from "react";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { dataSum } from "../data/dataSum";
import { Colors } from 'chart.js';

Chart.register(Colors);

const monthlySales = dataSum.reduce((obj, order) => {
  if(!obj[order.dateMonth]) {
      obj[order.dateMonth] = order.quantitySold
  } else {
      obj[order.dateMonth] += order.quantitySold
  }

  return obj
}, {})

console.log(monthlySales)

export function Diagram() {
  console.log(dataSum)

  return <div>Barchart
    <Bar
    
    datasetIdKey='id'
    data={{
      labels: Object.keys(monthlySales),
      datasets: [
        {
          id: 1,
          label: '',
          data: Object.values(monthlySales),
        }
      ],
    }}
    ></Bar>
  </div>
}
