// clases son prototipos
// para definir un prototipo de define un afuncion 
// se crea el constructor, la duncion que se ejecuta cuando se crea una nueva persona    

 // prototipo desarrollador responde metodo si no busca en prototipo padre y asi sucesivamente 
// antes para heredar se tenia que hacer otra funcion
// ya no se hace asi 
function heredaDe(PrototipoHijo, PrototipoPadre){
    var fn = function () {}
    fn.prototype = PrototipoPadre.prototype
    PrototipoHijo.prototype = new fn
    PrototipoHijo.prototype.constructor = PrototipoHijo
}


function Persona(nombre, apellido, estatura){
    this.nombre=nombre
    this.apellido=apellido
    this.estatura=estatura
}
Persona.prototype.saludar=function(){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}
// esta definida como arrow function 
/*Persona.prototype.soyAlto=() =>{
    if(this.estatura >=1.8){
        //console.log('Soy alto')
    }else{
        //console.log('estoy chaneque uwu')
    }*/
/*Persona.prototype.SoyAlto=()=>{
    debugger
    return this.estatura > 1.8 //regresa un false o true 
    // cuando las funciones hacer referencia al this no se utiliza el arrow function
}*/
Persona.prototype.SoyAlto=function(){
    return this.estatura>=1.8
}


// 
//var sofia = new Persona('Sofia','Vlza', 1.58)
 // el codigo es lineal, siempre se definen los prototipos antes de utilizarlo
 // sin modificarlos

 function Desarrollador(nombre, apellido){
     this.nombre=nombre
     this.apellido=apellido
     
 }
 heredaDe(Desarrollador,Persona) 
 // cuando se hace con la funcion para heredar se debe de crear justo desoues de la clase
 Desarrollador.prototype.saludar = function(){
     console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy Desarrolador`)
 }

/// clases en JS 






