const getfilterData = ({currently:rawCurrently,hourly:rawHourly,daily:rawDaily}) =>{
    let currently = {
        "time": new Date(rawCurrently.time * 1000).toLocaleString().slice(0,-3),
        "summary":rawCurrently.summary,
        "icon":rawCurrently.icon,
        "temp":Math.floor(rawCurrently.temperature),
        "feeltemp":Math.floor(rawCurrently.apparentTemperature),
    }

    let detail = {
        "rain":Math.floor(rawCurrently.precipProbability * 100),
        "humidity":Math.floor(rawCurrently.humidity * 100),
        "pressure":Math.floor(rawCurrently.pressure),
        "wind":`${rawCurrently.windSpeed}/${rawCurrently.windBearing}`,
        "cloudcover":Math.floor(rawCurrently.cloudCover * 100),
        "visibility":Math.floor(rawCurrently.visibility),
        "sunrise": new Date(rawDaily.data[0].sunriseTime * 1000).toLocaleTimeString(),
        "sunset": new Date(rawDaily.data[0].sunsetTime * 1000).toLocaleTimeString(),
    }

    let hourly = [];
    for(let i = 0; i < 24; i++){
        hourly.push(
            {
                "time":new Date(rawHourly.data[i].time*1000).toLocaleTimeString(),
                "summary":rawHourly.data[i].summary,
                "icon":rawHourly.data[i].icon,
                "temp":Math.floor(rawHourly.data[i].temperature),
                "rain":Math.floor(rawHourly.data[i].precipProbability * 100)
            }
        )
    }
    let daily = rawDaily.data.map((day) => {
        return {
            "time": new Date(day.time * 1000),
            "summary":day.summary.slice(0,-1),
            "icon":day.icon,
            "temphigh":Math.floor(day.temperatureHigh),
            "templow":Math.floor(day.temperatureLow),
            "rain":Math.floor(day.precipProbability * 100)
        }
    })

    return {currently,detail,hourly,daily};
}

export default getfilterData;

