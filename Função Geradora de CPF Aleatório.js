function gerarCPF() {
    let cpf = Array(9).fill().map(() => Math.floor(Math.random() * 10))
    
    let soma = cpf.reduce((s, d, i) => s + d * (10 - i), 0)
    cpf.push((soma * 10) % 11 < 2 ? 0 : 11 - (soma * 10) % 11)
    
    soma = cpf.reduce((s, d, i) => s + d * (11 - i), 0)
    cpf.push((soma * 10) % 11 < 2 ? 0 : 11 - (soma * 10) % 11)
    
    return cpf.join('').replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')
}

console.log(gerarCPF())