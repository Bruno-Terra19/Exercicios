const frm = document.querySelector("form")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const hoje = new Date() // Cria um objeto com a data atual

    const dia = hoje.getDate() // Pega o dia do mês (1 a 31)
    const mes = hoje.getMonth() + 1 // Pega o mês (0 a 11), por isso soma +1
    const ano = hoje.getFullYear() // Pega o ano (ex: 2025)

    // dia.toString()Converte o número do dia (por exemplo, 5) em uma string ("5").
    const diaFormatado = dia.toString().padStart(2, "0") 
    const mesFormatado = mes.toString().padStart(2, "0")
    // Adiciona zeros à esquerda até que a string tenha 2 caracteres.
    // Se o valor já tiver 2 dígitos (como "12"), nada muda.
    // Se for "5", vira "05".
    // Ou seja: o padStart(2, "0") é só para deixar a data mais bonita e padronizada no formato dd/mm/aaaa.
    const dataFinal = `${diaFormatado}/${mesFormatado}/${ano}`

    frm.outData.value = dataFinal
})