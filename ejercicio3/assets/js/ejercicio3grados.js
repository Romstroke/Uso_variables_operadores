//Crear un programa que pida al usuario ingresar la temperatura en grados Celsius y que la transforme a grados Kelvin y Fahrenheit. 

//pedir a usuario ingresar una temperatura en celcius
let celsiusUsuario = Number(prompt('Hola! ingresa alguna temperatura en grados Celsius (sin °), y sabrás su equivalencia en Kelvin y Fahrenheit:'));

//convertir celsius a kelvin
let celsiusKelvin = celsiusUsuario + 273.15;
// console.log(celsiusKelvin);

//convertir celsius a fahrenheit
let celsiusFahrenheit = (celsiusUsuario * 9/5) + 32;
// console.log(celciusFahrenheit);

//recibir la conversión a kelvin y fahrenheit
document.getElementById('resultado').innerHTML=`Tus ${celsiusUsuario}°C equivalen a ${celsiusKelvin}°K y 
${celsiusFahrenheit} °F. Muchas gracias, espero haya sido de ayuda.`;