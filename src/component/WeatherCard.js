import React from 'react';
import "../css/WeatherCard.css";

const WeatherCard = (props) => {
    const {time, summary, icon, temp, temphigh, templow, rain} = props.data;
    let timeValue,tempValue,weekValue;
    if(temphigh && templow){
        const week = ["天","一","二","三","四","五","六"];

        timeValue = `${time.getMonth()+1} / ${time.getDate()}`;
        weekValue = `星期${week[time.getDay()]}`;
        tempValue = `${templow}\xB0C - ${temphigh}\xB0C`;
    }else{
        timeValue = time.slice(0,-3);
        tempValue = `${temp}\xB0C`;
    }

    return (
        <div className="card">
            <div className="card-header">
                <p>{timeValue}</p>
                <p>{weekValue}</p>
            </div>
            <div className="card-body">
                <p>{summary}</p>
                <p>
                    <i className={`iconfont icon-${icon}`}></i>
                </p>
                <p>溫度 : {tempValue}</p>
                <p>降雨 : {rain} %</p>
            </div>
        </div>
    )
}

export default WeatherCard;