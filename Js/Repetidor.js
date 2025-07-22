const frm = document.querySelector("form")
const resp1 = document.querySelector("pre")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const fruta = frm.inFruta.value
    const num = Number(frm.inNumero.value)

    let frutas = ""
    for (let i = 1; i <= num; i++) {
    frutas += fruta
    if (i < num) {
      frutas += "-"
    }
  }
    resp1.innerText = frutas
})