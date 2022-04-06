console.clear();
const prompt = require('prompt-sync')();

console.log('Olá, meu nome é A2227 e eu sou uma inteligência artificial. Você é um robô chamado Krigerbot! Sua missão é ajudar uma pequena equipe de astronautas em uma missão num planeta aquático chamado VANN. O sucesso dessa exploração depende de um trabalho em equipe que consiste em coletar diferentes materiais orgânicos. Boa sorte!');
console.log();

let jogador = [];
let multiplo = [];
let novoJogo = [];

let status = {
    nome: "Krigerbot",
    bateria: 50,
    armadura: 100,
    progresso: 15,
    tempo : 0
};

let itens = {
    faca: 1,
    tesoura: 1,
    curativo: 2,
    adesivo: 2,
    inventario: 0
}

function calculoTempo(tempo) {

    if (tempo >= 13) {
        status.progresso -= 100;
        console.log(`\nMissão mal sucedida! Krigerbot, nem todo mundo é feito de lata. A equipe não pode ficar mais de 15 horas no planeta sem oxigênio.`);
        console.log();
    }
}

function verificar() {

    while (jogador != "s" && jogador != "n") {
        console.log();
        console.log('Item inválido! Vamos tentar novamente.');
        console.log();
        jogador = prompt("Por favor, digite somente 's' para sim ou 'n' para não: ").toLowerCase();
        console.log();
        
        if (jogador == "s" || jogador == "n") {
            break;
        }
    }
    return jogador
}

function partida(novoJogo) {

    while (novoJogo != "s" && novoJogo != "n") {
        console.log();
        console.log('Item inválido! Vamos tentar novamente.');
        console.log();
        novoJogo = prompt("Por favor, digite somente 's' para sim ou 'n' para não: ").toLowerCase();
        console.log();
        
        if (novoJogo == "s" || novoJogo == "n") {
            break;
        }
    }
    return novoJogo
}

function verificarMultiplo() {

    while (multiplo != "a" && multiplo != "b" && multiplo != "c") {
        console.log();
        console.log('Resposta inválida! Vamos tentar novamente.');
        console.log();
        multiplo = prompt("Por favor, digite somente A, B ou C: ").toLowerCase();
        console.log();
        
        if (multiplo == "a" || multiplo == "b" || multiplo == "c") {
            break;
        }
    }
    return multiplo
}

function lotacaoInv(inventario) {

    if (inventario > 2) {
        status.bateria -= 2;
        console.log(`\nLEMBRETE: Krigerbot, o seu inventário possui mais de 2 itens, por este motivo, o consumo de bateria a partir de agora será maior!`);
        console.log();
    }
}

function vitoria(progresso) {

    if (progresso >= 100) {
        console.log(`\nA missão foi um sucesso. Parabéns, Krigerbor!`);
        console.log();
    }
}

