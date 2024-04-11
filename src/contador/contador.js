
function createCounter(valueElementId, addButtonId, subButtonId, resetButtonId) {
    let value = 0;
    const valueElement = document.getElementById(valueElementId);
    const addButton = document.getElementById(addButtonId);
    const subButton = document.getElementById(subButtonId);
    const resetButton = document.getElementById(resetButtonId);

    const updateValue = () => {
        valueElement.textContent = value;
    };

    addButton.addEventListener('click', () => {
        value++;
        updateValue();
    });

    subButton.addEventListener('click', () => {
        if (value > 0) {
            value--;
            updateValue();
        }
    });

    resetButton.addEventListener('click', () => {
        value = 0;
        updateValue();
    });
}


createCounter('value', 'adicionar', 'subtrair', 'reset');
createCounter('value2', 'adicionar2', 'subtrair2', 'reset2');
createCounter('value3', 'adicionar3', 'subtrair3', 'reset3');
createCounter('value4', 'adicionar4', 'subtrair4', 'reset4');


//---- até aqui são os contadores, adicionando e subtraindo as quantidades

document.getElementById('calcular').addEventListener('click', function() {
    // Obtendo os valores dos contadores
    const quantidadeHomens = parseInt(document.getElementById('value').textContent);
    const quantidadeMulheres = parseInt(document.getElementById('value2').textContent);
    const quantidadeCriancas = parseInt(document.getElementById('value3').textContent);
    const quantidadeBebidas = parseInt(document.getElementById('value4').textContent);
    

    // Armazenando os valores na sessionStorage
    sessionStorage.setItem('quantidadeHomens', quantidadeHomens);
    sessionStorage.setItem('quantidadeMulheres', quantidadeMulheres);
    sessionStorage.setItem('quantidadeCriancas', quantidadeCriancas);
    sessionStorage.setItem('quantidadeBebidas', quantidadeBebidas);

    // Redirecionando para a página de cadastro
    window.location.href = './src/pagina2-cadastro/cadastro.html';
});