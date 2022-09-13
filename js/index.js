function validarForm(e){
    e.preventDefault();
    var nomeProduto = document.getElementById('produto');
    var preco = document.getElementById('valor');
    var tipoTransacao = document.getElementById('opcao');
    var padraoNumero = /[^0-9(),.]+/g;

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