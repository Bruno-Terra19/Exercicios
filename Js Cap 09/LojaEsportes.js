const frm = document.querySelector("form")
const imClube = document.querySelector("#imgClube")
const dvTitulo = document.querySelector("#divTitulo")

const trocarClube = () => {
    let clube 

    if (frm.rbFlamengo.checked) {
        clube = "Flamengo"
    } else if (frm.rbPalmeiras.checked) {
        clube = "Palmeiras"
    } else {
        clube = "Cruzeiro"
    }

    dvTitulo.className = `row cores-${clube}`

    imClube.src = `img/${clube.toLocaleLowerCase()}.png`
    imClube.className = "img-fluid"
    imClube.alt = `Símbolo do ${clube}`

    localStorage.setItem("clube", clube)

}

frm.rbFlamengo.addEventListener("change", trocarClube)
frm.rbPalmeiras.addEventListener("change", trocarClube)
frm.rbCruzeiro.addEventListener("change", trocarClube)

const verificarClube = () => {

    if (localStorage.getItem("clube")) {
        const clube = localStorage.getItem("clube")

        if (clube === "Flamengo") {
            frm.rbFlamengo.checked = true
        } else if (clube === "Palmeiras") {
            frm.rbPalmeiras.checked = true
        } else {
            frm.rbCruzeiro.checked = true
        }
        trocarClube()
    }
}

window.addEventListener("load", verificarClube)