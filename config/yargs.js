const optsCrear = {
    descripcion: {
        alias: 'd',
        demand: true,
        desc: 'Descripicion de la tarea por hacer'
    }
};

const optsActualizar = {
    descripcion: {
        alias: 'd',
        demand: true,
        desc: 'Descripicion de la tarea por hacer'
    },
    completado: {
        alias: 'c',
        default: true,
        type: 'boolean',
        desc: 'Marca como completado o pendiente la tarea'
    }
};

const optsBorrar = {
    descripcion: {
        alias: 'd',
        demand: true,
        desc: 'Descripcion de la tarea a borrar'
    }
};

const argv = require('yargs')
    .command('crear', 'Crea una tarea por hacer', optsCrear)
    .command('listar', 'Mostra una tarea por hacer')
    .command('actualizar', 'Actualiza una tarea por hacer ', optsActualizar)
    .command('borrar', 'Borra una tarea de la lista por hacer ', optsBorrar)
    .help()
    .argv;


module.exports = {
    argv
}