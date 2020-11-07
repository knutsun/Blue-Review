import React, { Component } from "react";
import "./department.css";
import { TwitterMentionButton } from 'react-twitter-embed';
import logoAlt from "./static/img/logo-alt.png";
import officer_icon from "./static/img/icons/Officer-02.png";
import average_apple_icon from "./static/img/icons/AverageAppleGreyBackground.png";
import Plot from "react-plotly.js";
import Collapsible from 'react-collapsible';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import Tooltip from 'react-tooltip-lite';



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
      console.log(data.response);
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
    this.state.racialParityPlot.map((plot) => (
        <div>
          <div className="headerGrid">
            <h2 className="departmentTitle">{plot.department.city.name}, {plot.department.acronymn}</h2>
            <Tooltip content={(
                <p>This department's officers <br />are rated as average apples.
                  <br/>Rate or read reviews <a href="#">here</a>.
                </p>
            )}
                     tipContentHover={true} color="white">
              <a href="#">
                <img className="appleIcon" src={average_apple_icon} alt=""/>
              </a>
              <h2 className="ratingScore">3.2</h2>
            </Tooltip>

          </div>

          <Collapsible trigger={<FontAwesomeIcon icon={faPlusSquare} />}
                       lazyRender={true}>

            <div className="grid-container">
              <div>
                <table>
                  <tr>
                    <td>
                      <TwitterMentionButton
                        screenName={plot.department.twitterHandle}
                      />
                    </td>
                  </tr>
                  <tr>
                      <td><a href={plot.department.twitterUrl}>@{plot.department.twitterHandle}</a></td>
                  </tr>

                </table>
                <table>
                  <tr>
                    <td>{plot.department.address}</td>
                  </tr>
                  <tr>
                    <td>{plot.department.city.name} {plot.department.state}</td>
                  </tr>
                  <tr>
                    <td>Population: {plot.department.city.population.toLocaleString()}</td>
                  </tr>
                </table>

                <table>
                  <tbody>
                  <tr>
                    <td>Commissioner: </td>
                    <td>{plot.department.commissioner}, since {plot.department.commissionerYearStarted}</td>
                  </tr>
                  <tr>
                    <td>Official Site: </td>
                    <td><a href={plot.department.url}>{plot.department.url}</a></td>
                  </tr>
                  </tbody>
                </table>

              </div>

                <div className="officerGrid">
                  <img className="officerIcon" src={officer_icon} alt="Police officer icon"/>
                  <a href="#"><h2 className="officerListHeader">Rate or Review {plot.department.acronymn} Officers</h2></a>
                </div>

            </div>

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
                    plot.department.demographics.white,
                    plot.department.demographics.hispanic,
                    plot.department.demographics.black,
                    plot.department.demographics.asian,
                    plot.department.demographics.nativeAmerican,
                    plot.department.demographics.biracial,
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
                    plot.department.city.demographics.white,
                    plot.department.city.demographics.hispanic,
                    plot.department.city.demographics.black,
                    plot.department.city.demographics.asian,
                    plot.department.city.demographics.nativeAmerican,
                    plot.department.city.demographics.biracial,
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
                  showgrid: false,
                  showline: false,
                  standoff: 400,
                },
                yaxis: {
                  showgrid: false,
                  showline: false,
                  title: {
                    text: "%",
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
                    text: plot.department.demographics.raceSource,
                    opacity: 0.95,
                    showarrow: false,
                    align: "center",
                    bordercolor:"#c7c7c7",
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


          <Plot
              className="genderParityPlot"
              data={[
                {
                  values: [plot.department.demographics.male, plot.department.demographics.female],
                  type: "pie",
                  labels: ["Men", "Women"],
                  textinfo: "label+percent",
                  insidetextorientation: "radial",
                },
              ]}
              layout={{
                title: "Gender Parity",
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
                    plot.department.demographics.genderSource,
                    opacity: 0.15,
                    showarrow: false,
                  },
                ],
              }}
          />
          <hr />
          </Collapsible>
        </div>

    )));
  }
}

export default Department;
