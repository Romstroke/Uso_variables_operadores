//Crear un programa que pida al usuario una cantidad de días y que muestre su equivalente en Años, Semanas y Días. Por ejemplo, si el usuario ingresa 373, el resultado debe ser 1 año, 1 
//semana y 1 día. (3 Puntos) Se debe considerar lo siguiente:  
// 1 año tiene 365 días
//  1 semana tiene 7 días

///////////Pregunta 4 prueben desarrollarlo para ejecutarlo solo con Node, para ese caso el dato de entrada
///////////considerémoslo una constante con un valor asignado, para la salida de datos usar console.log con
///////////concatenación e interpolacion

//petición de dato dias a usuario por prompt
// let diasUsuario = Number(prompt('Ingrese una cantidad de días a su antojo y sólo en números, por favor:'));

//lo que me de como parte entera es la cantidad de años 
//al dividir los numeros del usuario por 1 entre 365 y con un math.floor y ahi me daria la cantidad de años

//constante para probar con node, cambiar para probar funcionamiento (hay que estar en la ruta exacta del archivo para ejecutar en terminal)
const dias = 600;
//proceso
const anos = Math.floor(dias / 365); // el cociente entero de dias/365 da los años
const semanas = Math.floor((dias % 365) / 7); // residuo de dias/365 y despues el cociente entre 7 para semanas
const diasRestantes = (dias % 365) % 7; // residuo de dias/365 y despues residuo entre 7
//  salida de datos
// console.log(`${anos} año${anos !== 1 ? 's' : ''}, ${semanas} semana${semanas !== 1 ? 's' : ''} y
//              ${diasRestantes} día${diasRestantes !== 1 ? 's' : ''}`);
console.log(`Años: ${anos}  Semanas: ${semanas}  Dias: ${diasRestantes}`);



