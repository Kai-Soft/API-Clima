const axios = require('axios');

const getClima = async(lat, lng) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&units=metric&appid=1d30bb75a389bde93618842b19a31099`);

    return resp.data.main.temp;

}

module.exports = {
    getClima
}