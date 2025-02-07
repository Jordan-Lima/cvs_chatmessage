const btn_enviar = document.querySelector(".btn_enviar")
const btn_anexar = document.querySelector(".btn_anexar")
const input_anexar = document.querySelector(".input_anexar")
const btn_fechar = document.querySelector(".btn_fechar")
const modal_file = document.querySelector(".modal_file")
const nome_arquivo = document.querySelector(".nome_arquivo")
const entrada_texto = document.querySelector(".entrada_texto")


btn_fechar.addEventListener("click", () => {
    if (modal_file.style.display === "block") {
        modal_file.style.display = "none"
    } else {
        modal_file.style.display = "block"

    }
        
})

btn_anexar.addEventListener("click", () => {
    input_anexar.click()
})

input_anexar.addEventListener("change", (event) => {
    let arquivo = event.target.files[0]

    if (arquivo) {

        let carregar_imagem = document.createElement("img")
        let urlImagem = URL.createObjectURL(arquivo)
        carregar_imagem.src = urlImagem
        carregar_imagem.className = "imagem_carregada"
        carregar_imagem.style = "width: 500px; max-height: 100%; max-width: 100%; margin-left: auto; margin-right: auto;"
        modal_file.appendChild(carregar_imagem)
        
        modal_file.style.display = "block"
        nome_arquivo.textContent = `Arquivo: ${arquivo.name}`

    }
})

btn_enviar.addEventListener("click", () => {
    entrada_texto.value = ""
})

entrada_texto.addEventListener("keydown", (e) => {
    if(e.key === "Enter") {
        e.preventDefault()
        
    }
})

entrada_texto.addEventListener("keydown", (e) => {

    if(e.shiftKey && e.key === "Enter") {
        e.preventDefault()
        let temp = entrada_texto.value
        entrada_texto.value = temp + '\n'
    }
})

