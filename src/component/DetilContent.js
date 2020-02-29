import React from 'react';
import '../css/WeatherDetil.css'

const DetilContent = (props) =>{
    const {icon,title,text} = props.detil;
    return(
        <div className="detil">
            <div>
                <i className={`detil-icon iconfont ${icon}`}></i>
            </div> 
            <div>
                <span className="detil-title">{title}</span>
                <span className="detil-text">{text}</span>
            </div>
        </div>
    )
};

export default DetilContent;