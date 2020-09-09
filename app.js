// Req
const colors = require('colors');
const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');

let comando = argv._[0];
//console.log(argv);


switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(`Crear una tarea por hacer: `, tarea);
        break;

    case 'listar':
        console.log(`Mostrar todas las tareas por hacer`);
        let listado = porHacer.getListado();

        for (let tarea of listado) {
            console.log('========POR HACER========'.green);
            console.log(`Tarea: ${tarea.descripcion}`);
            console.log(`Estado: ${tarea.completado}`);
            console.log('========================== \n'.green);
        }
        break;

    case 'actualizar':
        console.log(`Actualizar una tarea por hacer`);
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);

        if (actualizado) console.log('La tarea fue actualizada');
        else console.log('La tarea no fue actualizada');
        break;

    case 'borrar':
        console.log(`Elimina una tarea del listado`);
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;

    default:
        console.log(`El comando ${comando} no es valido`);
        break;
}