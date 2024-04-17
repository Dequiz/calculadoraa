let tela = document.querySelector('.tela');
let num1 = document.querySelector('.num1');
let num2 = document.querySelector('.num2');
let num3 = document.querySelector('.num3');
let num4 = document.querySelector('.num4');
let num5 = document.querySelector('.num5');
let num6 = document.querySelector('.num6');
let num7 = document.querySelector('.num7');
let num8 = document.querySelector('.num8');
let num9 = document.querySelector('.num9');
let num0 = document.querySelector('.num0');
let virgula = document.querySelector('.virgula');
let enviar = document.querySelector('.enviar');
let operadorMais = document.querySelector('.mais');
let operadorMenos = document.querySelector('.menos');
let operadorMultiplicacao = document.querySelector('.multi');
let operadorDivisao= document.querySelector('.divi');
let resetar = document.querySelector('.resetar')

num1.addEventListener('click', function() {
    tela.textContent += '1';
});

num2.addEventListener('click', function() {
    tela.textContent += '2';
});

num3.addEventListener('click', function() {
    tela.textContent += '3';
});

num4.addEventListener('click', function() {
    tela.textContent += '4';
});

num5.addEventListener('click', function() {
    tela.textContent += '5';
});

num6.addEventListener('click', function() {
    tela.textContent += '6';
});

num7.addEventListener('click', function() {
    tela.textContent += '7';
});

num8.addEventListener('click', function() {
    tela.textContent += '8';
});

num9.addEventListener('click', function() {
    tela.textContent += '9';
});

num0.addEventListener('click', function() {
    tela.textContent += '0';
});

virgula.addEventListener('click', function() {
    tela.textContent += '.';
});

operadorMais.addEventListener('click', function() {
    tela.textContent += '+';
});

operadorMenos.addEventListener('click', function() {
    tela.textContent += '-';
});

operadorMultiplicacao.addEventListener('click', function() {
    tela.textContent += '*';
});

operadorDivisao.addEventListener('click', function() {
    tela.textContent += '/';
});


enviar.addEventListener('click', function() {
    
    let expressao = tela.textContent;
    let resultado = eval(expressao);
    
    
    tela.textContent = resultado;
});


resetar.addEventListener('click', function(){
    tela.textContent = '';
});
