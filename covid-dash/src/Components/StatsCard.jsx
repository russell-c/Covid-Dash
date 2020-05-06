import React, { Component } from 'react';
import countries_data from "./data/dataset-json.json"

export default class NewsCard extends Component{

    constructor(props){
        super(props)
    }

    render(){
        let country = this.props.country
        let countryData = countries_data.find(s => s.CNTRYNAME == country)
        let pctPopulationInfected = 0
        if(countryData.population != 0){
            pctPopulationInfected = (countryData.total/countryData.population)*100
        }
        if(countryData != null){
            return (
                <div className="stats-card">
                    <h3>Country Name: {countryData.CNTRYNAME}</h3>
                    <h4>Total Confirmed Cases: {countryData.total}</h4>
                    <h4>Percentage of Population Infected: {pctPopulationInfected.toFixed(2)}%</h4>
                    <table>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Number of Cases</th>
                                <th>% Change from Previous Day</th>
                            </tr>
                        </thead>
                        <tbody>
                            {countryData.cases_by_date.slice(Math.max(countryData.cases_by_date.length - 5, 0)).reverse().map(date => {
                                return(
                                    <tr>
                                        <td>{date.date_string}</td>
                                        <td>{date.num_cases}</td>
                                        <td>{date.change.toFixed(2)}%</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            )
        } else {
            return null
        }
    }

}

