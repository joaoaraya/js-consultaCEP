// essa constante guarda a ação de obter o que está em input-cep
const cep = document.querySelector('input#cep');

const showData = (resultado) => {
    // Dado vem como objeto. Para cada dado do objeto array (cidade,bairro..), armazene na constante 'campo'
    for(const campo in resultado) {
        // existe uma input com id '#' + 'nome do campo vindo do objeto em JSON (EX:cidade)
        // e inserir somente os 'objetos' que tem o mesmo nome da ID da input
        if (document.querySelector("#"+campo)) {
                // inserir em cada 'campo' (input) o valor do resultado adicionado no 'for in'
                document.querySelector('#'+campo).value = resultado[campo]
        }
        console.log(campo)
    }
}

// o evento 'blur' fará a função acontecer a input for selecionada
cep.addEventListener('blur', (evento) => {

    // essa variavel pega o valor da input
    let search = cep.value;

    // opções do tipo (objeto, um array com mais possibilidades)
    const options = {
        method: 'GET', // metodo de acesso (get,post,put..)
        mode: 'cors', // pedir para entrar na porta (origem/servidor diferente)
        cache: 'default' // o dado so é atualizado se for difente do salvo
    }

    // acesse a esta URL , com essas opções:
    fetch(`https://viacep.com.br/ws/${search}/json/`, options)
        // se der CERTO: me mostre no formato JSON
     .then(resposta => {resposta.json()
        // deu certo no formato JSON?
        .then (dados => showData(dados))
     })
        // se der ERRADO:
     .catch(evento => console.log('deu erro: '+ evento, message))
})