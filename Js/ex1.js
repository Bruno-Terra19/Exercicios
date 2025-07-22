const frm = document.querySelector("form");
const resp1 = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    const numero = Number(frm.inNumero.value)
    const quadrado = Math.pow(numero, 2)

    resp1.innerText = `O quadrado é: ${quadrado}`

    e.preventDefault()
})