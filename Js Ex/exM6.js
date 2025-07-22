const frm = document.querySelector("form")
const resp1 = document.querySelector("pre")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const num = Number(frm.inNumero.value)
    const num2 = Number(frm.inNumero2.value)

    let resposta = ""
    for (let i = 1; i <= num; i++) {
        if (i % 10 === num2) {
            resposta += i + "\n"
        }
    }
    resp1.innerText = resposta
})