alert('Bem vindo ao jogo Numero Secreto');
let numeroSecreto = 29; 
let chute;
let tentativas = 1;

while(chute != numeroSecreto){
    chute = prompt('Escolha um numero entre 1 e 30');
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
