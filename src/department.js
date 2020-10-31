import React, { Component } from "react";
// import RacialParityPlot from "./racialParityPlot";
import "./departments.css";
// import NewYorkCityNYDepartment from "./static/img/departments/newyorkcityny.jpg";
// import ChicagoILDepartment from "./static/img/departments/chicagoil.jpg";
import logoAlt from "./static/img/logo-alt.png";
import Plot from "react-plotly.js";

class Department extends Component {

    constructor(props){
    super(props);

    this.state = {
      racialParityPlot: [],
    }
  }

  componentDidMount(){
    this.fetchPlot();
  }

  fetchPlot = () => { 
    const req = new Request("http://127.0.0.1:5000/departments/", {
      method: "GET",
      cache: "default",
    });

    fetch(req).then(response =>{
      return response.json();
    }).then(data =>{
      console.log(data.response); //REF 1;
      this.setState({
        racialParityPlot: data.response
      });
      console.log(this.state);
    }).catch(err => {
      console.log("ERROR: " + err);
    })
  }

  render() {
    return this.state.racialParityPlot.map((plot) => (
      <Plot
        className="racialParityPlot"
        data={[
          {
            x: [
              "White",
              "Hispanic",
              "Black",
              "Asian",
              "Native American",
              "Bi(+)racial",
            ],
            y: [
              plot.policeWhite,
              plot.policeHispanic,
              plot.policeBlack,
              plot.policeAsian,
              plot.policeNativeAmerican,
              plot.policeBiracial,
            ],

            type: "scatter",
            mode: "markers",
            marker: {
              color: "blue",
              symbol: "square-dot",
              opacity: 0.8,
              size: 12,
              line: {
                color: "lightgrey",
                width: 1,
              },
            },
            name: "Police",
            textposition: "top center",
            textfont: {
              family: "Open Sans, sans-serif",
            },
            cliponaxis: false,
          },
          {
            x: [
              "White",
              "Hispanic",
              "Black",
              "Asian",
              "Native American",
              "Bi(+)racial",
            ],
            y: [
              plot.communityWhite,
              plot.communityHispanic,
              plot.communityBlack,
              plot.communityAsian,
              plot.communityNativeAmerican,
              plot.communityBiracial,
            ],
            type: "scatter",
            mode: "markers",
            marker: {
              color: "rgba(226, 106, 106, 0.5)",
              symbol: "circle-dot",
              size: 12,
              line: {
                color: "lightgrey",
                width: 1,
              },
            },
            name: "Community",
            textposition: "top center",
            textfont: {
              family: "Open Sans, sans-serif",
            },
            cliponaxis: false,
          },
        ]}
        layout={{
          template: {
            data: {},
            layout: {
              title: "Watermark Template",
              images: [
                {
                  name: "watermark",
                  source: logoAlt,
                  xref: "paper",
                  yref: "paper",
                  x: 0.85,
                  y: 1,
                  sizex: 0.15,
                  sizey: 0.15,
                  sizing: "stretch",
                  opacity: 0.2,
                  layer: "below",
                },
              ],
            },
          },
          xaxis: {
            // visible: false,
            // automargin: true,
            showgrid: false,
            // showline: false,
            // tickangle: 45,
            standoff: 400,
          },
          yaxis: {
            // visible: false,
            showgrid: false,
            // showline: false,
            title: {
              text: "TEST",
              // automargin: true,
            },
            range: [0, 60],
          },
          annotations: [
            {
              xref: "paper",
              yref: "paper",
              x: 1,
              xanchor: "right",
              y: 0,
              yanchor: "bottom",
              text: plot.policeSource,
              opacity: 0.15,
              showarrow: false,
              align: "center",
              // borderolor="#c7c7c7",
              borderwidth: 2,
              borderpad: 4,
              bgcolor: "#ff7f0e",
            },
          ],
          legend: {
            y: 0.5,
            yref: "paper",
            font: {
              family: "Open Sans, sans-serif",
              size: 15,
              color: "grey",
            },
          },
          title: "Racial Parity Reflection",
          pointpos: 1,
        }}
      />
    )); 
  }
};

export default Department;
