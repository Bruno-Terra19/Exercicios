const frm = document.querySelector("form")
const resp = document.querySelector("pre")

const itens = []

frm.rbPizza.addEventListener("click", () => {
    
    frm.inBebida.className = "oculta"
    frm.inPizza.className = "exibe"
})

frm.inBebida.addEventListener("click", () => {

    frm.inPizza.className = "oculta"
    frm.inBebida.className = "exibe"
// Aqui, quando você clica no radio button de Pizza ou Bebida: Ele esconde o <select> do outro item com className = "oculta".
// E mostra o que foi escolhido com className = "exibe". Assim, você só vê a lista de pizzas ou de bebidas, nunca os dois juntos.
})

frm.inDetalhes.addEventListener("focus", () => {

    if(frm.rbPizza.checked) {
        const pizza = frm.inPizza.value
        const num = pizza === "media" ? 2 : pizza === "grande" ? 3 : 4
        frm.inDetalhes.placeholder = `Até ${num} sabores`
    }
// Quando o campo de detalhes (inDetalhes) ganha foco: Se for pizza, ele descobre qual tamanho está selecionado. 
// Dependendo do tamanho, mostra no placeholder quantos sabores podem ser escolhidos (2, 3 ou 4).
})

frm.inDetalhes.addEventListener("blur", () => { // blur: Quando você entra no campo, o foco (focus) coloca um aviso como "Até 3 sabores". Quando você sai do campo, o blur limpa esse aviso.

    frm.inDetalhes.placeholder = ""
})

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    let produto
    if (frm.rbPizza.checked) {
        const num = frm.inPizza.selectedIndex
        produto = frm.inPizza.options[num].text
    } else {
        const num = frm.inBebida.selectedIndex
        produto = frm.inBebida.options[num].text
    }
// Aqui ele descobre qual produto foi escolhido (pizza ou bebida) e pega o texto da opção.

    const detalhes = frm.inDetalhes.value
    itens.push(produto + " (" + detalhes + ")")
    resp.innerText = itens.join("\n")
// Junta o produto e os detalhes em uma string. Adiciona ao array itens. Mostra tudo no <pre>, separando por linhas.

    frm.reset()
    frm.rbPizza.dispatchEvent(new ErrorEvent("click")) 
// Reseta o formulário. E força a seleção voltar para Pizza como padrão.
})