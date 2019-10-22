// clases
// sigue funcionando como porotipo
class Persona{
    constructor(nombre, apellido, estatura){
        this.nombre=nombre
        this.apellido=apellido
        this.estatura=estatura
    }

    saludar(fn){
        var {nombre, apellido} =this
        console.log(`Hola, me llamo ${nombre} ${apellido}`)
        if(fn){
           fn(nombre,apellido,false) 
        }
    }

    soyAlto(){
        return this.estatura>=1.8
    }
}
class Desarrollador extends Persona{
    constructor(nombre,apellido,estatura){
        super(nombre,apellido,estatura)        
    }
    saludar(fn){
        // var nombre = this.nombre
        // var apellido = this.apellido
        var {nombre, apellido} =this
        console.log(`Hola, me llamo ${nombre} ${apellido} y soy desarrolador`)
        if(fn){
           fn(nombre,apellido,true) 
        }
    }

}
// se pueden pasar funciones como parametros
// esDev es boolean
// respondersaludo se paso como fn a la funcion dentro de persona y desarrolador saludar(fn)
function responderSaludo(nombre, apellido, esDev){
    console.log(`Buen dia ${nombre} ${apellido}` )
    if(esDev){
        console.log(`No sabia que eras dev`)
    }
}

var joel = new Persona("Joel","Perez",1.72)
var sofia = new Persona("Sofia","Vlza",1.55)
var ale= new Desarrollador("Ale","Zamo",1.88)

joel.saludar(responderSaludo)
sofia.saludar()
ale.saludar(responderSaludo)

//funciones asincronas 




