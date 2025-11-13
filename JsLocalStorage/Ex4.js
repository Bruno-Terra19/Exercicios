const frm = document.querySelector("form");
const Cadastrar = document.querySelector("#btnCadastrar");
const Exibir = document.querySelector("#btnExibir");
const Resp = document.querySelector("pre");

let listaDeNomes = [];

window.addEventListener("load", () => {
    const dadosStorage = localStorage.getItem("listaDeNomes");
    if (dadosStorage) {
        listaDeNomes = JSON.parse(dadosStorage); // Isso transforma o texto (JSON) de volta em um array de objetos e o guarda em listaDeNomes.
    }
    //Usa o evento load → é disparado quando a página termina de carregar.
    //Busca no Local Storage o item chamado "listaDeNomes".
    //Se encontrar algo, ele faz:
});

// Ao clicar no botão Cadastrar
Cadastrar.addEventListener("click", () => {

    const nomeCompleto = frm.nome.value;
    const email = frm.email.value;
    const idade = Number(frm.idade.value);

    // Verifica se todos os campos estão preenchidos corretamente
    if (nomeCompleto === "" || email === "" || idade <= 0) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    } else {
        const novoCadastro = {
            nome: nomeCompleto,
            email: email,
            idade: idade
        };

        // Adiciona o novo cadastro no array
        listaDeNomes.push(novoCadastro);

        localStorage.setItem("listaDeNomes", JSON.stringify(listaDeNomes));
        //Converte o array inteiro para texto JSON com JSON.stringify() e salva no Local Storage.

        alert("Cadastro realizado com sucesso!");
        frm.reset();
    }
});

// Ao clicar no botão Exibir
Exibir.addEventListener("click", () => {

    const listaDeNomesStorage = localStorage.getItem("listaDeNomes"); // Busca no Local Storage o item chamado "listaDeNomes".

    if (listaDeNomesStorage) {
        listaDeNomes = JSON.parse(listaDeNomesStorage); // Transforma o texto (JSON) de volta em um array de objetos e o guarda em listaDeNomes.
        
        // Exibe os dados formatados no pre
        if (listaDeNomes.length > 0) { 
            Resp.innerText = `Número de cadastros: ${listaDeNomes.length}\n\n` +
                listaDeNomes.map(item => // Percorre cada item do array listaDeNomes.
                    `Nome: ${item.nome}\nE-mail: ${item.email}\nIdade: ${item.idade}\n`).join("\n---\n"); // Formata cada item do array em uma string legível.
        }
    } else {
        Resp.innerText = "Nenhum cadastro encontrado.";
    }
});
