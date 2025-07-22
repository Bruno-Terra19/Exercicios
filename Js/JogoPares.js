const frm = document.querySelector("form")
const resp = document.querySelector("#resp")
const btAdd = document.querySelector("#btAdd")
const btNewGame = document.querySelector("#btNewGame")

const numeros = []
const pares = []
const impares = []

btAdd.addEventListener("click", () => {
  const num = Number(frm.inNumero.value)

  if (!frm.inNumero.value) {
  alert("Digite um número antes de adicionar.")
  frm.inNumero.focus()
  return
}

  if (numeros.length >= 5) {
    alert("Você já digitou 5 números permitidos!")
    frm.inNumero.value = ""
    frm.inNumero.focus()
    return
  }

  numeros.push(num)
  frm.inNumero.value = ""
  frm.inNumero.focus()
})

frm.addEventListener("submit", (e) => {
  e.preventDefault()

  if (numeros.length < 5) {
    alert("Você precisa adicionar 5 números antes de verificar.")
    return
  }

  pares.length = 0
  impares.length = 0

  numeros.forEach((numero) => {
    numero % 2 === 0 ? pares.push(numero) : impares.push(numero)
  })

  resp.innerText = `Pares: ${pares.join(", ")}\nÍmpares: ${impares.join(", ")}`
})

btNewGame.addEventListener("click", () => {
  numeros.length = 0
  pares.length = 0
  impares.length = 0
  frm.inNumero.value = ""
  resp.innerText = ""
  frm.inNumero.focus()
})
