import React from 'react';
import cities from '../data/taiwancity.json';
import getCity from './getCity.js';

const withLocation = (Component, props) =>{
    //props 為 Router 帶來的參數 location,match....
    const {location, match} = props;
    let coords;

    if(location.state){
        coords = location.state.coords;
    }else if(match.params.city && match.params.region){
        let city = cities.find((city)=>(city.cityName.includes(match.params.region)));
        coords = city.coords;
    }else{
        coords = {lng:"121.5198839", lat:"25.03240487"};
    }
    let cityName = getCity(coords.lng, coords.lat)

    return <Component {...props} key={location.key} coords={coords} city={cityName}/>
}

export default withLocation;