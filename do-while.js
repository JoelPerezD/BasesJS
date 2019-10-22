/*var contador = 0
const llueve =() =>  Math.random()<0.25;

do{
contador++
}while(!llueve())
if(contador===1){
    console.log(`Fui a ver si llovia ${contador} vez`) 
}else{
    console.log(`Fui a ver si llovia ${contador} veces`) 
}*/

// esto es un switch en js 
var signo = prompt('Cual es tu signo?') //para ingresar
switch(signo){
    case 'acuario':
    console.log('A bueno')
    break
    case 'pisis':
    console.log('who?')
    break
    
    case 'leo':
    console.log('el mejor signo apoco ni')
     break
    default:
    console.log('No es un signo valido')
        break
}