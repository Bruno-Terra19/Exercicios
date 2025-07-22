const frm = document.querySelector("form")
const resp1 = document.querySelector("pre")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const num = Number(frm.inNumero.value)

    let resposta = ""
    for (let i = 1; i <= num; i++) {
        if (i % 3 === 0) {
            resposta += i + "\n"
        }
    }
    resp1.innerText = resposta
})