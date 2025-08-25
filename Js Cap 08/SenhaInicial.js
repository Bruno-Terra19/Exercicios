const frm = document.querySelector("form")
const resp = document.querySelector("h3")

function validarNome(nome) {
  let partes = nome.trim().split(/\s+/);
  return partes.length >= 2; 
}
// trim() remove espaços extras no começo/fim. 
// split(/\s+/) divide pelo(s) espaço(s) (inclusive múltiplos). 
// Retorna true se houver ao menos 2 “palavras” (nome e sobrenome).

function obterSobrenome(nome) {
  let partes = nome.trim().split(/\s+/);
  let sobrenome = partes[partes.length - 1];
  return sobrenome.toLowerCase();
}
// Divide o nome em partes e pega a última como sobrenome. 
// Converte para minúsculas. 
// Ex.: “Ana Maria Silva” → silva

function contarVogais(nome) {
  let texto = nome.toLowerCase(); // Coloca tudo em minúsculas para facilitar.
  let vogais = "aeiou"; // Percorre cada letra e soma se estiver em "aeiou".
  let contador = 0;

  for (let letra of texto) {
    if (vogais.includes(letra)) {
      contador++;
    }
  }
  // O for...of percorre cada elemento de uma coleção (array, string, etc.). Como texto é uma string, cada letra vai ser um caractere dela, de forma sequencial.
  // .includes(...) verifica se dentro da string "aeiou" existe aquele caractere. Retorna true se encontrar, false se não.

  return String(contador).padStart(2, "0"); // padStart(2, "0") garante 2 dígitos (ex.: 7 → "07").
}

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  let nome = frm.inTexto.value;

  if (!validarNome(nome)) {
    resp.innerText = "⚠️ Digite o nome completo!";
    return;
  }

  let sobrenome = obterSobrenome(nome);
  let qtdVogais = contarVogais(nome);
  let senha = sobrenome + qtdVogais;
  // Calcula sobrenome, qtdVogais e concatena em senha.

  resp.innerText = "Senha inicial: " + senha;
});
