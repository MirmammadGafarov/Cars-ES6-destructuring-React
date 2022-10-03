import React from "react";
import cars from "../practice.js";

function App() {
  const [honda, tesla] = cars;

  const {
    coloursByPopularity: [hondaTopColour],
    speedStats: { topSpeed: hondaTopSpeed }
  } = honda;
  const {
    coloursByPopularity: [teslaTopColour],
    speedStats: { topSpeed: teslaTopSpeed }
  } = tesla;

  return (
    <table>
      <tbody>
        <tr>
          <th>Brand</th>
          <th>Top Speed</th>
          <th>Top Colour</th>
        </tr>
        {
          <tr>
            <td>{tesla.model}</td>
            <td>{teslaTopSpeed}</td>
            {<td>{teslaTopColour}</td>}
          </tr>
        }
        {
          <tr>
            <td>{honda.model}</td>
            <td>{hondaTopSpeed}</td>
            <td>{hondaTopColour}</td>
          </tr>
        }
      </tbody>
    </table>
  );
}

export default App;
