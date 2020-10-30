import React from "react";
import ReactDOM from 'react-dom';
import Head from "./head.js";
import Nav from './nav.js';
import "./index.css";
import RacialParityPlot from "./racialParityPlot.js";



function App() {

  return (
    <html>
      <Head />
      <body>
        <Nav />
        <RacialParityPlot />
      </body>
    </html>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);