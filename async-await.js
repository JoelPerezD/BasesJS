//async await
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

function onError(id){
    console.log (`Sucedio un error al obtener el personaje ${id}`)
}
async function obtenerPersonajes(){ 
var ids = [1,2,3,4,5,6,7]
var promesas=ids.map(id => obtenerUnaPersona(id))
try{
var personajes = await Promises.all(promesas)
 // se utilixa await para ejecutar otras cosas
console.log(personajes)
} catch(id){
	onError(id)

}

}

obtenerPersonajes()


