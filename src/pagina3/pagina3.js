document.addEventListener('DOMContentLoaded', function() {
    // Obter valores armazenados na sessionStorage
    const quantidadeHomens = parseInt(sessionStorage.getItem('quantidadeHomens')) || 0;
    const quantidadeMulheres = parseInt(sessionStorage.getItem('quantidadeMulheres')) || 0;
    const quantidadeCriancas = parseInt(sessionStorage.getItem('quantidadeCriancas')) || 0;
    const quantidadeBebidas = parseInt(sessionStorage.getItem('quantidadeBebidas')) || 0;

    // Calcular quantidades dos itens
    const quantidadeCarne = (0.4 * quantidadeHomens) + (0.32 * quantidadeMulheres) + (0.20 * quantidadeCriancas);
    const quantidadePao = (2 * quantidadeMulheres) + quantidadeCriancas;
    const quantidadeCarvao = quantidadeHomens + quantidadeMulheres + quantidadeCriancas;
    const quantidadeSal = 0.04 * (quantidadeHomens + quantidadeMulheres + quantidadeCriancas);
    const quantidadeGelo = Math.ceil((quantidadeHomens + quantidadeMulheres + quantidadeCriancas) / 10) * 5;
    const quantidadeRefri = Math.ceil((quantidadeHomens + quantidadeMulheres + quantidadeCriancas) / 5);
    const quantidadeAgua = Math.ceil((quantidadeHomens + quantidadeMulheres + quantidadeCriancas) / 5);
    const quantidadeCerveja = 3 * (quantidadeHomens + quantidadeMulheres);

    // Exibir as quantidades na tabela
    document.querySelector('.qtdCarne').textContent = quantidadeCarne.toFixed(2) + ' kg';
    document.querySelector('.qtdPao').textContent = quantidadePao;
    document.querySelector('.qtdCarvao').textContent = quantidadeCarvao + ' kg';
    document.querySelector('.qtdSal').textContent = quantidadeSal.toFixed(2) + ' kg';
    document.querySelector('.qtdGelo').textContent = quantidadeGelo + ' kg';
    document.querySelector('.qtdRefri').textContent = quantidadeRefri + ' garrafas';
    document.querySelector('.qtdAgua').textContent = quantidadeAgua + ' garrafas';
    document.querySelector('.qtdCerveja').textContent = quantidadeCerveja + ' garrafas';

    // Exibir o total de convidados
    const totalConvidados = quantidadeHomens + quantidadeMulheres + quantidadeCriancas;
    document.getElementById('convidados').textContent = 'Total de Convidados: ' + totalConvidados;
});
