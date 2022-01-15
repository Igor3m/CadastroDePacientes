function converteCpf(umCpf){
    let cpfString = umCpf.value;
    let cpfNumber;

    console.log(cpfString);

    cpfString = cpfString.replace(/\./g, '');
    cpfString = cpfString.replace(/\-/, '');

    if (cpfString.length != 11){
        alert('CPF inálido');
    }

    cpfNumber = Number(cpfString);
    console.log(cpfNumber);
    return cpfNumber;
}

function formataData(umaData){

    let data = new Date(umaData.value);

    data = data.toLocaleDateString('pt-BR', {timeZone: 'UTC'});

    //let dataFormatada = data.toLocaleDateString('pt-BR', {timeZone: 'UTC'});

    console.log(data);
    return data;

}

function convertePeso(umPeso){

    let peso = umPeso.value;
    peso = Number(peso);

    console.log(peso);

    return peso;

}

function converteAltura(umaAltura){

    let altura = umaAltura.value;
    altura = Number(altura);

    console.log(altura);

}

function meuFormulario(){
    const form = document.querySelector('.formulario');
    const resultado = document.querySelector('.resultado');

    form.onsubmit = function(evento){
        evento.preventDefault();
        const nome = evento.target.querySelector('#nome');
        const cpf = evento.target.querySelector('#cpf');
        const data = evento.target.querySelector('#dataDeNascimento');
        const peso = evento.target.querySelector('#peso');
        const altura = evento.target.querySelector('#altura');
        const uf = evento.target.querySelector('#uf');

        formataData(data);
        convertePeso(peso);
        converteAltura(altura);

        console.log(nome.value, cpf.value, data.value, peso.value, altura.value, uf.value, typeof(uf.value));
        resultado.innerHTML = ` `;
        resultado.innerHTML += `<p>Meu nome é ${nome.value} portador(a) do CPF: ${cpf.value}, meu peso e altura são: ${peso.value}kg e ${altura.value}m. Sou residente do estado de ${uf.value} e minha data de nascimento é: ${formataData(data)}</p>`;
    }
}

meuFormulario();