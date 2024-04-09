
const switchButton = document.getElementById('switch-flat');

switchButton.addEventListener('change', function() {
    
    if (this.checked) {
        document.body.style.backgroundColor = 'var(--fundo-dark)'; 
        document.body.style.color = 'var(--texto-dark)'; 
        localStorage.setItem('theme', 'dark');
    } else {
        document.body.style.backgroundColor = 'var(--fundo-light)'; 
        document.body.style.color = 'var(--texto-light)'; 
        localStorage.setItem('theme', 'light'); 
    }
});

function enviarFormulario (event){
    event.preventDefault();
}

document.addEventListener('DOMContentLoaded', () => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
        switchButton.checked = true;
        document.body.style.backgroundColor = 'var(--fundo-dark)';
        document.body.style.color = 'var(--texto-dark)';
    } else {
        switchButton.checked = false;
        document.body.style.backgroundColor = 'var(--fundo-light)';
        document.body.style.color = 'var(--texto-light)';
    }
});