let action = "", client_queue = [];
let current_client = false, new_client;
do{
   console.clear()
   console.log("1- Novo Cliente\n2- Atender Cliente\n3- Sair");
   console.log("Fila: ")
   for(let i=0; i<client_queue.length; i++){
    console.log(`${i+1}º ${client_queue[i]}`);
   }
   action = prompt("Digite a Operação requirida");
   switch(action){
    case "1":
        current_client = false;
        new_client = prompt("Nome do novo cliente:");3
        client_queue.push(new_client);
        break;
    case "2":
        if(client_queue.length > 0){
            current_client = client_queue.shift();
        }
        else{ 
            console.log("Não há clientes")
        }
   }
   if(current_client) console.log(`Cliente sendo atendido: ${current_client}`);
   else console.log(`Não há cliente sendo atendido`);
}while(action != "3");