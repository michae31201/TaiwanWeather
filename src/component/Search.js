import React from 'react';
import {Link} from 'react-router-dom';
import searchCityList from '../utils/searchCityList';
import '../css/Search.css';
import { WeatherContext } from '../WeatherStore';
import 'animate.css';

class Search extends React.Component{
    state={
        isSearching:false,
        searchValue:"",
        cityList:[]
    }

    onChangeHandler = (e) => {
        this.setState({
            searchValue:e.target.value
        });
    }
    onKeyPressHandler = (e) => {
        if(e.key === "Enter"){
            this.searchCity()
        }
    }
    
    searchCity = async () => {
        const {searchValue} = this.state;
        if(searchValue){
            this.setState({isSearching:true,isFirstTime:false})
            const result = await searchCityList(this.state.searchValue);
            this.setState({
                isSearching:false,
                cityList:result
            })
        }else{
            alert("請輸入搜尋地區!")
        }       
    }

    render(){
        const {isSearching, cityList, searchValue} = this.state;

        return(
            <WeatherContext.Consumer>
                {
                    ({getUserLocationWeather}) => (
                        <div className="search animated fadeInDown fast">
                            <div className="search-container">
                                <button className="back-button" onClick={this.props.handleSearchClose}>
                                    <i className="iconfont icon-back"></i>
                                </button>
                                <input type="search" className="search-input" autoFocus placeholder="搜尋" value={searchValue} onChange={this.onChangeHandler} onKeyPress={this.onKeyPressHandler}/>
                                <button className="gps-button" onClick={()=>{getUserLocationWeather();this.props.handleSearchClose();}}>
                                    <i className="iconfont icon-gps"></i>
                                </button>
                                <button className="search-button" onClick={this.searchCity}>
                                    <i className="iconfont icon-search"></i>
                                </button>
                            </div>
                            <div className="city-list">
                            {
                                isSearching ? 
                                    <div className="loading">
                                        <i className="iconfont icon-loading loading-spin"></i>
                                        <span>搜尋中...</span>
                                    </div>:null
                            }
                            {
                                !isSearching && cityList.length === 0 ?
                                    <div className="loading">
                                        <i className="iconfont icon-empty"></i>
                                        <span>沒有符合的結果</span>
                                    </div>:null
                            }
                            {
                                !isSearching && cityList.map((city, index) => {
                                        const [cityName,region] = city.cityName.split("/");
                                        return  <Link className="search-result animated fadeInDown faster" key={index} to={{pathname:`/${city.cityName}`,state:{"coords":city.coords}}}>
                                                    <div className="city">
                                                        <i className="iconfont icon-landmark"></i>
                                                        {cityName} {region}
                                                    </div>
                                                </Link>
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

export default Search;


/* old
   
 <li className="city animated fadeInDown faster" key={city} onClick={()=>{SearchWeatherByCityId(city.id); this.props.handleSearchClose();}}>
                                        <i className="iconfont icon-landmark"></i>
                                        <span className="city-name">
                                            {city.city}
                                        </span>
                                        <span className="city-coord">
                                            <div>Lon: {city.coords.long}</div>
                                            <div>Lat: {city.coords.lat}</div>
                                        </span>
                                    </li>



*/