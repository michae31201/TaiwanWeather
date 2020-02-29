import React from 'react';
import App from './component/App';
//import getPosition from './utils/getPosition';
import fetchWeatherData from './utils/fetchWeatherData';
import getfilterData from './utils/getFilterData';

const WeatherContext = React.createContext();

class WeatherStore extends React.Component{
    state = {
        currently:{},
        detail:{},
        hourly:[],
        daily:[]
    }
    
    async componentDidMount(){
        //const currentPosition = await getPosition();
        const {coords, city} = this.props;
        let rawData = await fetchWeatherData(coords.lat,coords.long);
        let {currently,detail,hourly,daily} = getfilterData(rawData);
        let region = city.split("/")[1];

        this.setState({currently,detail,hourly,daily,region});
    }
    
    render(){
        const {currently, detail, hourly, daily, region} = this.state;

        return(
            <WeatherContext.Provider value={{currently, detail, hourly, daily, region}}>
                {
                    Object.keys(currently).length ? <App/> : <div className="loading"><i className="iconfont icon-loading loading-spin"></i>資料載入中.....</div>
                }
            </WeatherContext.Provider>
        )
    }
}

export {WeatherContext,WeatherStore};