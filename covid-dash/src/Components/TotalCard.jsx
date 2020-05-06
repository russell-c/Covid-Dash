import React, { Component } from 'react';
import countries_data from "./data/dataset-json.json"

export default class TotalCard extends Component{

    render(){
        let total = 0
        for(let countryData of countries_data){
            total += countryData.total
        }
        
        return (
            <div className="total-card">
                <h3>Number of Cases Worldwide</h3>
                <h1>{total}</h1>
                <h4>Cases</h4>
            </div>
        )
    }

}

