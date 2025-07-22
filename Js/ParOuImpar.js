const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const opcao = document.querySelector('input[name="escolha"]:checked')
    if (!opcao) {
    alert("Por favor, selecione Par ou Ímpar.")
    return
  }
    const escolha = opcao.value
    const numEscolhido = Number(frm.inNumero.value)
    const numPC = Math.floor(Math.random() * 10) + 1

    const soma = numEscolhido + numPC
    const resultadoPar = soma % 2 === 0
    const resultado = resultadoPar ? "par" : "ímpar"

    if (escolha === resultado) {
    resp1.innerText = `Você escolheu ${escolha}, jogou ${numEscolhido}, o computador jogou ${numPC}. Soma: ${soma} (${resultado.toUpperCase()})\n Você venceu!`
  } else {
    resp1.innerText = `Você escolheu ${escolha}, jogou ${numEscolhido}, o computador jogou ${numPC}. Soma: ${soma} (${resultado.toUpperCase()})\n Computador venceu.`
  }

  frm.inNumero.value = ""
  frm.inNumero.focus()
})