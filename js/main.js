var mercadoria = [
    {
        produto: 'Melão',
        valor: 'R$ 9,99',
        transacao: 'compra'
    },
    {
        produto: 'Mamão',
        valor: 'R$ 5,99',
        transacao: 'venda'
    },
    {
        produto: 'Goiaba',
        valor: 'R$ 1,99',
        transacao: 'compra'
    },
]
for (mercado in mercadoria){

    
    document.querySelector('table.lista tbody').innerHTML += (
    `<tr>
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

