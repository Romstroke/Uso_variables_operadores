// Se crean dos variables con sus respectivos valores     
// var num1 = 1; 
// var num2 = 2;

// // Se suman ambas variables y el resultado se guarda en una nueva     
// var resultado = num1 + num2;

// // Se muestra el resultado en la consola     
// console.log(resultado); 

//Realizar operaciones con dos números. Para ambos números, calcular lo siguiente: 
//● Suma ● Resta ● División ● Multiplicación ● Módulo 

//Pedir al usuario que ingrese dos números diferentes y mayores a cero. 
const num1 = Number(prompt('Ingrese un primer número (mayor a 0), por favor:'));
const num2 = Number(prompt('Ingrese un segundo número (diferente del primer número y mayor a 0), por favor:'));

//Calcular suma ambos números: 
const resultadoSuma = num1 + num2;

//Calcular resta ambos números: 
const resultadoResta = num1 - num2;

//Calcular división ambos números: 
const resultadoDivision = num1 / num2;

//Calcular multiplicación ambos números: 
const resultadoMultiplicacion = num1 * num2;

//Calcular módulo ambos números: 
const resultadoModulo = num1 % num2;

//Calcular exponenciación, donde num1 es base y num2 potencia:
const resultadoExponenciacion = num1 ** num2
const exponenciacionMetodoPow = Math.pow(num1,num2)

//Salida
//interpolación
document.write(`${num1} sumado a ${num2} es ${resultadoSuma}<br>
                La resta es: ${resultadoResta}<br>
                El resultado de la división es: ${resultadoDivision}<br>
                La multiplicación es: ${resultadoMultiplicacion}<br>
                El residuo es: ${resultadoModulo}<br>
                La exponenciación de ${num1} elevado a ${num2} es igual a ${resultadoExponenciacion} <br>
                Y usando el método math.pow, ${num1} elevado a ${num2} es igual a ${exponenciacionMetodoPow}
                `);


