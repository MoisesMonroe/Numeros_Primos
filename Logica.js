let canvas = document.getElementById("meuCanvas");
let ctx = canvas.getContext('2d');
//  função que exibe oque foi digitado pelo usuario
//  ( document.getElementById("Numero1").value ) usar isso para receber o valor digitado em alguma variavel
function exibir() {
    ctx.clearRect(0, 0, 1000, 500); // limpa tela quando a funçao é chamada
    let x = 0;                 // posição x em que sera escrito
    let y = 250;                 // posição y em que sera escrito
    let N1 = parseInt(document.getElementById("Numero1").value, 10);  // oque for digitado sera depositado na variavel recebe  
    ctx.font = "100px Arial";
    let resposta = N1 + " ";
    let result = "é primo";
    let contador = 3;
    if (N1 < 2 || (N1 % 2 == 0 && N1 != 2)) {
        result = "não é primo!";
    } else {
        while (contador <= Math.sqrt(N1)) {
            if (N1 % contador == 0) {
                result = "não é primo!";
                break;
            }
            contador = contador + 2;
        }
    }
    let resultado = resposta + result;
    ctx.fillText(resultado, x, y);
}