function verificarIdades(array){
    let array2 = [];
    let ano = Number(prompt("Digite o ano atual:"));
    for(let i=0; i<array.length; i++){
        if(ano - array[i] < 18){
            array2.push("Menor");
        } else{
            array2.push("Maior");
        }
        console.log(`Pessoa ${i+1}: ${array2[i]} de idade`);
    }
    return array2;
}