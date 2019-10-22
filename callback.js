const API_URL = 'https://swapi.co/api/' // tenemos la api
const PEOPLE_URL ='people/:id'
// para hacer un request en jquery, dos parametros
//var lukeUrl =`${API_URL}${PEOPLE_URL.replace(':id', 1)}`
var opts = { crossDomain: true}
const onResponse=function(person){
    console.log(`Hola, soy ${person.name}`)
}
*/*$.get(lukeUrl, opts)
calback funcion que se ejecuta, no se sabe cuando get la llama, cuando termine el request
 puede que la funcion nunca se llame 
$.get(lukeUrl, opts, onResponse)
function obtenerPersonaje(id){
    const url =`${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $.get(url, opts, onResponse)
}*/

//para manejar el orden se hace una funcion como segundo parametro
function obtenerPersonaje(id){
    const url =`${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $.get(url, opts, onResponse)
}
// primeros 10 personajes
for(var i=1; i<10; i++){
    console.log(obtenerPersonaje(i))
}


