let imagens = document.querySelectorAll('.imagens');
let imagemPrincipal = document.querySelector('#imagemPrincipal');

imagens.forEach((imagem) => {
    imagem.addEventListener("click", (event) =>{
        imagemPrincipal.src = event.target.src
    })
})