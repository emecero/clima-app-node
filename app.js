const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');


const argv = require('yargs').options({
    direction: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

// clima.getClima(40.750000, -74.000000)
//     .then(console.log)
//     .catch(console.log);

// lugar.getLugarNatLong(argv.direction)
//     .then(console.log);

const getInfo = async(direction) => {

    try {
        const coords = await lugar.getLugarNatLong(direction);
        const temp = await clima.getClima(coords.lat, coords.lng);
        return `El clima de ${coords.direction} es de ${temp}º`;

    } catch (error) {
        return `No se pudo determinar el clime de ${direction}`;
    }

}

getInfo(argv.direction)
    .then(console.log)
    .catch(console.log);