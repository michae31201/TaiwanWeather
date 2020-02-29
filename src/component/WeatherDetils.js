import React from 'react';
import {WeatherContext} from '../WeatherStore';
import DetilContent from './DetilContent';
import getformatDetail from '../utils/getformatDetail';
import '../css/WeatherDetil.css';

const WeatherDetils = () =>{
    return(
        <WeatherContext.Consumer>
            {
                ({detail}) =>(
                    <div className="weatherdetil">
                        {
                            getformatDetail(detail).map((detil,index) =>(
                                <DetilContent key={index} detil={detil}/>
                            ))
                        }
                    </div>
                )
            }
        </WeatherContext.Consumer>
    )
}

export default WeatherDetils;
