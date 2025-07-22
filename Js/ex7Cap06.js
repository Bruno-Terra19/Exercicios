const frm = document.querySelector("form")
const respErros = document.querySelector("#outErros")
const respChances = document.querySelector("#outChances")
const respDica = document.querySelector("#outDica")
const btnNovo = document.querySelector("#btNovo")

const erros = []
let sorteado = Math.floor(Math.random() * 100) + 1
/*Gera um número aleatório entre 0 (inclusive) e 1 (exclusivo).
Exemplo: 0.2375, 0.8491, etc.
Math.random() * 100
Multiplica o número aleatório por 100, então o resultado estará entre 0 e 99.9999...
Exemplo: 0.2375 * 100 = 23.75
Math.floor(...)
Math.floor() arredonda para baixo.
Exemplo: Math.floor(23.75) resulta em 23.
Agora o número estará entre 0 e 99.
+ 1
Soma 1 para garantir que o número esteja entre 1 e 100.*/
const CHANCES = 6
/* erros: array que guarda os números errados que o jogador já tentou.
sorteado: número aleatório entre 1 e 100.
CHANCES: número máximo de tentativas.*/

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const numero = Number(frm.inNumero.value)
    if (numero === sorteado) {
        respDica.innerText = `Parabéns!! Número sorteado: ${sorteado}`
    } else {
        if (erros.includes(numero)) { // erros.includes(numero) verifica se o número já está no array erros.
            alert(`Você já apostou o número ${numero}. Tente outro...`)
        } else {
            erros.push(numero) // Essa linha adiciona o número digitado pelo jogador ao array erros, que guarda os palpites errados.
            const numErros = erros.length // Retorna a quantidade de elementos no array erros. Ou seja, quantos palpites errados o jogador já deu.
            const numChances = CHANCES - numErros // CHANCES é o número máximo de tentativas que o jogador tem (geralmente 6). Subtraindo o número de erros, você sabe quantas chances ainda restam.
            respErros.innerText = `${numErros} (${erros.join(", ")})` // .join(separador ", ", "-", " | ") usado para juntar os elementos de um array em uma única string, usando um separador que você escolhe.
            respChances.innerText = numChances
            /*O número digitado é lido.
            Verifica se é o número certo.
            Se for certo, aparece a mensagem de parabéns.
            Se for errado:
            Verifica se o número já foi apostado.
            Se não, adiciona aos erros e atualiza as chances restantes.
            Dá uma dica: o número é maior ou menor que o digitado.*/
            if (numChances === 0) {
                alert("Suas chances acabaram...")
                frm.btSubmit.disabled = true // Quando o jogador perde todas as chances (errou 6 vezes), você não quer que ele continue apostando números, então: Desabilita o botão para impedir mais tentativas.Mostra um botão para "Jogar Novamente".
                frm.btNovo.className = "exibe"
                respDica.innerText = `Game Over !! Número Sorteado: ${sorteado}`
            } else {
                const dica = numero < sorteado ? "maior" : "menor" // operador Ternário, Se o número digitado (numero) for menor que o número sorteado (sorteado), então dica recebe a string "maior".Caso contrário, recebe "menor".
                respDica.innerText = `Dica: Tente um número ${dica} que ${numero}`
            }
            /*Bloqueia o botão de apostar.
            Exibe o botão "Jogar Novamente".
            Mostra o número correto.*/
        }
     }
    frm.inNumero.value = ""
    frm.inNumero.focus()
})
btnNovo.addEventListener("click", () => {
    erros.length = 0 // limpa o array de erros
    sorteado = Math.floor(Math.random() * 100) + 1 // novo número
    respErros.innerText = ""
    respChances.innerText = CHANCES
    respDica.innerText = ""
    frm.btSubmit.disabled = false
    btnNovo.className = "oculta" // você precisa ter uma classe .oculta no CSS
    frm.inNumero.focus()
})
