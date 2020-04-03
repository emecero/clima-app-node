const axios = require('axios');


const getLugarNatLong = async(dir) => {

    const encodedUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        headers: { 'x-rapidapi-key': '18eb017baemshdbbe2f6af208ea3p1208f7jsna96cbb6adec1' }
    });

    const resp = await instance.get()

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${dir}`)
    }

    const data = resp.data.Results[0];
    const direction = data.name;
    const lat = data.lat;
    const lng = data.lng;

    return {
        direction,
        lat,
        lng
    }


}


module.exports = {
    getLugarNatLong
}