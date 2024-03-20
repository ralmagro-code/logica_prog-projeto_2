// A abordagem mais simples para esse problema é construir uma função. Assim, faremos:

// Definindo uma função baseado nas variáveis vitorias e derrotas
function calculadoraRanked(vitorias, derrotas) {

    // Declarando as variáveis saldo de vitórias e nível, calculando o saldo de vitórias, o parâmetro para classificação
    let saldoVitorias = vitorias - derrotas;
    let nivel;

	// Estrutura de decisão para classificar o saldo em um nível
    if (saldoVitorias < 10) {
        nivel = 'Ferro';
    } else if (saldoVitorias >= 10 && saldoVitorias <= 20) {
        nivel = 'Bronze';
    } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
        nivel = 'Prata';
    } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
        nivel = 'Ouro';
    } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
        nivel = 'Diamante';
    } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
        nivel = 'Lendário';
    } else {
        nivel = 'Imortal';
    }
    
    // Retornando o saldo e o nível do herói
    return [saldoVitorias, nivel];
}

// Declarando e solicitando a entrada de dados para o usuário
let vitorias = prompt("Por favor, digite o número de vitórias: ");
let derrotas = prompt("Por favor, digite o número de derrotas: ");

// Chamando a função
let [saldoVitorias, nivel] = calculadoraRanked(vitorias, derrotas);

// Imprimindo a saída
console.log(`O Herói tem de saldo de ${saldoVitorias} e está no nível de ${nivel}`);
