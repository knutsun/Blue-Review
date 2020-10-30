import React, { Component } from "react";
import logoAlt from "./static/img/logo-alt.png";
import Plot from "react-plotly.js";


class RacialParityPlot extends Component {

    constructor(props){
    super(props);

    this.state = {
      racialParityPlot: {},
    }
  }

  componentDidMount(){
    this.fetchPlot();
  }

  fetchPlot = () => { 
    const req = new Request("http://127.0.0.1:5000/department/newyorkcityny", {
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
    return (
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
              this.state.racialParityPlot.policeWhite,
              this.state.racialParityPlot.policeHispanic,
              this.state.racialParityPlot.policeBlack,
              this.state.racialParityPlot.policeAsian,
              this.state.racialParityPlot.policeNativeAmerican,
              this.state.racialParityPlot.policeBiracial,
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
              this.state.racialParityPlot.communityWhite,
              this.state.racialParityPlot.communitiyHispanic,
              this.state.racialParityPlot.communityBlack,
              this.state.racialParityPlot.communityAsian,
              this.state.racialParityPlot.communityNativeAmerican,
              this.state.racialParityPlot.communityBiracial,
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
            automargin: true,
            tickangle: 45,
            title: {},
            standoff: 400,
          },
          yaxis: {
            title: {
              text: "%",
              automargin: true,
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
              text: this.state.racialParityPlot.policeSource,
              opacity: 0.15,
              showarrow: false,
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
    );
  }
}
  

export default RacialParityPlot;
