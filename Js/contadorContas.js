const frm = document.querySelector("form")
const resp1 = document.querySelector("#resp1")
const resp2 = document.querySelector("#resp2")

let resposta = ""
let numContas = 0
let valTotal = 0

/* Inicializa **variáveis de controle**:
- `resposta`: string que vai acumular os textos das contas digitadas.
- `numContas`: conta quantas despesas foram adicionadas.
- `valTotal`: soma o valor de todas as despesas inseridas.*/

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const descricao = frm.inDescricao.value
    const valor = Number(frm.inValor.value)

    numContas++
    valTotal = valTotal + valor
    /* numContas++
    valTotal = valTotal + valor
    Incrementa a quantidade de contas com numContas++.
    Soma o valor digitado ao total acumulado com valTotal + valor.*/
    resposta = resposta + descricao + " - R$: " + valor.toFixed(2) + "\n"
    /* - Adiciona uma nova linha ao texto `resposta`, formatando a descrição e o valor.
    `toFixed(2)` garante que o valor tenha sempre duas casas decimais.
    `\n` adiciona uma quebra de linha.*/
    resp1.innerText = `${resposta} --------------------------------`
    resp2.innerText = `${numContas} Conta(s) - Total R$: ${valTotal.toFixed(2)}`

    frm.inDescricao.value = ""
    frm.inValor.value = ""
    frm.inDescricao.focus()
    /* Limpa os campos do formulário para o próximo lançamento.
    Coloca o foco no campo de descrição, para facilitar a digitação da próxima conta.*/
})