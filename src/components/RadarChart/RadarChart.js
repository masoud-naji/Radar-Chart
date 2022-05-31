import React from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export function RadarChart({
  rawData,
  skillPercentage,
  skillName,
  label,
  backgroundColor,
  borderColor,
  borderWidth,
  angleLines,
  grid,
  pointLabels,
  ticks,
  ShowLegend,
}) {
  console.log(ShowLegend);
  const MyData = Object.entries(rawData).map(([key, value]) => [
    value[skillName],
  ]);
  const MyLabels = Object.entries(rawData).map(([key, value]) => [
    value[skillPercentage],
  ]);
  const newData = MyLabels.map((item) => {
    return item[0];
  });

  const data = {
    labels: MyData,
    datasets: [
      {
        label: label,
        data: newData,
        backgroundColor: backgroundColor,
        borderColor: borderColor,
        borderWidth: borderWidth,
        pointBackgroundColor: "rgb(54, 162, 235)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(54, 162, 235)",
      },
    ],
  };
  const config = {
    type: "radar",
    data,

    options: {
      plugins: {
        legend: ShowLegend,

        labels: {
          color: "blue",
        },
      },
      scales: {
        r: {
          angleLines: {
            color: angleLines,
          },
          grid: {
            color: grid,
          },
          pointLabels: {
            color: pointLabels,
          },
          ticks: {
            color: ticks,
          },
        },
      },
    },
  };

  return <Radar {...config} />;
}
