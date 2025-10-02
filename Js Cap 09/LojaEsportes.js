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
// Aqui ele verifica qual radio button está selecionado:
// Se for o do Flamengo → clube = "Flamengo".
// Se for Palmeiras → "Palmeiras".
// Caso contrário → "Cruzeiro" (padrão).

    dvTitulo.className = `row cores-${clube}` // aplica uma classe CSS diferente para mudar o estilo conforme o clube (cores-Flamengo, cores-Palmeiras...).

    imClube.src = `img/${clube.toLocaleLowerCase()}.png` // muda a imagem de acordo com o clube, usando o nome em minúsculo (flamengo.png, palmeiras.png, etc).
    imClube.className = "img-fluid" // A função dela é deixar a imagem responsiva.
    imClube.alt = `Símbolo do ${clube}` // muda o texto alternativo da imagem (importante para acessibilidade).

    localStorage.setItem("clube", clube) // Isso grava o clube escolhido no localStorage do navegador.
    // Diferente de sessionStorage, o localStorage mantém a informação mesmo que você feche e abra o navegador.

}

frm.rbFlamengo.addEventListener("change", trocarClube)
frm.rbPalmeiras.addEventListener("change", trocarClube)
frm.rbCruzeiro.addEventListener("change", trocarClube)
// Sempre que o usuário marcar um radio button diferente, a função trocarClube é chamada.

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
// Ele verifica se já existe um clube salvo no localStorage.
// Se existir, marca o radio button correspondente.
// E chama trocarClube() para atualizar a imagem e as cores automaticamente.
}

window.addEventListener("load", verificarClube) // Assim que a página terminar de carregar, a função verificarClube é executada para restaurar a escolha anterior.

const pVisitas = document.querySelector("#pVisitas")

const contarVisitas = () => {
    // pega o valor salvo
    let visitas = localStorage.getItem("contador")

    if (!visitas) {
        // primeira vez
        visitas = 1
        pVisitas.innerText = "Muito bem-vindo! Esta é a sua Primeira visita ao nosso site."
    } else {
        // já visitou antes
        visitas = Number(visitas) + 1
        pVisitas.innerText = `Você já visitou nosso site ${visitas} vezes.`
    }

    // salva o valor atualizado no localStorage
    localStorage.setItem("contador", visitas)
}

// quando a página carregar, chama essa função
window.addEventListener("load", contarVisitas)
