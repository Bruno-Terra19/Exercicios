const frm = document.querySelector("form")
const btSubmit = document.querySelector("#btSubmit")
const btNewGame = document.querySelector("#btNewGame")
const resp = document.querySelector("h3")

let sorteio = null
// Cria uma variável global sorteio para guardar o número aleatório sorteado.
// Usar null serve para indicar que a variável ainda não tem um valor válido atribuído. 
// É uma forma de “esvaziar” ou “zerar” a variável no começo.
function sortearNumero() {
  sorteio = Math.floor(Math.random() * 10) + 1
}

btSubmit.disabled = true
// Desativa o botão "Verificar" no início, forçando o jogador a escolher uma opção (Par ou Ímpar) antes de jogar.

const radios = document.querySelectorAll('input[name="escolha"]')
radios.forEach((radio) => {
  radio.addEventListener("change", () => {
    btSubmit.disabled = false
  })
})
/*Seleciona todos os botões de rádio (Par e Ímpar).
  Para cada um, adiciona um eventListener que:
  Ativa o botão "Verificar" quando o jogador selecionar uma opção.*/

frm.addEventListener("submit", (e) => {
  e.preventDefault()

  const opcao = document.querySelector('input[name="escolha"]:checked')
  if (!opcao) {
    alert("Por favor, selecione uma opção!")
    return
// Verifica se o jogador selecionou Par ou Ímpar. 
// Se não, mostra um alerta e cancela o jogo.
  }

  const escolha = opcao.value
  const resultadoPar = sorteio % 2 === 0
  const resultado = resultadoPar ? "par" : "impar"
// escolha pega o valor selecionado: "par" ou "impar".
// sorteio % 2 === 0 verifica se o número sorteado é par.
// Usa operador ternário (? :) para definir o resultado como "par" ou "impar".

  if (escolha === resultado) {
    resp.innerText = `🎉 Parabéns! Você acertou. Número sorteado: ${sorteio}`
  } else {
    resp.innerText = `❌ Que pena! Você errou. Número sorteado: ${sorteio}`
  }

  btSubmit.disabled = true
// Após jogar, desativa o botão para evitar múltiplos envios com o mesmo número.
})

btNewGame.addEventListener("click", () => {
  sortearNumero()
  frm.reset()
  resp.innerText = ""
  btSubmit.disabled = true
/* Sorteia novo número.
Reseta o formulário (desmarca os rádios).
Limpa a resposta.
Desativa o botão "Verificar" novamente.*/
})

window.addEventListener("load", () => {
  alert("🎯 Bem-vindo(a) ao jogo Acerte o Par ou Ímpar!\n\nO computador sorteia um número entre 1 e 10.\nVocê deve adivinhar se será Par ou Ímpar.")
  sortearNumero()
})
