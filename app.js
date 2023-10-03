alert('Bem vindo ao jogo Numero Secreto');

let dificuldade = 10;
let numeroSecreto = parseInt(Math.random() * dificuldade + 1 ); 
let chute;
let tentativas = 1;


while(chute != numeroSecreto){
    chute = prompt('Escolha um numero entre 1 e ' + dificuldade);
    if(chute == numeroSecreto){
       break;
    }else{
       if(chute > numeroSecreto){
            alert('O numero secreto e menor que ' + chute);
       }else{
            alert('O numero secreto e maior que ' + chute);
       }
       tentativas ++;
    }

}

let palavraTentativa = tentativas > 1 ? 'tentativas!!!' : 'tentativa!!!'
alert('Voce acertou o numero ' + numeroSecreto + ' com ' + tentativas + ' ' + palavraTentativa);
