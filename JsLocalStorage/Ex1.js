const frm = document.querySelector("form")
const btAdd = document.querySelector("#btSalvar")
const btExibir = document.querySelector("#btExibir")
const Nomes = document.querySelector("pre")

let nomes = []

btAdd.addEventListener("click", () => {

    const nome = frm.nome.value

    if (!nome) {
        alert("Informe um nome")
        frm.nome.focus()
        return
    } else {
        nomes.push(nome)
        localStorage.setItem("nomes", JSON.stringify(nomes))
        alert(`Nome ${nome} salvo com sucesso`)
        frm.reset()
        frm.nome.focus()
    }
})

window.addEventListener("load", () => {
    if (localStorage.getItem("nomes")) {
        nomes = JSON.parse(localStorage.getItem("nomes"))
        exibirNomes()
    }
})

btExibir.addEventListener("click", () => {
    if (nomes.length === 0) {
        Nomes.innerText = "Nenhum nome cadastrado"
    } else {
        Nomes.innerText = "Nomes: \n"
        for (const n of nomes) {
            Nomes.innerText += `${n}\n`
        }
    }

})

/* nomes.push(nome) → adiciona o novo nome ao array nomes.
localStorage.setItem("nomes", JSON.stringify(nomes)) → salva o array nomes no localStorage.
Por que usamos JSON.stringify?
O localStorage só consegue salvar strings.
Arrays ou objetos não podem ser salvos diretamente.
localStorage.getItem("nomes") → pega a string salva no localStorage com a chave "nomes".
JSON.parse(...) → converte a string JSON de volta para um array.
nomes = JSON.parse(...) → agora seu array nomes contém todos os nomes salvos anteriormente.
Sem o JSON.parse, você teria apenas uma string, e não poderia usar métodos de array como push ou for...of.*/