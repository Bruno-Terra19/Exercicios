const frm = document.querySelector("form")
const resp1 = document.querySelector("pre")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const palavra = frm.inText.value

    let resposta = ""
    for (let i = palavra.length - 1; i >= 0; i--) {
        resposta += palavra[i]
    }
    resp1.innerText = resposta
})