
//El nombre de la clase debe de ir en mayusculas
class Pokemon {
// se pone # para hacer el encapsulamiento y lo hace un dato privados y para acceder a ellos con set y get

    #name = '';
    #type = '';
    evolutions = [];

//Ayuda a inicializar los valores objetos
    constructor(name,type,evolutions) {
    //hace referencia al elemento de la clase
        this.#name = name;
        this.#type = type;
        this.evolutions = evolutions;
    }
//Atributos para acceder a ellos con set
    set name (name){
        this.#name = name;
    }
    set type(type){
        this.#type = type;
    }
//Obtener los valores
     get name(){
         return this.#name;
     }
     get type(){
         return this.#type;
     }

          //Método
        attack(){
            return `${this.name} esta atacando`
        }
        
        evolve(evolution = 0){
            //valida que la opción exista
                //diferente parametro                 //valor por defecto
            const EVOLVE = this.evolutions[evolution] || '';
            let message = 'No puedo evolucionar';

            if (EVOLVE){
                message = `${this.name} esta evolucionando a ${EVOLVE}`;
                this.name = EVOLVE;

            }
            return message;
        }
 }

 //Herencia
 class TypeFire extends Pokemon{

    constructor( name, evolutions){
        //rellena el constructor
        super(name, 'fire', evolutions)

    }

//método
    message (){
        return `Hola soy ${this.name} y soy de tipo fuego`
    }

 }
const charmander = new TypeFire( 'Charmander',['Charmeleon','Charizar']);
charmander.name = 'Gato';

console.log(charmander.message());








// // Crear instancias
// const Charmander = new Pokemon('Charmander','Fire',['Charmeleon', 'Charizar']);
// const Squirtle = new Pokemon('Squirtle','Water',['Wartortle', 'Blastoise']);

// console.log((`${Charmander.name} es de tipo ${Charmander.type}`));
// console.log(Charmander.attack());
// console.log(Charmander.evolve(0));
// console.log((`${Charmander.name} es de tipo ${Charmander.type}`));

// console.log('---------------------------------------------------');

// console.log((`${Squirtle.name} es de tipo ${Squirtle.type}`));
// console.log(Squirtle.attack());
// console.log(Squirtle.evolve(0));
// console.log((`${Squirtle.name} es de tipo ${Squirtle.type}`));