const frm = document.querySelector("form")
const resp1 = document.querySelector("pre")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const text = frm.inText.value
    const letra = frm.inText2.value.toLowerCase()  // converte a letra digitada para minúscula

    let contador = 0

    for (let i = 0; i < text.length; i++) {
        if (text[i].toLowerCase() === letra) {
            contador++
        }
    }

    resp1.innerText = `A letra "${letra}" aparece ${contador} vezes.`
})