// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom/client";
import cars from "./practice.js";

const [honda, tesla] = cars;

const { speedStats: teslaSpeed, coloursByPopularity: teslaColours } = tesla;

const [teslaTopColour] = teslaColours;

const { topSpeed: teslaTopSpeed } = teslaSpeed;

const { speedStats: hondaSpeed, coloursByPopularity: hondaColours } = honda;

const [hondaTopColour] = hondaColours;

const { topSpeed: hondaTopSpeed } = hondaSpeed;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <table>
      <tr>
        <th>Brand</th>
        <th>Top Speed</th>
      </tr>
      <tr>
        <td>{tesla.model}</td>
        <td>{teslaTopSpeed}</td>
        <td>{teslaTopColour}</td>
      </tr>
      <tr>
        <td>{honda.model}</td>
        <td>{hondaTopSpeed}</td>
        <td>{hondaTopColour}</td>
      </tr>
    </table>
  </div>
);

// Teacher's shorter version of code
// const [honda, tesla] = cars;
// const {speedStats: { topSpeed: hondaTopSpeed }} = honda;
// const {speedStats: { topSpeed: teslaTopSpeed }} = tesla;
// const {coloursByPopularity: [hondaTopColour]} = honda;
// const {coloursByPopularity: [teslaTopColour]} = tesla;