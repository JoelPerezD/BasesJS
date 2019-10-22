var joel ={
    nombre: 'Joel',
    apellido:'Perez',
    estatura:1.73,
    cantidadLibros:24

}
var sofia ={
    nombre: 'Sofia',
    apellido:'Valenzuela',
    estatura:1.55,
    cantidadLibros:14
}
var alejando ={
    nombre: 'Alejandro',
    apellido:'Zamoraa',
    estatura:1.72,
    cantidadLibros:25

}
// esto es un arreglo
var personas =[joel, sofia, alejando]   
// personas[0] es el primer objeto 
// personas[0].estatura impime estatura de la primera persona
// perosnas[0]['estatura'] lo mismo que el anterior

/*for( var i=0; i< personas.length; i++){
var persona = personas[i]
console.log(`${persona.nombre} mide ${persona.estatura} mts`)
// va a guardar cada una de las personas y va a imprimir el nombre y estatura 
}
*/
// filtrar personas alto
//const esAlta =persona=> persona.estatura>1.70
const esAlta =({estatura})=> estatura>1.70
const esBaja = ({estatura}) => estatura< 1.70
var personasAltas = personas.filter(esAlta)
var personasBajas =personas.filter(esBaja)
// se puede poner la condicion dentro del filter, lo unico que acepta es funciones 
//var personasAltas = personas.filter(function(persona){
  //  return  persona.estatura>1.70})
//console.log(personasBajas)
//Transformar un array, Funcion MAP 
// la funcion map modifica cada uno de los elentos del array original
// por ejemplo convertir la altura a cms

const pasarAlturaCms = persona =>({
    //persona.estatura*=100
    //return persona
    // map modifica el array original
    // asi que se realiza esto para mantener el array original
       ...persona,
       estatura: persona.estatura*100 
   })
var cms = personas.map(pasarAlturaCms)
//console.log(cms)

//////reduce 
/* normalmente asi se haria para cantidad libros 
var acum =0
for(var i=0; i<personas.length; i++){
acum = acum +personas[0].cantidadLibros
}
*/
const reducer = (acum, {cantidadLibros})=>acum+cantidadLibros

var totalLibros= personas.reduce(reducer,0)
console.log(`Total de libros: ${totalLibros}`)

