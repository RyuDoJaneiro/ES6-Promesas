/*1)
function saludar(nombre){
    let nombre = nombre;
    return 'Hola ' + nombre;
}

// Mostrar el resultado por consola
saludar('Alejandro');
*/

let saludar = nombre => `${nombre}`;
    
// Mostrar el resultado por consola
console.log(saludar('Lautaro'));

//================================================

/*2)
function multiplicar(a, b){
     const resultado = a + b;
     return resultado;
}
*/

let multiplicar = (a, b) => a * b;

console.log(multiplicar(2, 2));

/*3)
function crearAlumno(nombre, apellido, edad, materias){
    let alumno = {
        nombre: nombre,
        apellido: apellido,
        edad: edad,
        materias: materias
    }

    return alumno;
}
*/

let crearAlumno = (nombre, apellido, edad, materias) => ({nombre, apellido, edad, materias})

console.log(crearAlumno("Pablo", "Villavicencio", 20, ["Química", "Física", "Programación"]));

/*4)
function devolverFecha(){
    return 'Hoy es ';
}
// Mostrar el resultado por consola.
devolverFecha('10','09','2022');
*/

let devolverFecha = (a, b, c) => `Hoy es ${a}/${b}/${c}`;

console.log(devolverFecha("21", "09", "2003"));