function fibonacci(num){
    if(num==0){
        return 0;
    }
    else if(num==1){
        return 1;
    }
    else{
        return fibonacci(num-1) + fibonacci(num-2);
    }
}

let num = Number(prompt("Digite um número inteiro positivo:"));
for(let i=0; i<num; i++){
    console.log(`${i+1}º Termo: ${fibonacci(i)}`);
}