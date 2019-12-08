const axios = require('axios');

const getClima = async (lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&APPID=814fa06266a041452d7de8f37d92fa2d&units=metric`)

    return resp.data.main.temp;
}

module.exports = {
    getClima
}