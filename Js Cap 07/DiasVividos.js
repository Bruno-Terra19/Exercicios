const frm = document.querySelector("form")
const resp = document.querySelector("pre")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const data = frm.inData.value

    if(!data) {
        alert("Informe uma data")
        frm.inData.focus()
        return
    }

    const partes = data.split("-")
    const ano = Number(partes[0])
    const mes = Number(partes[1]) - 1 
    const dia = Number(partes[2])

    const DataNasc = new Date(ano, mes, dia)

    const hoje = new Date()

    const diff = hoje - DataNasc

    const dias = Math.ceil(diff / 86400000 )

    resp.innerText = `Você tem ${dias} dias vividos`
})