do {

    let rodadas = 1;

    for (let contador = 0; contador < rodadas; contador++) {
        
        status.bateria = 50;
        status.armadura = 100;
        status.progresso = 15;
        status.tempo = 0;

        itens.faca = 1;
        itens.tesoura = 1,
        curativo = 2;
        adesivo = 2;
        inventario = 0;
        
        console.log();
        jogador = prompt(`1. ANTES DE VIAJAR: Você está acoplado à nave com a tripulação a caminho do Planeta VANN. Sua bateria está em ${status.bateria}%, deseja recarregar antes de pousar? Responda com 's' para sim ou 'n' para não: \n`).toLowerCase();
        verificar(jogador);
        console.log();

        if (jogador == "s") {
            status.bateria += 50;
            status.progresso += 5;
            status.tempo += 2;
            console.log(`Muito bem, bateria recarregada! Status da bateria em ${status.bateria}%.`);
            console.log();

        } else if (jogador == "n") {
            status.bateria -= 5;
            status.tempo += 1;
            console.log(`Muito bem, vamos prosseguir viagem!`);
            console.log();

        } if (status.bateria <= 0 || status.progresso <= 0) {
            console.log(`Poxa! Você deixou a bateria zerar ou não cumpriu os resquisitos mínimos da missão, por isso, ela falhou. Tente novamente! Bateria em ${status.bateria}% e Sucesso da Missão em ${status.progresso}%.`);
            break;
        }

        console.log(`Status da bateria: ${status.bateria}%.`);
        console.log(`Progresso da missão: ${status.progresso}%.`);
        console.log(`Inventário: ${itens.inventario} itens.`);
        console.log(`Tempo da missão: ${status.tempo} horas.`);
        console.log();

        console.log();
        jogador = prompt(`2. NO NOSSO DESTINO: Pouso realizado com sucesso. Você e a equipe encontraram uma planta nativa que pode ser interessante para pesquisas futuras. Deseja coletar? \n`).toLowerCase();
        verificar(jogador);
        console.log();

        if (jogador == "s") {
            status.bateria -= 5;
            status.progresso += 5;
            status.armadura -= 5;
            itens.inventario += 1;
            status.tempo += 1;
            console.log(`Certo, material coletado. Parabéns, o sucesso da missão está em ${status.progresso}%, porém, por se tratar de um material radioativo, a integridade da armadura caiu em 5%, estando atualmente com ${status.armadura}%.`);
            console.log();

        } else if (jogador == "n") {
            status.bateria -= 5;
            status.tempo += 1;
            console.log(`Cuidado para não voltar com os bolsos vazios, Krigerbot.`);
            console.log();

        } if (status.bateria <= 0 || status.progresso <= 0) {
            console.log(`Poxa! Você deixou a bateria zerar ou não cumpriu os resquisitos mínimos da missão, por isso, ela falhou. Tente novamente! Bateria em ${status.bateria}% e Sucesso da Missão em ${status.progresso}%.`);
            break;
        }

        lotacaoInv(itens.inventario);

        console.log(`Status da bateria: ${status.bateria}%.`);
        console.log(`Progresso da missão: ${status.progresso}%.`);
        console.log(`Inventário: ${itens.inventario} itens.`);
        console.log(`Tempo da missão: ${status.tempo} horas.`);
        console.log();

        console.log();
        jogador = prompt(`3. PRIMEIRO SOCORROS: Um membro da equipe se feriu coletando um material espinhoso e o traje furou. Deseja usar uma fita adesiva para consertar o traje? \n`).toLowerCase();
        verificar(jogador);
        console.log();

        if (jogador == "s") {
            status.bateria -= 5;
            status.progresso += 5;
            status.tempo += 1;
            console.log(`Você solucionou o problema do traje. Parábens! O progresso da missão subiu para ${status.progresso}%. Continue assim.`);
            console.log();

        } else if (jogador == "n") {
            status.bateria -= 5;
            status.tempo += 2;
            console.log(`Krigerbot, o tempo de vida da missão foi diminuído, por favor, ajude a equipe durante a missão imediatamente.`);
            console.log();

        } if (status.bateria <= 0 || status.progresso <= 0) {
            console.log(`Poxa! Você deixou a bateria zerar ou não cumpriu os resquisitos mínimos da missão, por isso, ela falhou. Tente novamente! Bateria em ${status.bateria}% e Sucesso da Missão em ${status.progresso}%.`);
            break;
        }

        console.log(`Status da bateria: ${status.bateria}%.`);
        console.log(`Progresso da missão: ${status.progresso}%.`);
        console.log(`Inventário: ${itens.inventario} itens.`);
        console.log(`Tempo da missão: ${status.tempo} horas.`);
        console.log();

        console.log();
        jogador = prompt(`4. USE AS FERRAMENTAS: Cuidado! um dos astronautas prendeu a perna em um galho vivo. Deseja usar a faca para livrá-lo? \n`).toLowerCase();
        verificar(jogador);
        console.log();

        if (jogador == "s") {
            status.bateria -= 5;
            status.progresso += 10;
            itens.faca -= 1;
            status.tempo += 1;
            console.log(`Você utilizou a faca que estava no inventário. Você conseguiu salvar o astronauta, mas gastou um objeto guardado. Agora lhe restam os seguintes itens no inventário: ${itens.adesivo} fita(s) adesiva(s), ${itens.curativo} curativo(s), ${itens.faca} faca(s) e ${itens.tesoura} tesoura(s).`);
            console.log();

        } else if (jogador == "n") {
            status.bateria -= 5;
            status.progresso -= 5;
            status.tempo += 2;
            console.log(`Krigerbot, você deixou um astronauta morrer. Você será penalizado por isso. Você perdeu 5% no progresso da missão e está mais perto do que nunca de falhar. Progresso da Missão em ${status.progresso}%.`);
            console.log();

        } if (status.bateria <= 0 || status.progresso <= 0) {
            console.log(`Poxa! Você deixou a bateria zerar ou não cumpriu os resquisitos mínimos da missão, por isso, ela falhou. Tente novamente! Bateria em ${status.bateria}% e Sucesso da Missão em ${status.progresso}%.`);
            break;
        }

        console.log(`Status da bateria: ${status.bateria}%.`);
        console.log(`Progresso da missão: ${status.progresso}%.`);
        console.log(`Inventário: ${itens.inventario} itens.`);
        console.log(`Tempo da missão: ${status.tempo} horas.`);
        console.log();

        console.log();
        jogador = prompt(`5. COLETA, COLETA E COLETA: Krigerbot, você e a equipe encontraram uma substância aquosa. Deseja coletar? Se sim, saiba que você ocupará espaço no inventário de substâncias. \n`).toLowerCase();
        verificar(jogador);
        console.log();

        if (jogador == "s") {
            status.bateria -= 5;
            status.progresso += 10;
            itens.inventario += 1;
            status.tempo += 1;
            console.log(`Substância coletada! Isso trará muito conhecido ao povo da Terra, Krigerbot.`);
            console.log();

        } else if (jogador == "n") {
            status.bateria -= 5;
            status.tempo += 1;
            console.log(`Você deixou o material para trás. Desse jeito, essa missão só serviu para gastar dinheiro, Krigerbot! Prossiga, soldado.`);
            console.log();

        } if (status.bateria <= 0 || status.progresso <= 0) {
            console.log(`Poxa! Você deixou a bateria zerar ou não cumpriu os resquisitos mínimos da missão, por isso, ela falhou. Tente novamente! Bateria em ${status.bateria}% e Sucesso da Missão em ${status.progresso}%.`);
            break;
        }

        lotacaoInv(itens.inventario);

        console.log(`Status da bateria: ${status.bateria}%.`);
        console.log(`Progresso da missão: ${status.progresso}%.`);
        console.log(`Inventário: ${itens.inventario} itens.`);
        console.log(`Tempo da missão: ${status.tempo} horas.`);
        console.log();

        console.log();
        multiplo = prompt(`6. JOGO CONHECIDO: Vamos à um antigo desafio: pedra, papel e... você vai precisar deste objeto para cortar uma película orgânica que está no meio do caminho. Que objeto é esse?\n\nA) Garrafa;\nB) Tesoura;\nC) Madeira.\n\n`).toLowerCase();
        verificarMultiplo(multiplo)
        console.log();

        if (multiplo == "a") {
            status.bateria -= 5;
            status.progresso -= 5;
            status.tempo += 1;
            console.log(`Resposta errada, Krigerbot! Você vai demorar mais tempo que o esperado até a equipe resolver este problema.`);
            console.log();

        } if (multiplo == "b") {
            status.bateria -= 5;
            status.progresso += 10;
            itens.tesoura -= 1;
            status.tempo += 1;
            console.log(`Sucesso! Você adiantou o tempo da missão e está próximo de finalizá-la. Continue assim.`);
            console.log();

        } if (multiplo == "c") {
            status.bateria -= 5;
            status.progresso -= 5;
            status.tempo += 1;
            console.log(`Resposta errada, Krigerbot! Você vai demorar mais tempo que o esperado até a equipe resolver este problema.`);
            console.log();

        } if (status.bateria <= 0 || status.progresso <= 0) {
            console.log(`Poxa! Você deixou a bateria zerar ou não cumpriu os resquisitos mínimos da missão, por isso, ela falhou. Tente novamente! Bateria em ${status.bateria}% e Sucesso da Missão em ${status.progresso}%.`);
            break;
        }

        console.log(`Status da bateria: ${status.bateria}%.`);
        console.log(`Progresso da missão: ${status.progresso}%.`);
        console.log(`Inventário: ${itens.inventario} itens.`);
        console.log(`Tempo da missão: ${status.tempo} horas.`);
        console.log();

        console.log();
        jogador = prompt(`7. ALGUÉM SE FERIU: Krigerbot, um astronauta se feriu tentando atravessar uma caverna espinhosa. Deseja usar um curativo? \n`).toLowerCase();
        verificar(jogador);
        console.log();

        if (jogador == "s") {
            status.bateria -= 5;
            status.progresso += 10;
            itens.curativo -= 1;
            status.tempo += 1;
            console.log(`Muito bem! Você possui no seu inventário somente mais ${itens.curativo} curativo.`);
            console.log();

        } else if (jogador == "n") {
            status.bateria -= 5;
            status.progresso -= 5;
            status.tempo += 1;
            console.log(`Bem... o astronauta sobreviverá, mas sentirá uma dor horrível até o final da missão. Você poderia ter evitado essa situação, Krigerbot! Você está agora em desvantagem na missão. Progresso geral em ${status.progresso}%.`);
            console.log();

        } if (status.bateria <= 0 || status.progresso <= 0) {
            console.log(`Poxa! Você deixou a bateria zerar ou não cumpriu os resquisitos mínimos da missão, por isso, ela falhou. Tente novamente! Bateria em ${status.bateria}% e Sucesso da Missão em ${status.progresso}%.`);
            break;
        }

        lotacaoInv(itens.inventario);

        console.log(`Status da bateria: ${status.bateria}%.`);
        console.log(`Progresso da missão: ${status.progresso}%.`);
        console.log(`Inventário: ${itens.inventario} itens.`);
        console.log(`Tempo da missão: ${status.tempo} horas.`);
        console.log();

        console.log();
        jogador = prompt(`8. É DIAMANTE?: No meio da exploração, em um local inesperado, você e a equipe encontraram uma suposta construção feita com um material brilhante. Deseja coletar? \n`).toLowerCase();
        verificar(jogador);
        console.log();

        if (jogador == "s") {
            status.bateria -= 5;
            status.progresso -= 5;
            itens.inventario += 1;
            status.tempo += 1;
            console.log(`Material coletado. Essa amostra é meio pesadinha, né?`);
            console.log();

        } else if (jogador == "n") {
            status.bateria -= 5;
            status.progresso += 5;
            status.tempo += 1;
            console.log(`Uffa, aquele suposto diamante só ia te deixar mais lento. Excelente escolha, krigerbot. Seu status da missão está em ${status.progresso}%, sua bateria em ${status.bateria}% e há ${itens.inventario} item(ns) no seu inventário.`);
            console.log();

        } if (status.bateria <= 0 || status.progresso <= 0) {
            console.log(`Poxa! Você deixou a bateria zerar ou não cumpriu os resquisitos mínimos da missão, por isso, ela falhou. Tente novamente! Bateria em ${status.bateria}% e Sucesso da Missão em ${status.progresso}%.`);
            break;
        }

        lotacaoInv(itens.inventario);

        console.log(`Status da bateria: ${status.bateria}%.`);
        console.log(`Progresso da missão: ${status.progresso}%.`);
        console.log(`Inventário: ${itens.inventario} itens.`);
        console.log(`Tempo da missão: ${status.tempo} horas.`);
        console.log();

        console.log();
        jogador = prompt(`9. MAIS MATERIAL: Deseja coletar mais uma amostra de matéria orgânica? \n`).toLowerCase();
        verificar(jogador);
        console.log();

        if (jogador == "s") {
            status.bateria -= 5;
            status.progresso += 10;
            itens.inventario += 1;
            status.tempo += 1;
            console.log(`Amostra coletada! Isso aí, Krigerbot, sacrificar energia em prol da pesquisa.`);
            console.log();

        } else if (jogador == "n") {
            status.bateria -= 5;
            status.progresso -= 5;
            status.tempo += 1;
            console.log(`Lembre-se: sem sacríficio, não há vitória. Você pode considerar coletar mais coisas, mesmo se isso gastar mais energia.`);
            console.log();

        } if (status.bateria <= 0 || status.progresso <= 0) {
            console.log(`Poxa! Você deixou a bateria zerar ou não cumpriu os resquisitos mínimos da missão, por isso, ela falhou. Tente novamente! Bateria em ${status.bateria}% e Sucesso da Missão em ${status.progresso}%.`);
            break;
        }

        lotacaoInv(itens.inventario);

        console.log(`Status da bateria: ${status.bateria}%.`);
        console.log(`Progresso da missão: ${status.progresso}%.`);
        console.log(`Inventário: ${itens.inventario} itens.`);
        console.log(`Tempo da missão: ${status.tempo} horas.`);
        console.log();

        console.log();
        jogador = prompt(`10. PEDIDO DE AJUDA: Krigerbot, a líder da expedição furou o traje e se feriu em um mergulho. Deseja utilizar a fita para ajustar a proteção e um curativo?? \n`).toLowerCase();
        verificar(jogador);
        console.log();

        if (jogador == "s") {
            status.bateria -= 10;
            status.progresso += 10;
            itens.adesivo -= 1;
            itens.curativo -= 1;
            status.tempo += 1;
            console.log(`Isso realmente deu trabalho! Você possui no seu inventário: ${itens.adesivo} fita(s) adesiva(s), ${itens.curativo} curativo(s), ${itens.faca} faca(s) e ${itens.tesoura} tesoura(s).`);
            console.log();

        } else if (jogador == "n") {
            status.bateria -= 10;
            status.progresso -= 15;
            status.tempo += 2;
            console.log(`Poxa, mais uma perda. Você perdeu a líder da expedição, o que comprometeu muito o rendimento geral da missão. Progresso em ${status.progresso}% e bateria em ${status.bateria}%.`);
            console.log();

        } if (status.bateria <= 0 || status.progresso <= 0) {
            console.log(`Poxa! Você deixou a bateria zerar ou não cumpriu os resquisitos mínimos da missão, por isso, ela falhou. Tente novamente! Bateria em ${status.bateria}% e Sucesso da Missão em ${status.progresso}%.`);
            break;
        }

        lotacaoInv(itens.inventario);
        calculoTempo(status.tempo);

        console.log(`Status da bateria: ${status.bateria}%.`);
        console.log(`Progresso da missão: ${status.progresso}%.`);
        console.log(`Inventário: ${itens.inventario} itens.`);
        console.log(`Tempo da missão: ${status.tempo} horas.`);
        console.log();

        console.log();
        jogador = prompt(`11. UMA ÚLTIMA COISA: Você e a equipe encontraram os itens que precisavam. Sendo assim precisam pegar o caminho de volta. Deseja retornar à nave? \n`).toLowerCase();
        verificar(jogador);
        console.log();

        if (jogador == "s") {
            status.bateria -= 10;
            status.progresso += 20;
            status.tempo += 1;
            console.log(`Hora de dizer tchau!.`);
            console.log();

        } else if (jogador == "n") {
            status.bateria -= 50;
            status.progresso -= 50;
            status.tempo += 1;
            console.log(`Isso não faz sentido. Não há oxigênio e nem tempo suficiente, Krigerbot!`);
            console.log();

        } if (status.bateria <= 0 || status.progresso <= 0) {
            console.log(`Poxa! Você deixou a bateria zerar ou não cumpriu os resquisitos mínimos da missão, por isso, ela falhou. Tente novamente! Bateria em ${status.bateria}% e Sucesso da Missão em ${status.progresso}%.`);
            break;
        }

        lotacaoInv(itens.inventario);
        vitoria(status.progresso);
        calculoTempo(status.tempo);

        console.log(`Status da bateria: ${status.bateria}%.`);
        console.log(`Progresso da missão: ${status.progresso}%.`);
        console.log(`Inventário: ${itens.inventario} itens.`);
        console.log(`Tempo da missão: ${status.tempo} horas.`);
        console.log();
    }

    console.log();
    novoJogo = prompt(`Deseja jogar novamente?\n`).toLowerCase;
    partida(novoJogo);
    console.log();

} while (novoJogo == "s");
    if (novoJogo == "n") {
        console.log("Obrigado por jogar comigo <3");
}

console.log();








