const frm = document.querySelector("form")
const resp = document.querySelector("pre")

frm.addEventListener("submit", (e) => {
  e.preventDefault()   // evita recarregar a página

  // 1. Pegar o preço digitado
  const preco = Number(frm.inPreco.value)

  // 2. Descobrir qual convênio foi marcado
  const convenioSelecionado = frm.convenio.value

  // 3. Calcular desconto
  const { valorDesconto, valorFinal } = calcularDesconto(preco, convenioSelecionado)

  // 4. Mostrar resultado
  resp.innerText =
    `Preço original: R$ ${preco.toFixed(2)}\n` +
    `Desconto: R$ ${valorDesconto.toFixed(2)}\n` +
    `Valor a pagar: R$ ${valorFinal.toFixed(2)}`
})

// Função que calcula desconto
function calcularDesconto(preco, convenio) {
  let desconto = 0

  if (convenio === "nenhum") {
    desconto = 0.10
  } else if (convenio === "amigos") {
    desconto = 0.20
  } else if (convenio === "saude") {
    desconto = 0.50
  }

  const valorDesconto = preco * desconto
  const valorFinal = preco - valorDesconto

  return { valorDesconto, valorFinal }
}
