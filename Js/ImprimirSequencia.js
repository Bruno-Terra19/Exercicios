const frm = document.querySelector("form")
const resp1 = document.querySelector("pre")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const num = Number(frm.inNumero.value)

    let resultado = ""
    for (let i = 1; i <= num; i++) {
        resultado += i + "\n"
    }
    resp1.innerText = resultado
})