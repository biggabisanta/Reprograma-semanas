const app = document.getElementById('root');
const authors = document.createElement('div');
authors.setAttribute('class','authors');
app.appendChild(authors);

fetch("https://reqres.in/api/users")
.then(function(response){
    return response.json();

})