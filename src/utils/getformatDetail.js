const getformatDetail = (detail) =>{
    return Object.keys(detail).map((datakey) => {
        switch(datakey){
            case "humidity":
                return {
                    title:"濕度",
                    text:`${detail[datakey]} %`,
                    icon:"icon-humidity"
                }
            case "pressure":
                return{
                    title:"大氣壓力",
                    text:`${detail[datakey]} hPa`,
                    icon:"icon-pressure"
                }
            case "cloudcover":
                return {
                    title:"雲量",
                    text:`${detail[datakey]} %`,
                    icon:"icon-cloud"
                }
            case "wind":
                const wind = detail.wind.split("/");
                if(wind[1] % 90 === 0){
                    //風向是正四方
                    const direction = ["東","北","西","南"];
                    wind[1] = direction[wind[1] / 90];
                }else{
                    const direction = ["東北","西北","西南","東南"];
                    wind[1] = direction[Math.floor(wind[1] / 90)];
                }
                
                return{
                    title:`${wind[1]} 風`,
                    text:`${wind[0]} m/s`,
                    icon:"icon-windspeed"
                }
            case "rain":
                return{
                    title:"降雨機率",
                    text:`${detail[datakey]} %`,
                    icon:"icon-rainchance"
                }
            case "visibility":
                return{
                    title:"能見度",
                    text:`${detail[datakey]} km`,
                    icon:"icon-visibility"
                }
            case "sunrise":
                let sunrise = detail[datakey].substring(0,detail[datakey].length - 3);

                return{
                    title:"日出時間",
                    text: sunrise,
                    icon:"icon-sunrise"
                }
            case "sunset":
                let sunset = detail[datakey].substring(0,detail[datakey].length - 3);
                return{
                    title:"日落時間",
                    text: sunset,
                    icon:"icon-sunset"
                }
            default:
                return{
                    title:datakey,
                    text:detail[datakey],
                    icon:""
                }
        }
    })
}

export default getformatDetail;