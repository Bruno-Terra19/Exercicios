const frm = document.querySelector("form")
const resp = document.querySelector("pre")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const data = frm.inData.value

    if(!data) {
        alert("Infome uma data válida!")
        return
    }

    const partes = data.split("-") // data.split("-"): divide a string no formato aaaa-mm-dd em 3 partes.
    const ano = Number(partes[0])
    const mes = Number(partes[1]) - 1 // mes: parte [1] (menos 1, pois no JavaScript os meses vão de 0 a 11)
    const dia = Number(partes[2])

    const Data = new Date(ano, mes, dia) // Cria um objeto Date com a data completa. Esse objeto permite usar métodos como getMonth() para descobrir o mês.

    const NomesDosMeses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", 
        "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"] // Posição 0 = Janeiro, posição 11 = Dezembro.

    const NomeMes = NomesDosMeses[Data.getMonth()] // Data.getMonth() retorna o número do mês (de 0 a 11). Esse número é usado como índice para buscar o nome no array.

    resp.innerText = `Mês: ${NomeMes}`
})