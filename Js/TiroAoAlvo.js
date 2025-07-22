const frm = document.querySelector("form")
const resp = document.querySelector("#resp1")
const resp2 = document.querySelector("#outErros")
const resp3 = document.querySelector("#outChances")
const btNovo = document.querySelector("#btNovo")

const numeros = []
const erros = []
const chances = 5 
/*numeros → vai conter os 5 números sorteados aleatoriamente.
  erros → guarda os números errados já tentados (para evitar repetições).*/

const radioSortear = document.querySelector('input[name="sortear"]')

function sortearNumeros() {
  numeros.length = 0
  while (numeros.length < 5) { // Usei um while ao invés de for para continuar tentando até ter exatamente 5 números únicos.
    const num = Math.floor(Math.random() * 30) + 1
    if (!numeros.includes(num)) {
      numeros.push(num)
/*Verifica se já existe no array numeros.
  Se não existir, adiciona com push().
  Se já existir, ignora e tenta outro número.
  O while continua rodando até que o array tenha 5 números únicos.
  Ele não se importa com quantas vezes precisa repetir — se gerar números repetidos, 
  ele tenta novamente até preencher 5 valores válidos.*/
    }
  }
}
/*Essa função limpa o array numeros e sorteia 5 novos números de 1 a 30 (inclusive).*/

radioSortear.addEventListener("change", () => {
  sortearNumeros()
/* Quando o jogador marca a opção “Sortear Números”,
 a função sortearNumeros() é chamada e os números são sorteados.*/
})

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const opcao = document.querySelector('input[name="sortear"]:checked')
    if (!opcao) {
    alert("Selecione a opção 'Sortear Números' antes de jogar.")
    return
  /* Verifica se o jogador selecionou o radio “Sortear Números”. Se não, mostra alerta e cancela.*/
  }

    const num = Number(frm.inNumero.value)

    if (numeros.includes(num)) {
        resp.innerText = `Acertou, o número está na lista!` // Se o número digitado estiver entre os sorteados, exibe mensagem de acerto.
    } else {
        if (erros.includes(num)) { // Verifica se já foi tentado (repetido)
            alert(`Você já tentou esse número! Tente outro número...`)
        } else {
            erros.push(num) // Se for novo, adiciona ao array erros
            const numErrados = erros.length
            const numChances = chances - numErrados
            resp2.innerText = `Palpites: ${numErrados} (${erros.join(", ")})`
            resp3.innerText = `Chances Restantes: ${numChances}`
            // Atualiza as mensagens de palpites e chances restantes.
                if (numChances === 0) {
                    alert(`Suas chances acabaram! Números sorteados ${numeros}`)
                    frm.btSubmit.disabled = true
                    return
            // Se o jogador errar 5 vezes, mostra os números sorteados e desativa o botão de enviar.
                }
        } 
    }
    frm.inNumero.value = ""
    frm.inNumero.focus()
})
btNovo.addEventListener("click", () => {
    erros.length = 0
    sortearNumeros()
    
    frm.btSubmit.disabled = false
    resp.innerText = ""
    resp2.innerText = "Palpites:"
    resp3.innerText = "Chances Restantes: " + chances
    frm.inNumero.value = ""
    frm.inNumero.focus()
/*Limpa os erros,
 Sorteia novos números,
 Reativa o botão de verificar,
 Limpa os campos de resposta e reinicia o jogo.*/
})