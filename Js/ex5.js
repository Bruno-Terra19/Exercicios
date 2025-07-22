const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const dias = Number(frm.inNumero.value)

    const semanas = Math.floor(dias / 7)
    const dia = Math.floor(dias % 7 )

    resp1.innerText = `${semanas} semana(s) e ${dia} dia(s)`
})