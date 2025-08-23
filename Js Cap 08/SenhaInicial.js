const frm = document.querySelector("form")
const resp = document.querySelector("h3")

// 1. Validar se o nome é completo
function validarNome(nome) {
  let partes = nome.trim().split(/\s+/);
  return partes.length >= 2; // true se tem pelo menos 2 palavras
}

// 2. Obter o sobrenome em letras minúsculas
function obterSobrenome(nome) {
  let partes = nome.trim().split(/\s+/);
  let sobrenome = partes[partes.length - 1];
  return sobrenome.toLowerCase();
}

// 3. Contar vogais e retornar com 2 dígitos
function contarVogais(nome) {
  let texto = nome.toLowerCase();
  let vogais = "aeiou";
  let contador = 0;

  for (let letra of texto) {
    if (vogais.includes(letra)) {
      contador++;
    }
  }

  return String(contador).padStart(2, "0");
}

// --- Evento principal ---
frm.addEventListener("submit", (e) => {
  e.preventDefault();

  let nome = frm.inTexto.value; // precisa ter <input name="inTexto">

  if (!validarNome(nome)) {
    resp.innerText = "⚠️ Digite o nome completo!";
    return;
  }

  let sobrenome = obterSobrenome(nome);
  let qtdVogais = contarVogais(nome);
  let senha = sobrenome + qtdVogais;

  resp.innerText = "Senha inicial: " + senha;
});
