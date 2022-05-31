# Skills Radar Chart

Skills Radar Chart a React library for Easy creating Radar Chart for showing your data such as skills.

  [![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)
  

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install json-pretty-textarea.

```bash
npm i skills-radar-chart
```



## Usage

```React
# import 
import { RadarChart } from "skills-radar-chart";
```
```React
# return
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
    pointLabel="red"
    ticks="red"
    ShowLegend={false}
  />
```
---

![alt text](https://dub01pap003files.storage.live.com/y4mgiCeBPYvvJeUPWG2I6bSATYwLpYrurKo1hkI9WQcv0fd9l79Rbx8Un4KBekGp0gkSXZF8lBSVwVpbzSOoOZgnVre_tqjvQRGIThrgpnLKrtGjqDPFxObPrYFRBmxaeU0rtyiQd8fRLhuVJ77RKHwC65LApiupmoVuw5S7sdh1QSATutr6eD6egARF_8CqYU3?width=984&height=825&cropmode=none)

---


|    Property      |     type      |  Default   |       Description       |
| ---------------- |:-------------:|:----------:|:-----------------------:|
| rawData          | json data     |MockDocument|    Source File json     |
| skillPercentage  |   data        |    white   |key colum  (number)      |
| skillName        |   label       |    green   |   key colum (Name)      |
| ShowLegend       | legend show   |     1rem   |  {true} / {false}       |
| label            | legend Text   | darkorange |   legent text           |
| backgroundColor  | CSS           |     blue   |        CSS Color        |
| borderColor      | CSS           |   magenta  |        CSS Color        |
| borderWidth      | CSS           |     red    |        CSS Color        |
| angleLines       | CSS           |     red    |        CSS Color        |
| grid             | CSS           |     red    |        CSS Color        |
| pointLabel       | CSS           |     red    |        CSS Color        |
| ticks            | CSS           |     red    |        CSS Color        |



***
## CodeSandBox Sample
[Skills Radar Chart]https://codesandbox.io/s/radar-chart-jjhctz


## Contributing
For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.


## License
[MIT](https://choosealicense.com/licenses/mit/)
[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)
  