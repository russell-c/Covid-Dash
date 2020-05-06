import React, { Component } from 'react';
import 'react-dropdown/style.css';
import countries_data from "./data/dataset-json.json"

class Picker extends Component{

    constructor (props) {
        super(props)
        let countryOptions = []

        for(let countryData of countries_data){
            countryOptions.push(countryData.CNTRYNAME)
        }

        this.state = {
            options: countryOptions
        }
    }

    render(){
        return (
            <div className="picker">
                <select 
                    required
                    className="picker" 
                    name="country" 
                    id="country"
                    onChange={this.props.onChange}
                >
                    {this.state.options.map((name, index) => {
                        return(
                            <option key={index} value={name}>{name}</option>
                        )
                    })}
                </select>
            </div>
        );
    }
}

export default Picker;