//class=> molde, plano,fabrica
class pokemon{
     //caracteristicas que tiene este plano
     Nombre;
     Tipo;
     Ataque;
     Defensa;
     PuntosVida;

     //metodos , directamente por su nombre
     //Y TODA CLASE va a tener un metodo constructor
     //este constructor se ejecuta automaticamente al momento de llamar a la clase
     constructor(nombre,tipo,ataque,defensa,puntosdevida){
         //se va encargar de construir el objeto
         //this, hace referencia a si mismo
         this.Nombre=nombre;
         this.Tipo=tipo;
         this.Ataque=ataque;
         this.Defensa=defensa;
         this.PuntosVida=puntosdevida;

         this.aparecer();
     }
     aparecer(){
         console.log(`Un ${this.Nombre} salvaje aparecio`);
     }
     atacar(){
         console.log(`${this.Nombre}Ataca con ${this.Ataque}`);
     }
 }
 //instancia
 let pokemon1=new pokemon("pikachu","electrico",30,20,60);
 let pokemon2=new pokemon("dragonite","dragón",70,80,120);
 console.log(pokemon1.Tipo);
 console.log(pokemon2.atacar());