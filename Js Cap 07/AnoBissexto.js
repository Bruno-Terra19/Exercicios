const frm = document.querySelector("form")
const resp = document.querySelector("pre")

frm.addEventListener("submit", (e) => {
  e.preventDefault()

  const ano = Number(frm.inAno.value)

  if (!ano || ano <= 0) {
    resp.innerText = "Informe um ano válido."
    return
  }

  const bissexto = (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)

  if (bissexto) {
    resp.innerText = `${ano} é bissexto.`
  } else {
    resp.innerText = `${ano} não é bissexto.`
  }
})
