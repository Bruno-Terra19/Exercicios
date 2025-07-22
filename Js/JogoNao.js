const frm = document.querySelector("form")
const resp = document.querySelector("h3")
const button = document.querySelector("#btAdd")
const submit = document.querySelector("#btSubmit")
const newGame = document.querySelector("#btNewGame")

let sorteio = []
let lista = []
/*sorteio: array que armazenará os 5 números aleatórios do computador.
  lista: array que armazenará os números que o usuário digitar (máximo 3).*/

function sortearNumeros() {
  sorteio.length = 0
  while (sorteio.length < 5) {
    const num = Math.floor(Math.random() * 30) + 1
    if (!sorteio.includes(num)) {
      sorteio.push(num)
    }
  }
}
/*Garante que o array sorteio tenha 5 números diferentes entre 1 e 30.
  Math.floor(Math.random() * 30) + 1: sorteia um número inteiro entre 1 e 30.
  if (!sorteio.includes(num)): impede que o mesmo número se repita.
  sorteio.push(num): Adiciona o número sorteado no array sorteio.*/

button.addEventListener("click", () => {
  const numero = Number(frm.inNumero.value) 
// Pega o valor digitado no input (frm.inNumero.value) e transforma em número.
  if (!frm.inNumero.value) {
    alert("Digite um número antes de adicionar.")
    frm.inNumero.focus()
    return
  }
// Se o campo estiver vazio, mostra alerta e para a função com return.  

  if (lista.length >= 3) {
    alert("Você já adicionou 3 números permitidos!")
    frm.inNumero.value = ""
    frm.inNumero.focus()
    return
  }
  // Se o jogador já adicionou 3 números, mostra alerta e impede adicionar mais.

  lista.push(numero)
  // Se tudo estiver certo, adiciona o número no array lista.

  if (lista.length === 3) {
    submit.disabled = false
  }
  // Quando a lista tiver 3 números, habilita o botão "Verificar" (submit.disabled = false).

  frm.inNumero.value = ""
  frm.inNumero.focus()
  // Limpa o campo e retorna o cursor para o campo number.
})

frm.addEventListener("submit", (e) => {
  e.preventDefault()
// Cancela o envio padrão do formulário. 

  const perdeu = lista.some((num) => sorteio.includes(num)) // .some((num) => ...) → percorre cada número da lista.
/* Verifica se algum número da lista está dentro de sorteio usando some().
  O método .some() verifica se algum elemento do array atende a uma condição.
  Ele retorna:
  true se pelo menos um elemento passar na condição,
  false se nenhum elemento passar.
  Ela verifica se algum número da lista digitada pelo jogador está dentro do array sorteio (ou seja, se algum número foi sorteado).*/

  if (!perdeu) {
    resp.innerText = `🎉 Parabéns, você ganhou!!\nNúmeros sorteados: ${sorteio.join(", ")}` // Se nenhum número bate, o jogador vence.
  } else {
    resp.innerText = `❌ Game Over!!\nNúmeros sorteados: ${sorteio.join(", ")}` // Se qualquer número estiver na lista sorteada, perde.
  }

  submit.disabled = true // Exibe a mensagem de vitória ou derrota e desabilita o botão "Verificar".
  frm.inNumero.value = ""
  frm.inNumero.focus()
})

newGame.addEventListener("click", () => {
  sortearNumeros()
  lista.length = 0
  resp.innerText = ""
  submit.disabled = true
  frm.inNumero.value = ""
  frm.inNumero.focus()
/*Gera novos números sorteados.
  Limpa a lista de números digitados pelo jogador.
  Limpa a mensagem de resultado e o input.
  Desativa o botão "Verificar".*/
})

window.addEventListener("load", () => {
  alert("🎯 Bem-vindo(a) ao Jogo do NÃO ESTÁ!\n\nDigite até 3 números entre 1 e 30.\nSe NENHUM deles estiver entre os sorteados, você vence!")
  sortearNumeros()
  submit.disabled = true
/*Assim que a página carrega:
  Exibe um alerta com as instruções.
  Sorteia os números iniciais.
  Desabilita o botão "Verificar".*/
})