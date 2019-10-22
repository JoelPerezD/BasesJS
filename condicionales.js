// condicionales

joel={
    nombre:'Joel',
    apellido:'Perez',
    edad: 22,
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
const MAYORIA_DE_EDAD = 18 // la constante que no cambia 
// regresa las personas que son mayores de edad
function esMayor(persona){
    return persona.edad>=MAYORIA_DE_EDAD
}
function mayorEdad(persona){
    // revisa si la persona es mayor, si no regresa nada se va al else 
    if(esMayor(persona)){
        console.log(`${persona.nombre} es mayor de edad`)

    }else{
        console.log(`${persona.nombre} es menor de edad`)
    }
}