let time = [];

function adicionarJogador(time,nome,idade,posicao,pontuacao){
    let jogador = {
        Nome: nome,
        Idade: idade,
        Posicao: posicao,
        Pontuacao: pontuacao
    };
    time.push(jogador);
}

function buscarPorPosicao(time, string){
    let array = [];
    time.forEach(jogador => {
        if(jogador.Posicao == string){
            array.push(jogador);
        }
    });
    if(array.length == 0) console.log("Não há jogadores nesta posição.");
    return array;
}

function listarTime(time){
    time.forEach(jogador => {
        console.log(jogador.Nome);
    })
}

function calcularPontuacaoMedia(time){
    let media=0;
    time.forEach(jogador => {
        media += jogador.Pontuacao;
    })
    media = media/time.length;
    return media;
}

let action;
do{
    console.log("1- Adicionar jogador\n2- Buscar por posição\n3- Listar time\n4- Calcular pontuação média\n5- Sair")
    action = prompt("Escreva a opção requerida:")
    switch(action){
        case "1":
            let nome = prompt("Nome:");
            let idade = Number(prompt("Idade:"));
            let posicao = prompt("Posição:");
            let pontuacao = Number(prompt("Pontuação:"));
            adicionarJogador(time, nome, idade, posicao, pontuacao);
            break;
        case "2":
            let posicao_search = prompt("Posição:");
            let resposta = buscarPorPosicao(time, posicao_search);
            resposta.forEach(player => console.log(player))
            break;
        case "3":
            listarTime(time);
            break;
        case "4":
            let media = calcularPontuacaoMedia(time);
            console.log(media.toFixed(2));
    }
}while(action != "5");