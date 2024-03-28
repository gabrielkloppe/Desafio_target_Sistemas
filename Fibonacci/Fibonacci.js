class Fibonacci {
    /**
    2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma 
    dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na 
    linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne
    uma mensagem avisando se o número informado pertence ou não a sequência.

    IMPORTANTE:
    Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;
     */

    static isFibonacci(number) {
        let sequence = [0, 1];
        if (number === 0 || number === 1) {
            return true;
        }
        while (sequence[1] < number) {
            let temp = sequence[0];
            sequence[0] = sequence[1];
            sequence[1] = sequence[1] + temp;
        }
        return sequence[1] === number;
    }
}