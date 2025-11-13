const NumVisitas = document.querySelector("h3")

const contarVisitas = () => {

    let visitas = localStorage.getItem("contador")

    if (!visitas) {
        visitas = 1
        NumVisitas.innerText = `Esta é sua primeira visita!`
    } else {
        visitas = Number(visitas) + 1
        NumVisitas.innerText = `Você já visitou nosso site ${visitas} vezes.`
    }

    localStorage.setItem("contador", visitas)
}

window.addEventListener("load", contarVisitas)