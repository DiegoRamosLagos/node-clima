const axios = require('axios');

const getLugarLatLng = async(dir) => { //usamos async para poder trabajar como promesa

    const encodedURL = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedURL}`,
        headers: { 'x-rapidapi-key': 'ea7e5ff4f8mshb5cb0c9e1d1fcf1p1cdb4ejsnf26bf03f6e83' }
    });

    const respuesta = await instance.get();

    if(respuesta.data.Results.length === 0){
        throw new Error(`No hay resultados para ${dir}`);
    }

    const data = respuesta.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;


    return {
        direccion,
        lat,
        lng
    }

}


module.exports = {
    getLugarLatLng
}