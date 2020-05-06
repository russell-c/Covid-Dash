import React, { Component } from 'react';
import logo from './logo.svg';

import MapCard from "./Components/MapCard.jsx"
import NewsCard from "./Components/NewsCard.jsx"
import StatsCard from "./Components/StatsCard.jsx"
import Picker from './Components/Picker';

import './App.css';
import RankingsCard from './Components/RankingsCard';
import TotalCard from './Components/TotalCard';

class App extends Component {

  constructor(){
    super()
    this.state = {
      currentCountryOption: 'Aruba',
    }
  }

  handleChange = event => {
    const el = event.currentTarget;
    if(el.name == "country"){
      this.setState({
        currentCountryOption: el.value
      })
    }
  };

  componentDidMount(){
    
  }

  render(){
    return (
      <div className="App">
        <div className="header">
          <h1>COVID Dash</h1>
        </div>
        <div className="top-section">
          <div className="app-column" id="left">
            <Picker onChange={this.handleChange}/>
            <StatsCard country={this.state.currentCountryOption}></StatsCard>
            <NewsCard country={this.state.currentCountryOption}></NewsCard>
          </div>
          <div className="app-column" id="right">
            <MapCard></MapCard>
          </div>
        </div>
        <div className="bottom-section">
          <RankingsCard></RankingsCard>
          <TotalCard></TotalCard>
        </div>
      </div>
    );
  }
}

export default App;
