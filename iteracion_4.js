//PARA QUE NO HAYA CONFLICTOS INICIALIZANDO DOS VECES, HE IDO COMENTANDO LOS EJERCICIOS SEGÚN LOS TERMINABA//
/* 1.1 Consigue el valor "HULK" del array de cars y muestralo por consola. */

const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
var avenger = avengers[0];
console.log(avenger)

/* 1.2 Cambia el primer elemento de avengers a "IRONMAN"*/
avengers[0]="IRONMAN"
console.log(avengers)

 /* 1.3 Console numero de elementos en el array usando la propiedad correcta de Array.
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"]; */
console.log(avengers.length)

/* 1.4 Añade 2 elementos al array: "Morty" y "Summer". 
Muestra en consola el último personaje del array */
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"]; 
rickAndMortyCharacters.push("Morty", "Summer")
console.log(rickAndMortyCharacters)

/* 1.5 Elimina el último elemento del array y muestra el primero y el último por consola.
const*/
 const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
 rickAndMortyCharacters.pop()
 var firstCharacter= rickAndMortyCharacters[0]
 var lastCharacter= rickAndMortyCharacters[4]
 console.log(rickAndMortyCharacters)
 console.log("El primer elemento es " + firstCharacter + " y el último elemento es " + lastCharacter)
 
/* 1.6 Elimina el segundo elemento del array y muestra el array por consola. */
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
rickAndMortyCharacters.splice(1,1)
console.log(rickAndMortyCharacters)