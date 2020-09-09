// Req

const fs = require('fs');

let listadPorHacer = [];

const guardarDB = () => {

    let data = JSON.stringify(listadPorHacer);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo guardar', err);
    });
}

const cargarDB = () => {

    try {
        listadPorHacer = require('../db/data.json');
    } catch (error) {
        listadPorHacer = [];
    }
}

const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadPorHacer.push(porHacer);
    guardarDB();

    return porHacer;
}

const getListado = () => {
    cargarDB();
    return listadPorHacer;
}

const actualizar = (descripcion, completado = true) => {

    cargarDB();

    let index = listadPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    });

    if (index >= 0) {
        listadPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else return false;

}

const borrar = (descripcion) => {

    cargarDB();

    // let index = listadPorHacer.findIndex(tarea => {
    //     return tarea.descripcion === descripcion;
    // });

    // if (index >= 0) {
    //     let eliminado = listadPorHacer.splice(index, 1);
    //     console.log('El elemento eliminado', eliminado);
    //     guardarDB();
    //     return `Se elimino la tarea: ${eliminado[0].descripcion}`;
    // } else return `No existe la tarea: ${descripcion}`;

    let nuevoListado = listadPorHacer.filter(tarea => {
        return tarea.descripcion !== descripcion;
    });

    listadPorHacer = nuevoListado;
    guardarDB();
    return `La tarea ${descripcion} fue borrada`;
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}