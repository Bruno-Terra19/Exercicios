const frm = document.querySelector("form")
const resp = document.querySelector("pre")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const data1 = frm.inData1.value
    const data2 = frm.inData2.value

    if(!data1 || !data2) {
        alert("Informe as datas!")
        return
    }

    const partes1 = data1.split("-")
    const ano1 = Number(partes1[0])
    const mes1 = Number(partes1[1]) - 1
    const dia1 = Number(partes1[2])

    const PrimeiraData = new Date(ano1, mes1, dia1)

    const partes2 = data2.split("-")
    const ano2 = Number(partes2[0])
    const mes2 = Number(partes2[1]) - 1
    const dia2 = Number(partes2[2])

    const SegundaData = new Date(ano2, mes2, dia2)

    const diff = Math.abs(SegundaData - PrimeiraData) // A função Math.abs() devolve o valor absoluto (ou seja, sempre positivo).

    const dias = Math.ceil(diff / 86400000)

    resp.innerText = `Diferença: ${dias} dias`
})