// javascript no es multitarea

//console.log('a')
//setTimeout(()=>console.log('b'), 0) // la funcion se ejecuta dentro de 2 segundos
//console.log('c')

setTimeout(()=>console.log('d'),2000)
for(var i=0; i<10000000000; i++){

}// javascript ejecuta la letra d hasta que recorra todo el for
// cuando realizamos una tarea asincrona "setTimeout" no garantiza QIE NO BLOQIEMOS EL EVENT LOOP
