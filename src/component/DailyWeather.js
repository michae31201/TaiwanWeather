import React from "react";
import {WeatherContext} from "../WeatherStore";
import WeatherCard from './WeatherCard';
import "../css/Forecast.css";
import "../css/Scroll.css";

class DailyWeather extends React.Component{
    render(){
        return(
            <WeatherContext.Consumer>
            {
                ({daily}) => (
                    <div className="forecast daily">
                        <div>
                            <span className="forecast-title"> 一周天氣 </span>
                        </div>
                        <hr/>
                        <div className="scroll-container">
                            {
                                daily.map((day,index) => {
                                    return <WeatherCard key={index} data={day}/>
                                })
                            }
                        </div>
                    </div>
                )
            }
            </WeatherContext.Consumer>
        )
    }
}

export default DailyWeather;