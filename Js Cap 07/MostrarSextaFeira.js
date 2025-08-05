const frm = document.querySelector("form")
const resp = document.querySelector("pre")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const hoje = new Date()

    const diasParaSexta = (5 - hoje.getDay() + 7) % 7

    resp.innerText = `A proxima sexta sera daqui ${diasParaSexta} dias`
})