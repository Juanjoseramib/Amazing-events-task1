// para puntos 1-4
// let num1 = Number(prompt("Ingrese el numero 1 "));
// let num2 = Number(prompt("Ingrese el numero 2 "));
// let num3 = Number(prompt("Ingrese el numero 3 "));

// punto 1
// function numeroMayor(num1, num2) {
//   if (num1 > num2) {
//     return num1 + " es mayor que " + num2;
//   }
//   return "el numero 1 no es mayor";
// }
// console.log(numeroMayor(num1, num2));

// punto 2
// function numerosIguales(num1, num2) {
//   let bool = num1 === num2;
//   if (bool) {
//     return "son iguales";
//   }
//   return "los numeros son diferentes";
// }
// console.log(numerosIguales(num1, num2));

// punto 3
// function cualEsMayor(num1, num2) {
//   if (num1 > num2) {
//     return num1 + " es el mas grande";
//   } else if (num2 > num1) {
//     return num2 + " es el mas grande";
//   } else {
//     return "son numeros iguales";
//   }
// }
// console.log(cualEsMayor(num1, num2));

// punto 4
// function numeroMenor(num1, num2, num3) {
//   let nmenor = Math.min(num1, num2, num3);
//   return nmenor + " es el menor de los tres";
// }
// console.log(numeroMenor(num1, num2, num3));

// punto 5

// const persona1 = {
//   nombre: "juan",
//   edad: 24,
//   altura: 1.85,
// };
// const persona2 = {
//   nombre: "Sara",
//   edad: 26,
//   altura: 1.7,
// };
// if (persona1.altura < persona2.altura && persona1.edad > persona2.edad) {
//   console.log(
//     `La persona con mas altura es ${persona2.nombre} y la persona mayor edad es ${persona1.nombre}`
//   );
// } else {
//   console.log("son iguales");
// }

// punto 6

// let nombre = prompt("Ingrese su nombre");
// let edad = parseInt(prompt("Ingrese su edad"));
// let altura = parseFloat(prompt("Ingrese su altura"));
// let vision = parseInt(prompt("Ingrese su estado de la vision"));

// function estaHabilitado(edad, altura, vision) {
//   let minAltura = 1.5;
//   let minEdad = 18;
//   let minVision = 8;
//   if (edad >= minEdad && altura > minAltura && vision >= minVision) {
//     return nombre + " Estas habilitado para manejar ";
//   } else {
//     return nombre + " no eres aptx para manejar";
//   }
// }
// console.log(estaHabilitado(edad, altura, vision));

// punto 7
// let nombre = prompt("Ingrese nombre");
// let pase = prompt("Ingrese el tipo de pase (vip o normal)");
// let entrada = prompt("posee entrada? (si o no, s o n)");
// let nombreIgual = nombre === "Juan";

// if (nombreIgual === true || pase === "vip") {
//   alert("Bienvenidos, usted posee pase libre");
// } else if (entrada === "si") {
//   let utilizarEntrada = prompt("¿Desea utilizar su entrada?");
//   if (utilizarEntrada === "si") {
//     alert("Bienvenido");
//   } else {
//     alert("Gracias por su visita");
//   }
// } else if (nombreIgual === false && pase === "normal" && entrada === "no") {
//   let comprarEntrada = prompt("¿Desea comprar una entrada?");
//   if (comprarEntrada === "si") {
//     let dineroDisponible = parseInt(prompt("Ingrese dinero disponible"));
//     if (dineroDisponible >= 1000) {
//       alert("Usted compró una entrada. Bienvenido");
//     } else {
//       alert("Lo siento, no tienes dinero suficiente");
//     }
//   } else {
//     alert("Gracias por visitarnos. Hasta pronto");
//   }
// } else {
// }

// ejercicio 10

// const jugador1 = prompt("Jugador1 Ingresa PIEDRA, PAPEL O TIJERA")
// const jugador2 = prompt("Jugador2 Ingresa PIEDRA, PAPEL O TIJERA")

// function juego(uno,dos){

//         if(jugador1 === "piedra" && jugador2 === "tijera"){

//             alert(Gana jugador1)
//         }
//         else if(jugador1 === "papel" && jugador2 === "piedra"){
//             alert(Gana jugador1)
//         }
//         else if (jugador1=== "tijera" && jugador2 === "papel"){
//             alert (Gana jugador1)
//         }

//         else if(jugador2 === "piedra" && jugador1 === "tijera"){

//             alert(Gana jugador2)
//         }
//         else if(jugador2 === "papel" && jugador1 === "piedra"){
//             alert(Gana jugador2)
//         }
//         else if (jugador2=== "tijera" && jugador1 === "papel"){
//             alert (Gana jugador2)
//         }

//         else if (jugador1 !=="papel"  jugador1 !=="tijera"  jugador1 !=="piedra"   jugador2 !=="piedra"  jugador2 !=="papel" || jugador2 !=="tijera"){
// alert("Hiciste trampa")
//         }
//         else {
//             alert ("Es un tremendo Empate")
//         }
// }

// juego(jugador1,jugador2)

// ejercicio 11

// const colorIngresado = prompt("Ingrese un color: ");
// function colores(color) {
//     switch (color) {
//       case "blanco":
//         alert("Falta de color");
//         break;
//       case "negro":
//         alert("Falta de color");
//         break;
//       case "verde":
//         alert("El color de la naturaleza");
//         break;
//       case "azul":
//         alert("El color del agua");
//         break;
//       case "amarillo":
//         alert("El color del sol");
//         break;
//       case "rojo":
//         alert("El color del fuego");
//         break;
//       case "marron":
//         alert("El color de la tierra");
//         break;
//       default:
//         alert("Excelente elección, no lo teníamos pensado");
//     }
//   }

//   colores(colorIngresado);
