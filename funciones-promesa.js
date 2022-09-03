/*1)
const promesa = new Promise((resolve, reject)=>{

        if( 10 === 11){
            resolve('Los valores son iguales');
        } else {
            reject('Los valores son distintos')
        }

    });
*/

const promesa = new Promise((resolve, reject) => 11 === 11 ? resolve("Los valores son iguales") 
        : reject("Los valores son distintos"));
console.log(promesa
        .then(respuesta => console.log(respuesta))
        .catch(error => console.log(error)));

/*2)
// Promesa dentro en una función.
    function promesaDos(provincia){

        const promesa = new Promise( (resolve, reject)=> {
        
                if('Formosa' === provincia){
                    resolve('Usted está ubicado en Formosa');
                } else {
                    reject('Error al realizar la consulta')
                }

        });

        return promesa;
    }

    promesaDos()
*/

let promesaDos = provincia => new Promise((resolve, reject) => "Formosa" === provincia 
        ? resolve("Usted está ubicado en Formosa") : reject("Error al realizar la consulta"));
        
console.log(promesaDos("Formosa").then(resp => console.log(resp)).catch(err => console.log(err)));

/*3)
function promesaTres(valorBooleano){

        new Promise( ()=> {
            ( true === valorBooleano )
            ? resolve('Los valores son iguales')
            : reject('Los valores son distintos')
        })
        
    }
*/

let promesaTres = valorBooleano => new Promise((resolve, reject) => true === valorBooleano 
        ? resolve("Los valores son iguales") : reject("Los valores son distintos"));

console.log(promesaTres(false).then(resp => console.log(resp)).catch(err => console.log(err)));

/*4)
function promesaCuatro(){

        new Promise( ()=> {
            ( true === arguments )
            ? resolve('Los valores son iguales')
            : reject('Los valores son distintos')
        })
        
}
*/

let promesaCuatro = async () => await true === arguments 
? console.log("Los valores son iguales") : console.log("Los valores son distintos");

console.log(promesaCuatro(true).then(resp => console.log(resp)).catch(err => console.log(err)));
