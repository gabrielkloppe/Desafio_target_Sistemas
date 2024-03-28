class InverteString {
    static inverteString(str) {
        let inversa = '';
        for (let i = str.length - 1; i >= 0; i--) {
            inversa += str[i];
        }
        console.log(`Palavra invertida: ${inversa}`);
    }
}