function Primo(numero) {
    if (typeof numero !== 'number' || numero <= 1 || !Number.isInteger(numero)) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }

    return true;
}