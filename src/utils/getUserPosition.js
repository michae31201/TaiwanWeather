
const getUserPosition = () => {
    if("geolocation" in navigator){
        return new Promise((resolve) => {
            navigator.geolocation.getCurrentPosition((position) => {
                const {coords} = position;
                resolve({lng:coords.longitude, lat:coords.latitude});
            },() => {
                resolve(null);
            })
        })
    }else{
        return null;
    }
}

export default getUserPosition;