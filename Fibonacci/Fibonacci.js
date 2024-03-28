let termo1 = 0;
let termo2 = 1;
let termo3 = 0;

console.log('-'.repeat(42));
console.log('   Consulta da Sequência de Fibonacci   ');
console.log('-'.repeat(42));

const valor = parseInt(prompt('Digite um número: '));

while (valor > termo3) {
    termo3 = termo1 + termo2;
    termo1 = termo2;
    termo2 = termo3;
}

if (valor === 0 || valor === 1 || valor === termo3) {
    console.log('O número faz parte da sequência de Fibonacci.');
} else {
    console.log('O número digitado não faz parte da sequência de Fibonacci.');
}
