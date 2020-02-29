import React from 'react';
import Search from './Search';
import CurrentWeather from './CurrentWeather';
import WeatherDetils from './WeatherDetils';
import HourWeather from './HourWeather';
import DailyWeather from './DailyWeather';
import CloudEffect from './CloudEffect';
import '../css/App.css';
import 'animate.css';

class App extends React.Component {
    state={
      isSearch:false
    }

    handleSearchOpen = () =>{
      this.setState({
        isSearch:true
      })
    }
    handleSearchClose = () =>{
      this.setState({
        isSearch:false
      })
    }

    render(){
      const {isSearch} = this.state;
      return(
        <div>
           <CloudEffect/>
          {
            isSearch ?
            (
              <Search handleSearchClose={this.handleSearchClose}/>
            )
            :
            (
              <div className="app-container animated fadeIn faster">
                <CurrentWeather handleSearchOpen={this.handleSearchOpen}/>
                <WeatherDetils/>
                <HourWeather/>
                <DailyWeather/>
              </div>)
          }
        </div>
      )
    }
}

export default App;
