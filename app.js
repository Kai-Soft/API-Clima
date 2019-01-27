const place = require('./place/place');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad a consultar el clima',
        demand: true
    }
}).argv;

let getInformacion = async(direccion) => {

    try {

        let coordenadas = await place.getLugar(direccion);
        let temp = await clima.getClima(coordenadas.lat, coordenadas.lng);

        return `El clima en la ciudad de ${ coordenadas.direccion } es de ${ temp }`;

    } catch (e) {

        return `No se pudo determinar el clima en la ciudad de ${ direccion }`

    }


}

getInformacion(argv.direccion)
    .then(msj => console.log(msj))
    .catch(e => console.log(e));