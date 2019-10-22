// condicionales y estructura de control o repetitiva

joel={
    nombre:'Joel',
    apellido:'Perez',
    edad: 22,
    peso: 61,
    programador: false,
    ingeniero: false,
    levantaElEvento: true,
    perreo: true    
}
ruben={
    nombre: 'Ruben',
    edad: 17    
}
function imprimirProfecion(Persona){
   console.log(`${Persona.nombre} es: `)
   if(Persona.levantaElEvento===true && Persona.perreo===true){
    console.log('Levantador de eventos y bien perreador')
   }else{
       console.log('No sirve para nada')
   }
}
const MAYORIA_DE_EDAD = 18 

/*a una variable se le puede otorgar una funcion
var esMayorEdad =function (persona){
    return persona.edad>=MAYORIA_DE_EDAD
}
*/
// arrow function 
//const esMayorEdad = persona => persona.edad>=MAYORIA_DE_EDAD

// tambien se puede hacer de esta manera  
//const esMayorEdad = persona => persona.edad>=MAYORIA_DE_EDAD
const esMayorEdad = ({edad}) => edad>=MAYORIA_DE_EDAD
// reto 
function ImprimirSiMayorEdad(persona){
    
    if(esMayorEdad(persona)){
        console.log(`${persona.nombre} es mayor de edad`)

        console.log(`${persona.nombre} es menor de edad`)
    }
}
function permitirAcceso(persona){
    if(!esMayorEdad(persona))
    {
        console.log('ACCESO DENEGADO')
    }
}

// reto escribir la funcion es menor de edad como Arrow Function 

const esMenorEdad = ({edad}) => edad < MAYORIA_DE_EDAD
function negarAcceso(persona){
    if(esMenorEdad(perosna)){
        console.log('ACCESO NEGADDs')
    }
}

////////////////////// estructura for  
console.log(`Al inicio del año ${joel.nombre} pesaba ${joel.peso.toFixed(2)}kgs`)
const incrementoPeso = 0.3
const diasAnio = 365

const aumentarPeso = persona =>  persona.peso += incrementoPeso
const disminuirPeso = persona => persona.peso-=incrementoPeso
const meta= joel.peso-3
const comeMucho =()=> Math.random()<0.3
const deporte =()=> Math.random()<0.4
//variableparte de condicion y de incremento
/* for (var i=1; i<diasAnio; i++) {
    var random = Math.random()
    if(random <0.25) {
        // se ejecuta el 25% de las 365 veces
        aumentarPeso(joel)

    }else if (random <0.5){
        disminuirPeso(joel )
    }
 }

*/
// estructura while
var dias =0
while(joel.peso>meta){
    if(comeMucho()){
        //aumentar de peso
        aumentarPeso(joel)
    }
    if(deporte()){
        //baja de peso
        disminuirPeso(joel)
    }
    dias+=1

}
console.log(` pasaron ${dias} dias hasta que ${joel.nombre} adelgazo 3 kg`)
console.log(`Al final del año ${joel.nombre} pesa ${joel.peso.toFixed(2)}kgs`)







