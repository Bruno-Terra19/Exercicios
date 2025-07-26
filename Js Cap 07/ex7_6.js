const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const senha = frm.inSenha.value
    const erros = []

    if (senha.length < 8 || senha.length > 15) {
        erros.push("possuir entre 8 e 15 caracteres")
    }
//Verifica se o tamanho da senha está entre 8 e 15 caracteres. Se não estiver, adiciona uma mensagem ao array erros.
    
    if (senha.match(/[0-9]/g) === null) {
        erros.push("possuir números (no mínimo, 1)")
    }
//Verifica se há ao menos um número na senha. /[0-9]/g procura por dígitos de 0 a 9. Se não encontrar nenhum (=== null), adiciona mensagem de erro.

    if (!senha.match(/[a-z]/g)) {
        erros.push("possuir letras minúsculas (no mínimo, 1)")
    }
// Verifica se há letras minúsculas. Se não tiver, adiciona erro.

    if (!senha.match(/[A-Z]/g) || senha.match(/[A-Z]/g).length < 2) {
        erros.push("possuir letras maiúsculas (no mínimo, 2)")
    }
// Verifica se há duas ou mais letras maiúsculas. senha.match(/[A-Z]/g) retorna um array com todas as letras maiúsculas encontradas. Se não houver (null) ou se tiver menos que 2, gera erro.

    if (!senha.match(/[\W_]/g)) {
        erros.push("possuir símbolos (no mínimo, 1)")
    }
// Verifica se há símbolos especiais, como ! @ # $ % etc. O regex [\W_] busca qualquer caractere não alfanumérico ou underscore. Se não tiver, adiciona erro.

    if (erros.length === 0) {
        resp.innerText = "Ok! Senha Válida"
    } else {
        resp.innerText = `Erro... A senha deve ${erros.join(", ")}`
    }
// Se o array erros estiver vazio, é porque a senha passou em todos os testes. Caso contrário, mostra a lista de erros juntando as mensagens com vírgulas.
})
