import React from "react";
import ReactDOM from 'react-dom';
import Head from "./head.js";
import Nav from './nav.js';
import "./index.css";
import RacialParityPlot from "./racialParityPlot.js";
import GenderParityPlot from "./genderParityPlot.js";



function App() {

  return (
    <html>
      <Head />
      <body>
        <Nav />
        <RacialParityPlot />
        <GenderParityPlot />
      </body>
    </html>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);