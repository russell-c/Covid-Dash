import React, { Component } from 'react';
import countries_data from "./data/dataset-json.json"

export default class RankingsCard extends Component{
    
    render(){
        let countriesData = countries_data.sort((a, b) => (a.total > b.total) ? 1 : -1)
        
        if(countriesData != null){
            return (
                <div className="rankings-card">
                    <h3>Rankings by Number of Cases</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Number of Cases</th>
                            </tr>
                        </thead>
                        <tbody>
                            {countriesData.slice(Math.max(countriesData.length - 5, 0)).reverse().map(data => {
                                return(
                                    <tr>
                                        <td>{data.CNTRYNAME}</td>
                                        <td>{data.total}</td>
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

