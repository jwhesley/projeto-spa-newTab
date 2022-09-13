var nomeProduto = document.getElementById('produto');
var preco = document.getElementById('valor');
var tipoTransacao = document.getElementById('opcao');
var padraoNumero = /[^0-9(),.]+/g;


function validarForm(e){
    e.preventDefault();

    if(nomeProduto.value == ""){
        alert('Digite o nome do Produto!');
        nomeProduto.focus();
        return
    }
    if(padraoNumero.test(preco.value)){
        alert('Digite o valor com números!')
        preco.focus();
        return
    }
}

function testarCampoValor(e){
    e.preventDefault()
    console.log(e)

    if((/[0-9]/g).test(e.key)){
        e.target.value += e.key
    }
    }
