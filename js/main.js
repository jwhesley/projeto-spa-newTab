var extratoRaw = localStorage.getItem('extrato')
if (extratoRaw != null){
    var extrato = JSON.parse(extratoRaw)
}else{
    var extrato = [];
}

const formatarMoeda = new Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
});

desenhaTabela()

//Não permiti o usuário de colar algo no campo de valor.

const campoDeValor = document.querySelector("#valor");
campoDeValor.addEventListener("paste", function(e){
    e.preventDefault()
});

function desenhaTabela(){
    let total = 0;

    linhasExistentes = [...document.querySelectorAll('table.lista tbody .dinamico')];
    linhasExistentes.forEach((element) => {
        element.remove()
    });

    if(extrato.length == 0){
        document.querySelector('table.lista tbody').innerHTML +=
        `<tr class="dinamico">
            <td style="text-align:center; width:100%>Nenhuma Transação Cadastrada</td>
            </tr>`;
    }



    for (mercado in mercadoria){
         let valor = parseFloat(mercadoria[mercado].valor.replace(/[^0-9]/g, ""));
        if(mercadoria[mercado].opcao){
            total -= valor;
        }else{
            total += valor;
        }

        document.querySelector('table.lista tbody').innerHTML += (
        `<tr class="dinamico">
            <td>
            ${(mercadoria[mercado].transacao == "compra" ? "-" : "+") }
            </td>
            <td class="tdDinamico1">
                ${mercadoria[mercado].produto}
            </td>
            <td class="tdDinamico2">
                ${mercadoria[mercado].valor}
            </td>   
        
        </tr>
        `)
    }
}
desenhaTabela()