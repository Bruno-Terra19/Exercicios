const frm = document.querySelector("form")
const Produtos = document.querySelector("#outAntigo")
const Desconto = document.querySelector("#outDesconto")
const BotaoAdd = document.querySelector("#btAdd")
const BotaoDesconto = document.querySelector("#btDesconto")
const Recomeçar = document.querySelector("#btClear")

const produtos = []
let desconto = []

BotaoAdd.addEventListener("click", () => {
    const produto = frm.inText.value
    const preco = Number(frm.inNumber.value)

    if (!produto || !preco || isNaN(preco)) {
        alert("Preencha os campos!")
        frm.inText.focus()
        return
    }

    produtos.push({ produto: produto, preco: preco })

    frm.inText.value = ""
    frm.inNumber.value = ""
    frm.inText.focus()
})

BotaoDesconto.addEventListener("click", () => {
    const ValorDesconto = Number(frm.inDesconto.value)

    if (!ValorDesconto || isNaN(ValorDesconto)) {
        alert("Digite o valor do desconto!")
        frm.inDesconto.focus()
        return
    }

    if (desconto.length > 0) {
        alert("Você já adicionou o desconto.")
        return
    }

    if (produtos.length === 0) {
        alert("Sem produtos para calcular o desconto!")
        return
    }

    desconto.push(ValorDesconto)
    frm.inDesconto.value = ""
})

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    if (produtos.length === 0) {
        alert("Adicione um produto primeiro.")
        frm.inText.focus()
        return
    }

    if (desconto.length === 0) {
        alert("Adicione o valor do desconto.")
        frm.inDesconto.focus()
        return
    }

    const taxaDesconto = desconto[0]

    const produtosComDesconto = produtos.map(p => {
        return {
            produto: p.produto,
            preco: (p.preco - (p.preco * taxaDesconto / 100)).toFixed(2)
        }
    })

    let textoOriginal = "Produtos:\n"
    produtos.forEach(p => {
        textoOriginal += `${p.produto}: R$ ${p.preco.toFixed(2)}\n`
    })
    Produtos.innerText = textoOriginal

    let textoDesconto = "Com Desconto:\n"
    produtosComDesconto.forEach(p => {
        textoDesconto += `${p.produto}: R$ ${p.preco}\n`
    })
    Desconto.innerText = textoDesconto
})

Recomeçar.addEventListener("click", () => {
    produtos.length = 0
    desconto.length = 0
    Produtos.innerText = ""
    Desconto.innerText = ""
    frm.inText.value = ""
    frm.inNumber.value = ""
    frm.inDesconto.value = ""
    frm.inText.focus()
})