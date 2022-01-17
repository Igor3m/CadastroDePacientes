function verificaCpf(umCpf){

    //verifica cpf capturado pelo formulário na intenção de identificar algum erro e informar o usuário

    let cpfString = umCpf.value;

    if(cpfString.length != 14 || cpfString.charAt(3) != '.' || cpfString.charAt(7) != '.' || cpfString.charAt(11) != '-'){
        throw ('cpf invalido.');
    }

    cpfString = cpfString.replace(/\./g, '');
    cpfString = cpfString.replace(/\-/, '');

    if (cpfString.length != 11){
        throw ('cpf invalido.');
    }

    return cpfString;
}

function criptografaCpf(umCpf){

    //recebe string contendo o cpf e retorna o valor criptografado

    let cpfString = umCpf.value;

    cpfString = cpfString.replace(/0/g , '#');
    cpfString = cpfString.replace(/1/g , '@');
    cpfString = cpfString.replace(/2/g , '&');
    cpfString = cpfString.replace(/3/g , '!');
    cpfString = cpfString.replace(/4/g , '?');
    cpfString = cpfString.replace(/5/g , '%');
    cpfString = cpfString.replace(/6/g , '$');
    cpfString = cpfString.replace(/7/g , '(');
    cpfString = cpfString.replace(/8/g , ')');
    cpfString = cpfString.replace(/9/g , '*');

    return cpfString;

}

function descriptografaCpf(umCpf){

    //recebe uma string contendo um cpf criptografado e retor o valor descriptografado

    let cpfString = umCpf;

    cpfString = cpfString.replace(/\#/g , '0');
    cpfString = cpfString.replace(/\@/g , '1');
    cpfString = cpfString.replace(/\&/g , '2');
    cpfString = cpfString.replace(/\!/g , '3');
    cpfString = cpfString.replace(/\?/g ,'4');
    cpfString = cpfString.replace(/\%/g , '5');
    cpfString = cpfString.replace(/\$/g , '6');
    cpfString = cpfString.replace(/\(/g , '7');
    cpfString = cpfString.replace(/\)/g , '8');
    cpfString = cpfString.replace(/\*/g , '9');

    return cpfString;
    
}

function formataData(umaData){

    let data = new Date(umaData.value);

    data = data.toLocaleDateString('pt-BR', {timeZone: 'UTC'});

    return data;

}

function verificaPeso(umPeso){

    //recebe string contendo o peso informada pelo usuário, converte para o tipo number e tenta identificar um erro para informar o usuário

    let peso = umPeso.value;
    peso = Number(peso);

    if (peso > 200){
        throw ('Peso invalido.');
    }

    return peso;

}

function verificaAltura(umaAltura){

    //recebe string contendo a altura informada pelo usuário, converte para o tipo number e tenta identificar um erro para informar o usuário

    let altura = umaAltura.value;
    altura = Number(altura);

    if (altura > 2.30){
        throw('Altura inválida.');
    }

    return altura;

}

function meuFormulario(){

    //captura os dados do formulario, trata exceções e exibe os dados capturados na tela

    const form = document.querySelector('.formulario');
    const resultado = document.querySelector('.resultado');

    form.onsubmit = function(evento){
        evento.preventDefault();

        const nome = evento.target.querySelector('#nome');
        const cpf = evento.target.querySelector('#cpf');
        try {
            verificaCpf(cpf);
        }catch(error){
            alert('Cpf inválido!')
            return;
        }
        const data = evento.target.querySelector('#dataDeNascimento');
        const peso = evento.target.querySelector('#peso');
        try {
            verificaPeso(peso);
        }catch(error){
            alert('Peso Inválido!')
            return;
        }
        const altura = evento.target.querySelector('#altura');
        try {
            verificaAltura(altura);
        }catch(error){
            alert('Altura Inválida!')
            return;
        }
        const uf = evento.target.querySelector('#uf');

        resultado.innerHTML = ` `;
        resultado.innerHTML += `<p>Nome: ${nome.value}</p>`;
        resultado.innerHTML += `<p>CPF: ${criptografaCpf(cpf)}</p>`;
        resultado.innerHTML += `<p>Data de Nascimento: ${formataData(data)}</p>`;
        resultado.innerHTML += `<p>Peso: ${peso.value}</p>`;
        resultado.innerHTML += `<p>Altura: ${altura.value}</p>`;
        resultado.innerHTML += `<p>UF: ${uf.value}</p>`;
    
    }
}

meuFormulario();