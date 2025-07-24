const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const funcionario = frm.inFuncionario.value

    const partes = funcionario.split(" ")
// Divide o nome completo em partes separadas por espaço. Ex: "Maria Fernanda Lima" → ["Maria", "Fernanda", "Lima"]
    let email = ""
    const tam = partes.length
// Cria uma string vazia para o e-mail. Salva o total de palavras do nome.

    for (let i = 0; i < tam - 1; i++){
        email += partes[i].charAt(0)
    }
// Esse for percorre todas as partes do nome, menos a última. Para cada parte, pega a primeira letra (charAt(0)) e adiciona ao e-mail.
// Ex: "Maria Fernanda Lima" → email = "mf"
    email += partes[tam - 1] + "@empresa.com.br"
//Adiciona o último sobrenome + @empresa.com.br ao e-mail. Ex: email = "mf" + "lima@empresa.com.br" → "mflima@empresa.com.br"
    resp.innerText = `E-mail: ${email.toLowerCase()}`
})