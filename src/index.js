import React from "react";
import ReactDOM from 'react-dom';
import Head from "./head.js";
import Nav from './nav.js';
import "./index.css";
import Department from "./department.js";
import AllDepartments from "./allDepartments.js";

import CountryMap from "./countryMap";



function App() {

  return (
    <html>
      <Head />
      <body>
        <Nav />
        {/*<CountryMap />*/}
        <AllDepartments />
        <Department />
      </body>
    </html>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);