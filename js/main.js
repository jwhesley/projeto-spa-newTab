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





function desenhaTabela(){
    let total = 0;

    linhasExistentes = [...document.querySelectorAll('table.lista tbody .dinamico')];
    linhasExistentes.forEach((element) => {
        element.remove()
    });


    for (mercado in mercadoria){
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