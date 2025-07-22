const frm = document.querySelector("form")
const resp1 = document.querySelector("pre")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const numero = Number(frm.inNumero.value)

    let resposta = ""
    for (let i = numero; i >= 0; i--) {
    resposta += i + "\n"
  }

    resp1.innerText = resposta
})