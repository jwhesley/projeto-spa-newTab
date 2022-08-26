function validarForm(e){
    e.preventDefault();

    produto = document.getElementById('produto');
    valor = document.getElementById('valor');
    opcao = document.getElementById('opcao');

    if(!produto.value){
        produto.focus();
        return
    }

    console.log(!valor.value && valor.value.replace(/[^0-9]/g, "") == "")

    if(valor.value.replace(/[^0-9]/g, "") == ""){
        alert('Apenas Números')
        valor.focus();
        return parseInt(valor)
    }
}