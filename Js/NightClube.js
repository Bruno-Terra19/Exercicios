const frm = document.querySelector("form")
const ListarFilmes = document.querySelector("#ltFilmes")
const Ordenar = document.querySelector("#Ordenar")
const Sugerir = document.querySelector("#Aleatorio")
const Lista = document.querySelector("pre")

const lista = ["Harry Potter", "Transformers", "Superman"]

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const nomeFilme = frm.inNome.value
    const ano = Number(frm.inAno.value)
    const genero = frm.inGenero.value

})