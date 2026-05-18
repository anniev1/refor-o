document.getElementById("formAdocao").addEventListener("submit", function (e) {
    e.preventDefault();

     let nome = document.getElementById("nome").value.trim();
     let email = document.getElementById("email").value.trim();
     let senha = document.getElementById("senha").value.trim();
     let idade = doccument.