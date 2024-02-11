//Crear un programa que solicite al usuario 5 números y realice los cálculos que se piden a continuación.
let numeroUno = Number(prompt('Hola usuario, ingresa 5 números para realizar unos cálculos, por favor el primero:'));
let numeroDos = Number(prompt('Por favor el segundo:'));
let numeroTres = Number(prompt('Por favor el tercero:'));
let numeroCuatro = Number(prompt('Por favor el cuarto:'));
let numeroCinco = Number(prompt('Por favor el quinto:'));

//Imprimir números en tabla
document.querySelector('#uno').innerHTML=`${numeroUno}`
document.querySelector('#dos').innerHTML=`${numeroDos}`
document.querySelector('#tres').innerHTML=`${numeroTres}`
document.querySelector('#cuatro').innerHTML=`${numeroCuatro}`
document.querySelector('#cinco').innerHTML=`${numeroCinco}`

//CALCULOS

//La suma de todos los números.
let sumaTotal = numeroUno + numeroDos + numeroTres + numeroCuatro + numeroCinco;

//El promedio de los 5 números ingresados. 
let promedioTotal = sumaTotal / 5;

//Imprimir resultado cálculos
document.querySelector("#sumaTotal").innerHTML=`La suma total es: ${sumaTotal}`;
document.querySelector("#promedio").innerHTML=`El promedio total es: ${promedioTotal}`;
