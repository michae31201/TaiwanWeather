import React from 'react';
import { WeatherContext } from '../WeatherStore';
import '../css/CurrentWeather.css';

class CurrentWeather extends React.Component{
    render(){
        const {handleSearchOpen} = this.props;
        
        return(
            <WeatherContext.Consumer>
                {
                    ({currently, region})=>(
                        <div className="currentweather">
                            <div className="current-city" onClick={handleSearchOpen}>
                                   <span>{region}</span>
                                   <i className="iconfont icon-search"></i>
                            </div>
                            <div>
                                {currently.time}
                            </div>
                            <div>
                                <i className={`current-icon iconfont icon-${currently.icon}`}></i>
                                <br/>
                                <p className="current-summary">{currently.summary}</p>
                            </div>
                            <div className="current-temp">
                                <i className="iconfont icon-temp"></i>
                                <span>{currently.temp} &deg;C</span>
                            </div>
                        </div>
                    )
                }
            </WeatherContext.Consumer>
        )
    }
}

export default CurrentWeather;
