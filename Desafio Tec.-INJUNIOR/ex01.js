let a = Number(prompt("Coeficiente a:"));
let b = Number(prompt("Coeficiente b:"));
let c = Number(prompt("Coeficiente c:"));
let delta = b**2 - 4*a*c;

if(delta<0){
    console.log("Raiz não possui raízes reais");
} else if(delta==0){
    console.log(`Raiz única: ${(-b+(delta)**(1/2))/(2*a)}`);
} else{
    console.log(`Raizes: ${(-b+(delta)**(1/2))/(2*a)} e ${(-b-(delta)**(1/2))/(2*a)}`);
}