let num, cond;

function factorial(a){
    if(a==0){
        return 1;
    }
    else{
        return a * factorial(a-1);
    }
}

do{
    do{
        num = Number(prompt("Numero:"));
        if(num<0 || num%1!=0) alert("Numero deve ser inteiro positivo, preencha novamente!");
    }while(num<0 || num%1!=0);
    console.log(`Fatorial de ${num} é igual a ${factorial(num)}`)
    cond = prompt("Quer calcular o fatorial de outro numero? (S/N)");
}while(cond == "S" || cond == "s");