const frm = document.querySelector("form")
const respLista = document.querySelector("pre")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const nome = frm.inNome.value
    const peso = Number(frm.inPeso.value)

    if (verApostaExiste(peso)) {
        alert("Alguém já apostou este peso, informe outro...")
        frm.inPeso.focus()
        return
    // Chama a função verApostaExiste → retorna true se aquele peso já existe no localStorage. Se já existe, mostra alerta e não deixa continuar.
    }

    if (localStorage.getItem("melanciaNome")) {
        const melanciaNome = localStorage.getItem("melanciaNome") + ";" + nome
        const melanciaPeso = localStorage.getItem("melanciaPeso") + ";" + peso
        localStorage.setItem("melanciaNome", melanciaNome)
        localStorage.setItem("melanciaPeso", melanciaPeso)
    } else {
        localStorage.setItem("melanciaNome", nome)
        localStorage.setItem("melanciaPeso", peso)
    // Ele guarda nomes e pesos como strings separadas por ;.
    // Exemplo: "Ana;Carlos;João"
    // Exemplo: "1200;1300;1500"
    }

    mostrarApostas()
    frm.reset()
    frm.inNome.focus()
})

const verApostaExiste = (peso) => {
    if (localStorage.getItem("melanciaPeso")) {
        const pesos = localStorage.getItem("melanciaPeso").split(";")

        return pesos.includes(peso.toString())
    } else {
        return false
    }
// Objetivo: verificar se o peso digitado já foi escolhido por alguém.
// localStorage.getItem("melanciaPeso") → pega todos os pesos já salvos.
//.split(";") → transforma a string "1200;1350;1400" em um array ["1200","1350","1400"].
//.includes(peso.toString()) → verifica se o peso atual (transformado em string) já está na lista.
//Se não existir nada no localStorage ainda (primeira aposta), ele retorna false.
}

const mostrarApostas = () => {

    if (!localStorage.getItem("melanciaNome")) {
        respLista.innerText = ""
        return
    }

    const nomes = localStorage.getItem("melanciaNome").split(";")
    const pesos = localStorage.getItem("melanciaPeso").split(";")

    let linhas = ""

    for (let i = 0; i < nomes.length; i++) {
        linhas += nomes[i] + " - " + pesos[i] + "gr \n"
    }

    respLista.innerText = linhas
    // Pega os dados, divide com split(";") e mostra cada aposta formatada.
}

window.addEventListener("load", mostrarApostas)

frm.btVencedor.addEventListener("click", () => {

    if (!localStorage.getItem("melanciaNome")) { // pega a lista de nomes.
        alert("Não há apostas cadastradas")
        return
    // Se não existir nada (primeira execução, sem apostas), o if é verdadeiro.
    // Ele alerta o usuário e dá um return → interrompe a função, porque não faz sentido procurar vencedor se não tem ninguém jogando.
    }

    const pesoCorreto = Number(prompt("Qual o peso correto da melancia?"))
    // Abre uma caixinha para o usuário digitar o peso real da melancia. Number(...) garante que o valor seja tratado como número, não como texto.
    if (pesoCorreto === 0 || isNaN(pesoCorreto)) {
        return
    // Se a pessoa digitar 0 ou algo que não é número (NaN), o programa simplesmente para aqui (return), porque não faz sentido continuar.
    }

    const nomes = localStorage.getItem("melanciaNome").split(";")
    const pesos = localStorage.getItem("melanciaPeso").split(";")
    // Busca no localStorage as strings salvas.
    // Exemplo: "Ana;Carlos;João" → vira ["Ana", "Carlos", "João"]. 
    // Exemplo: "1200;1400;1000" → vira ["1200", "1400", "1000"].

    let vencedorNome = nomes[0]
    let vencedorPeso = Number(pesos[0])
    // O primeiro apostador da lista é considerado o vencedor temporário.
    // A ideia é comparar os outros com ele e, se alguém estiver mais perto, atualizar.

    for (let i = 1; i < nomes.length; i++) {
        const difVencedor = Math.abs(vencedorPeso - pesoCorreto)
        const difAposta = Math.abs(Number(pesos[i]) - pesoCorreto)

        if (difAposta < difVencedor) {
            vencedorNome = nomes[i]
            vencedorPeso = Number(pesos[i])
        }
    // O for começa em i = 1, porque já assumimos o índice 0 como vencedor inicial.
    // Math.abs(...) → calcula a diferença absoluta (sempre positiva) entre a aposta e o peso correto.
    // Se o peso correto for 1000 e a aposta for 1200, diferença = 200.
    // Se a aposta for 900, diferença = 100.
    // difVencedor → diferença do atual vencedor.
    // difAposta → diferença da aposta do jogador da vez.
    // Se a aposta do jogador da vez estiver mais próxima (difAposta < difVencedor), esse jogador passa a ser o novo vencedor.
    // O loop segue até comparar todos.
    // No fim do for, resta apenas quem chegou mais perto.
    }

    let mensagem = "Resultado - Peso Correto: " + pesoCorreto + "gr"
    mensagem += "\n----------------------------------------------"
    mensagem += "\nVencedor: " + vencedorNome
    mensagem += "\nAposta: " + vencedorPeso + "gr"
    alert(mensagem)
    // Concatena várias strings para montar o texto do resultado:
    // Mostra o peso correto.
    // Mostra o vencedor encontrado.
    // Mostra a aposta dele.
    // O \n quebra a linha dentro do alert.
})