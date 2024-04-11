
document.getElementById('btCadastrar').addEventListener('click', function() {
    const form = document.getElementById('formulario');
    const nome = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const telefone = form.querySelector('input[type="tel"]').value;
    // const concordo = form.querySelector('input[type="checkbox"]').checked;

    console.log('Nome:', nome);
    console.log('Email:', email);
    console.log('Telefone:', telefone);
    // console.log('Concordo:', concordo);

    // Salvar os dados do formulário na sessionStorage
    sessionStorage.setItem('nome', nome);
    sessionStorage.setItem('email', email);
    sessionStorage.setItem('telefone', telefone);

    // Redirecionar para a página 3 após cadastrar
    window.location.href = '../pagina3/pagina3.html';
});