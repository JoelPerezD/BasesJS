const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id' 

const opst = {crossDomain: true}

// funcion que regresa una promesa 
function obtenerUnaPersona (id) {
    // se realiza el llamdo asincrono
    return new Promise((resolve, reject)=>{ 
         /*cuando esta funcion se ejecute 
      llamamos a resolve pasandole la data que trae */
        url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
          /*hacemos ese request, como tercer parametro le pasamos nuestro
    callback de la respuesta */
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

// promesas encadenadas
obtenerUnaPersona(1) // se llama a la funcion con la promesa con el id del personaje
    .then(person => { // funcion cuando se resuelve exitodamente
        console.log(`El personaje 1 es ${person.name}`) // se imprime
        return obtenerUnaPersona(2)
    })
    .then(person2 => {
        console.log(`El personaje 2 es ${person2.name}`)
        return obtenerUnaPersona(3)
    })
    .then(person3 => {
        console.log(`El personaje 3 es ${person3.name}`)
        return obtenerUnaPersona(4)
    }) // person viene desde data
    .catch(onError) // el error es el id que llega desde reject


// la variable person viene de data, cuando se resuelve la promesa
// el .then es lo que se espera de la promesa, se espera que imprima el personaje y regrese otra promesa
//