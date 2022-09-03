const retrasar = milisegundos => new Promise(resolve => setTimeout(resolve, milisegundos));

const obtenerPcias = async () => {
        await retrasar(1800);
        try {
        const consulta = await fetch("https://apis.datos.gob.ar/georef/api/provincias")
        .then(response => response.json())
        .then(data => console.log(data));
        } catch (err){console.log(err)}

}

//console.log(obtenerPcias());

const obtenerDpto = async () => {
        await retrasar(1800);
        try {
        const consulta = await fetch("https://apis.datos.gob.ar/georef/api/departamentos")
        .then(response => response.json())
        .then(data => console.log(data));
        } catch (err){console.log(err)}

}

//console.log(obtenerDpto());

const obtenerLocalidad = async () => {
        await retrasar(1800);
        try {
        const consulta = await fetch("https://apis.datos.gob.ar/georef/api/localidades")
        .then(response => response.json())
        .then(data => console.log(data));
        } catch (err){console.log(err)}

}

//console.log(obtenerLocalidad());

const consultarDatos = async () => {
        try{
          const provincias = obtenerPcias();
          const datos = obtenerDpto();
          const localidades = obtenerLocalidad();
        } catch (err){console.log(err)}
    }

//console.log(consultarDatos());
const funcs = {retrasar, obtenerDpto, obtenerLocalidad, obtenerPcias };
export default funcs;