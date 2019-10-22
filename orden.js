// manejando el orden y asincronismo en js
const API_URL = 'https://swapi.co/api/' // tenemos la api
const PEOPLE_URL ='people/:id'
var opts = { crossDomain: true}
/*para manejar el orden se hace una funcion como segundo parametro
function obtenerPersonaje(id, callBack){
    const url =`${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $.get(url, opts,function(person){
        console.log(`Hola, soy ${person.name}`)
        if(callBack){
            callBack()
        }
    })
} */
function obtenerPersonaje(id, callBack){
    const url =`${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $
    .get(url, opts,callBack)
    .fail(() =>{
        console.log(`no se pudo obtener el personaje ${id}`)
    })
    // basicamente un call bach es una funcion que esta como parametro en otra 
}

// el infierno de los callbacks
    obtenerPersonaje(1, function(personaje){
        console.log(`Hola, soy ${personaje.name}`)
    obtenerPersonaje(2, function(personaje){
        console.log(`Hola, soy ${personaje.name}`)
        obtenerPersonaje(3)
    })
})

//manejo de errores, como solucionar si nos quedamos sin internet




