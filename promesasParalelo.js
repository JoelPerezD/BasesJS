const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id' 
const opst = {crossDomain: true}

function obtenerUnaPersona (id) {
    return new Promise((resolve, reject)=>{ 
      
        url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
        $.get(url, opst, function(data){  // la data es el personaje
            resolve(data) // se ejecuta hasta que el get sea exitoso
        })
        .fail(()=> reject (id)) 
    })
}

// si entra al catch ejecuta la funcion onError, recibe la id e imprime en consola el error
function onError(id){
    console.log (`Sucedio un error al obtener el personaje ${id}`)
}

var ids = [1,2,3,4,5,6,7]
// promesas encadebadas en paralelo
// se genera un array donde cada elemento es una promesa 
// se utiliza un map el cual toma el elemnto del array y regresa una pormesa 
var promesas =ids.map(id => obtenerUnaPersona(id))
Promise
.all(promesas)
.then(personajes =>console.log(personajes))
.catch(onError)

/* se llama al metodo all que tiene la clase de promesas
se le pasa el array de promesas, el metodo se encadena con
el .then con los valores que esperamos de cada una de las promesas */