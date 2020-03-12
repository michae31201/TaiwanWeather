import React from 'react';
import App from './component/App';
import getUserPosition from './utils/getUserPosition';
import fetchWeatherData from './utils/fetchWeatherData';
import getfilterData from './utils/getFilterData';
import getCity from './utils/getCity';

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
        const rawData = await fetchWeatherData(coords.lng, coords.lat);
        const {currently, detail, hourly, daily} = getfilterData(rawData);
        const [, region] = city.split("/");

        this.setState({currently, detail, hourly, daily, region});
    }
    getUserLocationWeather = async () => {
        const userCoords = await getUserPosition();
        if(userCoords){
            console.log(userCoords)
            const userCity = getCity(userCoords.lng, userCoords.lat);
            const rawData = await fetchWeatherData(userCoords.lng, userCoords.lat);
            const {currently ,detail, hourly, daily} = getfilterData(rawData);
            const [ ,region] = userCity.split("/");

            this.setState({currently, detail, hourly, daily, region});
        }
    }
    
    render(){
        const {currently, detail, hourly, daily, region} = this.state;
        const {getUserLocationWeather} = this;

        return(
            <WeatherContext.Provider value={{currently, detail, hourly, daily, region, getUserLocationWeather}}>
                {
                    Object.keys(currently).length ? <App/> : <div className="loading"><i className="iconfont icon-loading loading-spin"></i>資料載入中.....</div>
                }
            </WeatherContext.Provider>
        )
    }
}

export {WeatherContext,WeatherStore};