const getPosition = () => {
    if("geolocation" in navigator){
        return new Promise((resolve) => {
            navigator.geolocation.getCurrentPosition((position) => {
                resolve(position.coords)
            },() => {
                resolve(null);
            })
        })
    }else{
        return null;
    }
}

export default getPosition;