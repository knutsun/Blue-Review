import React, { Component } from 'react';

import './countryMap.css';
import USAMap from "react-usa-map";

class CountryMap extends Component {

    mapHandler = (event) => {

        // call /departments/MT where MT is state abbr
        const stateLink =  <a href={`/departments/${event.target.dataset.name}`}>{event.target.dataset.name}</a>
        console.log(stateLink.props.href);
        // <Link to={`/departments/${event.target.dataset.name}`} >Click to route</Link>;

    };

    statesFilling = () => {
        return {
            // "NJ": {
            //     fill: "navy",
            //     clickHandler: () => alert("Custom callback for the NJ state")
            // },
            // "NY": {
            //     fill: "#CC0000"
            // }
        };
    };

    render() {
        return (
            <div className="countryMap">
                <USAMap customize={this.statesFilling()}
                        onClick={this.mapHandler}
                        title={"United States map"}/>
            </div>
        );
    }
}

export default CountryMap;