const frm = document.querySelector("form")
const resp1 = document.querySelector("#resp")
const NewGame = document.querySelector("#btNewGame")
const submit = document.querySelector("#btSubmit")
const button = document.querySelector("#inButton")

const numeros = []
const maiores = []
const menores = []
/*numeros: armazena os números digitados.
  maiores: guardará os números maiores ou iguais a 10.
  menores: guardará os números menores que 10.*/

button.addEventListener("click", () => {
const num = Number(frm.inNumero.value)

    if (!frm.inNumero.value) {
    alert("Digite um número antes de adicionar.")
    frm.inNumero.focus()
    return
// Se o input estiver vazio, mostra um alerta e interrompe a função com return.
}
    if (numeros.length >= 5) {
    alert("Você já digitou 5 números permitidos!")
    frm.inNumero.value = ""
    frm.inNumero.focus()
    return
// Se já tiver 5 números, impede que mais sejam adicionados.
  }

  numeros.push(num)
// Adiciona o número ao array numeros.
  frm.inNumero.value = ""
  frm.inNumero.focus()
// Limpa o campo de input e foca novamente nele.
})

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    if (numeros.length < 5) {
    alert("Você precisa adicionar 5 números antes de somar.")
    return
// Verifica se o usuário adicionou 5 números. Se não, alerta.
  }

  maiores.length = 0
  menores.length = 0
// Limpa os arrays maiores e menores.
  numeros.forEach((numero) => {
/*Para cada elemento dentro do array numeros:
  Ele chama a função (numero) => { ... }
  Dentro dessa função, o valor de numero será cada item do array (um por vez).*/
  numero >= 10 ? maiores.push(numero) : menores.push(numero)
  })
// Usa .forEach() para separar os números:
// Se numero >= 10 → vai para maiores.
// Senão → vai para menores.
  const soma = maiores.reduce((total, numero) => total + numero, 0)
// Soma os valores do array maiores usando .reduce().
  resp1.innerText = `A soma dos números maiores que 10 é: ${soma}\nOs números restantes são: ${menores}\nNúmeros adicionados: ${numeros}`
})

NewGame.addEventListener("click", () => {
  numeros.length = 0
  maiores.length = 0
  menores.length = 0
  frm.inNumero.value = ""
  resp1.innerText = ""
  frm.inNumero.focus()
})
