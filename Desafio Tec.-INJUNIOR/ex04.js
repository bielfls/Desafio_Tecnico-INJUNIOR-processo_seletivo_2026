let real = Number(prompt("Digite o valor:"));
console.log(`Valor em real: R$${real.toFixed(2)}`);
console.log(`Valor em euro: €${(real/6.10).toFixed(2)}`);
console.log(`Valor em dólar: $${(real/5.70).toFixed(2)}`);