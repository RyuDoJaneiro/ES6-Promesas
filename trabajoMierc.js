/*1)
Vamos a simular una carrera entre tres personas, Juan, Mario, Martín. El orden de largada será siempre el siguiente:
1- Juan
2- Mario
3- Martín
El orden de llegada se determina conforme el nombre de cada uno vaya apareciendo en la consola de modo que el ganador
será aquel cuyo nombre sea el primero en aparecer.

Utilizando solamente el setTimeOut y sin alterar el orden de largada escribir el código necesario para obtener 
los siguientes resultados:
Vuelta N° 1: Mario, Martín, Juan
Vuelta N° 2: Juan, Martín, Mario
Vuelta N° 3: Martín, Juan, Mario
Vuelta N° 4: Mario, Juan, Martín*/

const Juan = "Juan", Mario = "Mario", Martín = "Martín";

let Llegada = (nombre1, nombre2, nombre3, segundos, numeroVuelta) => {
        setTimeout(() => console.log(`Largada: 1. ${Juan}, 2. ${Mario}, 3. ${Martín}`), segundos - 1)
        setTimeout(() => console.log("Vuelta N° " + numeroVuelta), segundos)
        setTimeout(() => console.log(nombre1), segundos);
        setTimeout(() => console.log(nombre2), segundos + 1);
        setTimeout(() => console.log(nombre3), segundos + 2);
        console.log(" ");
        return;
};

//console.log(Llegada("Mario", "Martín", "Juan", 1, "1"));
// console.log(Llegada("Juan", "Martín", "Mario", 2, "2"));
// console.log(Llegada("Martín", "Juan", "Mario", 3, "3"));
// console.log(Llegada("Mario", "Juan", "Martín", 4, "4"));

/*2)*/

let gitHub = async () => {
        await fetch("https://api.github.com/repositories")
        .then(response => response.json()).then();
}

console.log(gitHub());

/*Generar una función que a partir de las respuestas del punto anterior retorne un array de los nombres de usuario*/

async function Owners()
{
        let respuesta = await gitHub();
        let arrayObjetos = await Object.keys(respuesta).map(nombres => nombres.owner.login);
        return arrayObjetos;
}

console.log(Owners());