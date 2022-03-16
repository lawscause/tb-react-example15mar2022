import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Car from "./Car";
import { CarAlso, Garage } from "./CarAlso";
import GarageWithCar from "./GarageWithCar";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <GarageWithCar aName="my name" />,
  document.getElementById("root")
);

//<a href="myPage.html">Go To My Page</a>

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
