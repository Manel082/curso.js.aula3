function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function escolherOperacao() {
    const operacoes = ['+', '-', '*', '/', '%'];
    return operacoes[gerarNumeroAleatorio(0, operacoes.length - 1)];
}

function calcular(num1, num2, operacao) {
    switch (operacao) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 === 0) {
                return "Error: divisão por zero";
            }
            return (num1 / num2).toFixed(2);
        case '%':
            if (num2 === 0) {
                return "Error: divisão por zero";
            }
            return (num1 % num2).toFixed(2);
        default:
            return "Operação inválida";
    }
}

function calculadoraAutomatica() {
    setInterval(() => {
        const num1 = gerarNumeroAleatorio(1, 100);
        const num2 = gerarNumeroAleatorio(1, 100);
        const operacao = escolherOperacao();

        const resultado = calcular(num1, num2, operacao);

        if (typeof resultado === 'string' && resultado.startsWith("Error")) {
            console.log(resultado);
        } else {
            console.log(`${num1} ${operacao} ${num2} = ${resultado}`);
        }
    }, 2000);
}

calculadoraAutomatica();