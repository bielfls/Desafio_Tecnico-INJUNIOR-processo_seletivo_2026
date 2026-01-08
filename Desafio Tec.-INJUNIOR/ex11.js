let len = Number(prompt("Quantos números deseja analisar?"));
let num, array=[], total = 0;
for(let i=0; i<len; i++){
    num = Number(prompt(`${i+1}º Número:`));
    array.push(num);
}
for(let i=0; i<len-1; i++){
    if(array[i]<array[i+1]) total++;
}
console.log(total);