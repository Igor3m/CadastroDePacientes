function meuFormulario(){
    const form = document.querySelector('.formulario');
    const resultado = document.querySelector('.resultado');

    form.onsubmit = function(evento){
        evento.preventDefault();
        const nome = evento.target.querySelector('.nome');
        const cpf = evento.target.querySelector('.cpf');
        const data = evento.target.querySelector('.dataDeNascimento');
        const peso = evento.target.querySelector('.peso');
        const altura = evento.target.querySelector('.altura');
        const uf = evento.target.querySelector('.uf');
        console.log(nome.value, cpf.value, data.value, peso.value, altura.value, uf.value);

        resultado.innerHTML = ` `;
        resultado.innerHTML += `<p>Meu nome é ${nome.value} portador(a) do CPF: ${cpf.value}, meu peso e altura são: ${peso.value}kg e ${altura.value}m. Sou residente do estado de ${uf.value} e minha data de nascimento é: ${data.value}</p>`;
    }
}
meuFormulario();