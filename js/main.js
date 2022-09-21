var mercadoria = [
    {
        produto: 'Melão',
        valor: 'R$ 9,99',
        transacao: true
    },
    {
        produto: 'Mamão',
        valor: 'R$ 5,99',
        transacao: false
    },
    {
        produto: 'Goiaba',
        valor: 'R$ 1,99',
        transacao: true
    },
]
for (mercado in mercadoria){
    document.querySelector('table.lista tbody').innerHTML += (
    `<tr>
    
        <td>
            ${mercadoria[mercado].produto}
        </td>
        <td>
            ${mercadoria[mercado].valor}
        </td>   
    
    </tr>
    `)
}

