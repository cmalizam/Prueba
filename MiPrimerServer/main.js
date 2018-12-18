/*
class Pelicula{

    constructor(id, nombre){
        this.id = id;
        this.nombre = nombre;        
    }

    reproducir(){
        return 'Reproduciendo pelicula... ' + this.nombre;
    }
}
*/

/* import Pelicula from "./Pelicula";

const objetoPelicula = new Pelicula(1, 'Harry');

console.log(objetoPelicula.reproducir());
*/

/* Probar una Clase */
    const Pelicula = require('./Pelicula.js');
    const objetoPelicula = new Pelicula(1, 'Harry..!!');
    console.log(Pelicula);
    console.log(objetoPelicula.reproducir());
/* Fin Probar una Clase */

/* Probar el Modulo del Sistema Operativo de NodeJS */
/*    const os = require('os');
    console.log(os.platform());
    console.log(os.release());
    console.log("Free Mem: ", os.freemem(), ' bytes');
    console.log("Free Total: ", os.totalmem(), ' bytes');
/* Fin Probar un Modulo de NodeJS */

/* Probar el Modulo de Archivos de NodeJS */
/*    const fs = require('fs');
    fs.writeFile('./texto.txt','Linea Uno Dos', function(err){
        if(err){
            console.log(err);
        }

        console.log('Archivo Creado..!!');
    });
    console.log('Ultima Linea de Codigo..!!');

    fs.readFile('./texto.txt',function(err, data){
        if(err){
            console.log(err);
        }
        console.log(data.toString());
    });
/* Fin Probar el Modulo de Archivos de NodeJS */

/* Probar el Modulo HTTP de NodeJS */
const http = require('http');
const colors = require('colors');

const handleServer = function(request, response){
    response.writeHead(200, {'Content-type':'text/html'});
    response.write('<h1>Hola Mundo desde NodeJS</h1>');
    response.end(); 
}

const servidor = http.createServer(handleServer);
servidor.listen(3000, function(){
    console.log('Servidor ejecutandose en el puerto 3000 fgfdg....!!'.green);
})
