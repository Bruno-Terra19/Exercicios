const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const segundos = Number(frm.inNumero.value)

    const horas = Math.floor(segundos / 3600)
    const minutos = Math.floor((segundos % 3600) / 60)
    const restoSegundos = Math.floor(segundos % 60)

    resp1.innerText = `Em ${segundos} segundos tem: ${horas} hora(s) ${minutos} minuto(s) e ${restoSegundos} segundo(s)`
})