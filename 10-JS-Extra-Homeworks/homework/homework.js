// No cambies los nombres de las funciones.

const henryReadingTime = require("henry-reading-time");
const readingTime = require("henry-reading-time/lib/reading-time");

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var array = [];
  for (i in objeto){
    array.push([i, objeto[i]])
  }
  return array;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var obj = {};  
  for (i = 0; i< string.length ; i++){
    if(Object.keys(obj).includes(string[i])){
      obj[string[i]] = obj[string[i]] + 1
      continue;
    }
    obj[string[i]] = 1
  }
  return obj;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  may = "";
  min = "";
  for (i = 0; i < s.length; i++){
    if (s[i] === s[i].toUpperCase()){
      may = may + s[i];
    } else 
          {
            min = min + s[i]; 
          }
  }
return may.concat(min);
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
 var nuevastring = str.split(" ").map(function(algo){
  return algo.split("").reverse().join("");
 }).join(" "); 
 return nuevastring;
} 




function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
 var cadena = numero.toString(); 
 var cadena2 = ""; 

 cadena2 = cadena.split("").reverse().join("");

  if (cadena === cadena2){
    return "Es capicua"
  } else {
    return "No es capicua"
  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  nuevacadena = "";

  // "Julio"
  for(i = 0; i < cadena.length; i++){
    if(cadena[i]!=="a" && cadena[i]!=="b" && cadena[i]!=="c"){
      nuevacadena += cadena[i];        
      }    
  } 
  return nuevacadena;
 }                     


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  for (let i = 0; i < arr.length; i ++ ){
    var temp = arr[i] 
    var j = i - 1      
    while (j >= 0 && temp.length  < arr[j].length) { 
        arr[j+1] = arr[j]
        j--
    }
    arr[j+1] = temp
}
  return arr;
}
// 

function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí 
  //arr1= [1,2,3] //1 i
  //arr2= [4,5,6] //4 j
  nuevoarray = [];
  for(i = 0 ;i < arreglo1.length; i++){
    for(j = 0; j < arreglo2.length; j++){
      if(arreglo1[i] === arreglo2[j]){
        nuevoarray.push(arreglo1[i])
      }
    }
  }
  return nuevoarray;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

