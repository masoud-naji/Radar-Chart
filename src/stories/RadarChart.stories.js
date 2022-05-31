import React from "react";
import { storiesOf } from "@storybook/react";
import { RadarChart } from "../components/RadarChart";
import SkillsArray from "./SkillsArray.json";

const stories = storiesOf("App Test", module);

stories.add("App", () => (
  <RadarChart
    rawData={SkillsArray}
    skillPercentage="skillPercentage"
    skillName="skillName"
    label="Skills"
    backgroundColor="rgba(255, 99, 132, 0.2)"
    borderColor="rgba(255, 99, 132, 1)"
    borderWidth="1"
    angleLines="rgba(255, 99, 132, 0.2)"
    grid="red"
    pointLabels="red"
    ticks="red"
    ShowLegend={false}
  />
));
