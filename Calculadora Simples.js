function calcular(num1 = 0, num2 = 0, operador = '+') {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return "Erro: Os dois primeiros parâmetros devem ser números."
    }

    switch (operador) {
        case '+':
            return num1 + num2
        case '-':
            return num1 - num2
        case '*':
            return num1 * num2
        case '/':
            return num2 !== 0 ? num1 / num2 : "Erro: Divisão por zero."
        case '%':
            return num1 % num2
        default:
            return "Erro: Operador inválido. Use +, -, *, / ou %."
    }
}
