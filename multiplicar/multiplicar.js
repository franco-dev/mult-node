const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {
    console.log('**************************'.green);
    console.log(`******* tabla de ${ base } *******`.green);
    console.log('**************************'.green);
    
    
    
    for (let i = 0; i < limite; i++) {
        console.log(`${ base } * ${ i + 1 } = ${ base * ( i + 1 ) }\n`);
    }
};

let createFile = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${ base } no es un numero.`);
            return;
        }

        let data = '';

        for (let index = 0; index < limite; index++) {
            data += `${ base } * ${ index + 1 } = ${ (index + 1) * base}\n`;
        }
        fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(`tabla-${ base }.txt`);
            }
        });
    });
};

module.exports = {
    createFile,
    listarTabla,
};