const fetchWeatherData = async (lng,lat) => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const URL = `/forecast/${API_KEY}/${lat},${lng}/?lang=zh-tw&units=si`;
    
    try {
        let response = await fetch(URL,{cache:'reload'});
        let jsonData =  await response.json();

        return jsonData;
    }catch(err){
        console.error(err);
    }
}

export default fetchWeatherData;