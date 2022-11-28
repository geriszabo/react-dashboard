import { useState } from "react";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { dataSum } from "../data/dataSum";

export function Diagram() {
  console.log(dataSum)

  return <div>Barchart
    <Bar
    datasetIdKey='id'
    data={{
      labels: ['Jun', 'Jul', 'Aug'],
      datasets: [
        {
          id: 1,
          label: '',
          data: [5, 6, 7],
        },
        {
          id: 2,
          label: '',
          data: [3, 2, 1],
        },
      ],
    }}
    ></Bar>
  </div>
}
