import React from 'react';
import {WeatherContext} from '../WeatherStore';
import WeatherCard from './WeatherCard';
import '../css/Forecast.css';
import '../css/Scroll.css';

class HourWeather extends React.Component{
    render(){
        return(
            <WeatherContext.Consumer>
            {   
                ({hourly}) => (
                    <div className="forecast hourly">
                        <div> 
                            <span className="forecast-title"> 每小時天氣 </span>
                        </div>
                        <hr/>
                        <div className="scroll-container">
                        {                          
                            hourly.map((hour,index) => {
                                return <WeatherCard key={index} data={hour}/>
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

export default HourWeather;

