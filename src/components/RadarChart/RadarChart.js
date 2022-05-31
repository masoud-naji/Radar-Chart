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
  pointLabel,
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
      },
    ],
  };
  const config = {
    type: "radar",
    data,

    options: {
      plugins: {
        legend: ShowLegend,
      },
      scales: {
        r: {
          angleLines: {
            color: angleLines,
          },
          grid: {
            color: grid,
          },
          pointLabel: {
            color: pointLabel,
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
