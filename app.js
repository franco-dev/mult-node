const argv = require('./config/yargs').argv;
const colors = require('colors/safe');

const {
  createFile,
  listarTabla
} = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
  case 'listar':
    listarTabla(argv.base, argv.limite);
    break;
  case 'crear':
    createFile(argv.base, argv.limite)
      .then((archivo) => {
        console.log(`Created file: ${ colors.green(archivo) }`);
      })
      .catch((err) => {
        console.log(err);
      });
    break;
  default:
    console.log('Comando no reconocido');
    break;
}


/* let parametro = argv[2];
let base = parametro.split('=')[1]; */