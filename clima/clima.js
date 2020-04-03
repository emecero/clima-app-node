const axios = require('axios');



const getClima = async(lat, lng) => {

    const resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lat}&appid=65a43752c1dfdd0d686abecc7206c8ab&units=metric`)

    return resp.data.main.temp;

}


module.exports = {
    getClima
}