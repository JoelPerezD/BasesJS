// funcion que imprime nombre y edad

persona={ nombre :'Joel', edad: 22}
function nombreEdad(nombre, edad){
var {nombre, edad} = persona
// comas invertida
console.log(`Hola, mi nombre es ${nombre} y tengo ${edad}`)
}
nombreEdad(persona)


