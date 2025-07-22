const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const speedPermitida = Number(frm.inNumero.value)
    const speedCondutor = Number(frm.inSpeed.value)

    const limiteLeve = speedPermitida * 1.2

    if (speedCondutor <= speedPermitida) {
        resp1.innerText = "Sem multa"
    } else if (speedCondutor <= limiteLeve) {
        resp1.innerText = "Multa leve"
    } else {
        resp1.innerText = "Multa grave"
    }
})