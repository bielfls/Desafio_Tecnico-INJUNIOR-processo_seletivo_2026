let frase = (prompt("Digite uma frase:")).toLowerCase().split(" ").join("");
let frase_reverse = frase.split("").reverse().join("")
if(frase == frase_reverse){
    console.log("É um palíndromo");
} else{
    console.log("Não é um palíndromo");
}