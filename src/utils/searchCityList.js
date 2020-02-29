import cities from '../data/taiwancity.json';

const searchCityList = async (searchCity) =>{
    if(searchCity){
        return new Promise((resolve) =>{
                const result = cities.filter((city) => {
                    const region = city.cityName.split('/')[1];
                    return region.includes(searchCity);
                });
                setTimeout(() => {resolve(result)}, 1000);
        })
    }
    else{
        return [];
    }
}

export default searchCityList;