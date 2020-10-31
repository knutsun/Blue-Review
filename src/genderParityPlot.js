import React, { Component } from "react";
import "./departments.css";
import Plot from "react-plotly.js";

class GenderParityPlot extends Component {
  constructor(props) {
    super(props);

    this.state = {
      genderParityPlot: [],
    };
  }

  componentDidMount() {
    this.fetchPlot();
  }

  fetchPlot = () => {
    const req = new Request("http://127.0.0.1:5000/departments/", {
      method: "GET",
      cache: "default",
    });

    fetch(req)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.response); //REF 1;
        this.setState({
          genderParityPlot: data.response,
        });
        console.log(this.state);
      })
      .catch((err) => {
        console.log("ERROR: " + err);
      });
  };

  render() {
    return this.state.genderParityPlot.map((plot) =>(
      <Plot
        className="genderParityPlot"
        data={[
          {
            values: [plot.policeMale, plot.policeFemale],
            type: "pie",
            labels: ["Men", "Women"],
            textinfo: "label+percent",
            insidetextorientation: "radial",
          },
        ]}
        layout={{
          title: "Gender Parity Reflection",
          pointpos: 1,
          height: 300,
          width: 400,
          showlegend: false,
          annotations: [
            {
              xref: "paper",
              yref: "paper",
              x: 1,
              xanchor: "right",
              y: -.5,
              yanchor: "bottom",
              text:
                plot.genderSource,
              opacity: 0.15,
              showarrow: false,
            },
          ],
        }}
      />
    ));
  }
}

export default GenderParityPlot;
