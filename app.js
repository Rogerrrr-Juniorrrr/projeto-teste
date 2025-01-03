alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = 100;
let numeroSecreto = parseInt (Math.random () * numeroMaximo + 1);
console.log (numeroSecreto);
let chute;
let tentativas = 1;

while (chute != numeroSecreto){
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);

    if (chute == numeroSecreto) {
            console.log ('Resultado da comparação: ', chute == numeroSecreto);
            break;
    } else { 
        if (chute > numeroSecreto) {
            alert (`O número secreto é menor que ${chute}`);
            console.log ('Resultado da comparação: ', chute == numeroSecreto);
        } else {
            alert (`O número secreto é maior que ${chute}`);
            console.log ('Resultado da comparação: ', chute == numeroSecreto);
        }
    }
    tentativas++;
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';

alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);