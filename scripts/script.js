document.getElementById("cadastro").addEventListener("submit", function (e) {
    e.preventDefault();

    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value.trim();
    let senha = document.getElementById("senha").value.trim();
    let idade = document.getElementById("idade").value.trim();

  
    if (nome === "" || email === "" || senha === "" || idade === "") {
        alert("Preencha todos os campos");
        return;
    }
    if (!email.includes("@")) {
        alert("Email inválido");
        return;
    }
    if (senha.length < 6) {
        alert("Senha deve ter no mínimo 6 caracteres");
        return;
    }
    alert("Cadastro válido!");
});

