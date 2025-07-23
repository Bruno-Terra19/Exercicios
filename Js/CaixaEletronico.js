const frm = document.querySelector("form")
const resp = document.querySelector("h3")
const NovoSaque = document.querySelector("#btNew")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const valorDigitado = Number(frm.inNumero.value)

    function calcularNotas(valor) {
        let notas100 = Math.floor(valor / 100)
        valor %= 100
        let notas50 = Math.floor(valor / 50)
        valor %= 50
        let notas20 = Math.floor(valor / 20)

        return `Notas de 100: ${notas100}\nNotas de 50: ${notas50}\nNotas de 20: ${notas20}`
    }

    const resultado = calcularNotas(valorDigitado)
    resp.innerText = resultado
})

NovoSaque.addEventListener("click", () => {

    frm.inNumero.value = ""
    frm.inNumero.focus()
    resp.innerText = ""
})