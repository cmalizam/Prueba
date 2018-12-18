
class Pelicula{

    constructor(id, nombre){
        this.id = id;
        this.nombre = nombre;        
    }

    reproducir(){
        return 'Reproduciendo pelicula... ' + this.nombre;
    }
}

//export default Pelicula;
module.exports = Pelicula;