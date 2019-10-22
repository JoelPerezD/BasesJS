//Objetos en js 
// destructurar objetos 
var joel = {
// key: value 
nombre: 'Joel',
apellido: 'Perez',
edad: 22
}

var sofia={
    nombre: 'Sofia',
    apellido: 'Valenzuela',
    edad: 47   
}

function imprimirMayus(persona){
    //var nombre = persona.nombre
    var {nombre} = persona
    console.log(nombre.toUpperCase())
    
}
imprimirMayus(sofia)
imprimirMayus(joel)
//imprimirMayus({nombre: 'Roberto'})