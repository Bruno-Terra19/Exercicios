const frm = document.querySelector("form")
const resp1 = document.querySelector("pre")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const numeroInicial = Number(frm.inGo.value)
    const numeroFinal = Number(frm.inLast.value)

    let resultado = ""

    for (let i = numeroInicial + 1; i < numeroFinal; i++){
        resultado += i + " "
    }

    resp1.innerText = resultado
})