const form = document.getElementById('formulario')
const limparCampo = document.getElementById('limparCampo')

function emaior(numeroA, numeroB) {
    if (numeroB > numeroA)
        return true;
}
limparCampo.addEventListener ('click', function (e) {
    e.preventDefault(); 

    const numA = document.getElementById('numeroA');
    const numB = document.getElementById('numeroB');
    numB.value = '';
    numA.value = '';    
    document.querySelector('.error-message').style.display = 'none';
    document.querySelector('.success-message').style.display = 'none';
})

form.addEventListener('submit', function (e) {
    let formularioValido = false;
    e.preventDefault(); 

    const numA = document.getElementById('numeroA');
    const numB = document.getElementById('numeroB');
    const mensagemSucesso = `Formulário válido. O número ${numB.value} é maior que o número ${numA.value}.`;
    
    formularioValido = emaior(numA.value, numB.value)
    if (formularioValido) {
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
        document.querySelector('.error-message').style.display = 'none';
    } else {
        document.querySelector('.error-message').style.display = 'block';
        document.querySelector('.success-message').style.display = 'none';  
    }
})
console.log(form);
