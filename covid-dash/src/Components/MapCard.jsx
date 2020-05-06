import React, { Component, memo } from 'react';
import { ComposableMap, Geographies, Geography, Sphere, Graticule} from "react-simple-maps"
import { scaleLinear } from "d3-scale";
import countries_data from "./data/dataset-json.json"

export default class MapCard extends Component{

    constructor(props){
        super(props);
        this.state = {
            marker: null,
            geoUrl : "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json",
            data: countries_data
        }
    }

    render(){        
        const colorScale = scaleLinear()
            .domain([0, 938154])
            .range(["#ffedea", "#ff5233"]);

        return (
            <div className="map-card">
                <ComposableMap
                projectionConfig={{
                    rotate: [-10, 0, 0],
                    scale: 147
                }}
                >
                <Sphere stroke="#E4E5E6" strokeWidth={0.5} />
                <Graticule stroke="#E4E5E6" strokeWidth={0.5} />
                {this.state.data.length > 0 && (
                    <Geographies geography={this.state.geoUrl}>
                    {({ geographies }) =>
                        geographies.map(geo => {
                            const d = this.state.data.find(s => s.ISO === geo.properties.ISO_A3);
                            return (
                                <Geography
                                key={geo.rsmKey}
                                geography={geo}
                                fill={d ? colorScale(d["total"]) : "#F5F4F6"}
                                />
                            );
                        })
                    }
                    </Geographies>
                )}
                </ComposableMap>
            </div>
        )
    }
}