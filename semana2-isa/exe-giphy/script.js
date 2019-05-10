const gif = document.getElementById("gif");
const button = document.querySelector(".btn-search-sticker");
const sticker = document.querySelector(".stickers")
button.addEventListener("click", (evento) => {    //addEventListener cria o click e o botao
    console.log("oieee")
    evento.preventDefault()   //ele segura a mensagem, pra não enviar e sumir 

    sticker.innerHTML= " "
    fetch(`https://api.giphy.com/v1/stickers/search?q= ${gif.value} &api_key=AeDkLjAYvGXMCdjDKYGlzpwYMdLP3Lzl`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data)

            data.data.forEach(gif => {
                const box = document.createElement("div");
                box.setAttribute("class", "box");

                const imagem = document.createElement("img");
                imagem.setAttribute("class", "img");
                imagem.setAttribute("src", gif.images.fixed_height.url)

                sticker.appendChild(box);
                box.appendChild(imagem);


            })

        })

})