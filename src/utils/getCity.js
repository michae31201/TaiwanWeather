import cities from '../data/taiwancity.json';

const getCity = (lng,lat) => {
    let userCity,minDist = Infinity;

    for(let city of cities){
        if(city.coords.lng === lng && city.coords.lat === lat){
            return city.cityName;
        }

        let dist = ((city.coords.lng-lng)**2 + (city.coords.lat-lat)**2)**(1/2);
        if(dist < minDist){
            minDist = dist;
            userCity = city;
        }
    }

    return userCity.cityName;
}

export default getCity;