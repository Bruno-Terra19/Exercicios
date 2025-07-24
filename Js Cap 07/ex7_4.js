const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const nome = frm.inFuncionario.value

    if (!nome.includes(" ")) {
        alert("Informe o nome completo...")
        return
    }
/*Verifica se o nome digitado contém pelo menos um espaço (ou seja, se a pessoa digitou nome e sobrenome).
Se não tiver espaço, mostra um alert() e interrompe a função com return.*/

    const priEspaco = nome.indexOf(" ") // Pega a posição do primeiro espaço na string. Exemplo: "Maria Joana da Silva" → o primeiro espaço está no índice 5.
    const ultEspaco = nome.lastIndexOf(" ") // Pega a posição do último espaço. No exemplo, "Maria Joana da Silva" → o último espaço está no índice 16.
    const cracha = nome.substr(0, priEspaco) + nome.substr(ultEspaco)
/*nome.substr(0, priEspaco) → pega do início até antes do primeiro espaço → primeiro nome.
"Maria Joana da Silva" → "Maria"
nome.substr(ultEspaco) → pega do último espaço até o final → inclui o espaço e o último sobrenome.
" Silva"
Resultado: "Maria Silva".*/
    resp.innerText = `Crachá: ${cracha}`
})
