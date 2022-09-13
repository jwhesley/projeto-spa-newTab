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
    
    if(padraoNumero.test(e.key)){
        e.preventDefault()
        return
    }
    if(!e.target.value) return;

    valor = e.target.value.toString();
    valor = valor.replace(/[\D]+/g, '');
    valor = valor.replace(/([0-9]{1})$/g, ",$1")

    if(valor.length >= 6){
        while(/([0-9]{4})[,|\.]/g.test(valor)){
            valor = valor.replace(/([0-9]{1})$/g, ",$1");
			valor = valor.replace(/([0-9]{3})[,|\.]/g, ".$1");
        }

    }
    e.target.value = valor
}


