const movie = document.getElementById("movie");
const filmes = document.querySelector(".movies");
const button = document.querySelector(".btn-search-movie");
button.addEventListener("click", (evento) => {

    console.log("Foii chuchu!!!")

    evento.preventDefault()

    fetch(`http://www.omdbapi.com/?s=${movie.value}&apikey=53f434fa`)
        .then((response) => {

            return response.json();
        })
        .then((Search) => { //data é a informação que retornam das APIs
            //console.log(data)

            Search.forEach(movie => {
                const box = document.createElement("div")
                box.setAttribute("class", "box")

                const imagem = document.createElement("Poster");
                imagem.setAttribute("class", "Poster");
                imagem.setAttribute("src", movie.Poster);

                movie.appendChild(box);
                box.appendChild(imagem);







            })
        })
})