import React from 'react';
import cities from '../data/taiwancity.json';

const withLocation = (Component, props) =>{
    //props 為 Router 帶來的參數 location,match....
    const {location, match} = props;
    let coords; 
    if(location.state){
        coords = location.state.coords;
    }else if(match.params.city && match.params.region){
        let city = cities.filter((city)=>(city.cityName.includes(match.params.region)));
        coords = city[0].coords;
    }else{
        coords = {long:"121.5198839",lat:"25.03240487"};
    }
    let city = cities.filter((city) => {
        return city.coords.lat === coords.lat && city.coords.long === coords.long
    })[0];

    return <Component {...props} key={location.key} coords={coords} city={city.cityName}/>
}

export default withLocation;