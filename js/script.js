document.addEventListener("DOMContentLoaded", function() {
  const metodoSelect = document.getElementById("metodo");
  const campoEmail = document.getElementById("campoEmail");
  const campoCelular = document.getElementById("campoCelular");
  const mensagemDiv = document.getElementById("mensagem");

  metodoSelect.addEventListener("change", function() {
    const metodo = metodoSelect.value;
    
    // Exibir o campo correspondente e esconder o outro
    if (metodo === "email") {
      campoEmail.style.display = "block";
      campoCelular.style.display = "none";
    } else if (metodo === "celular") {
      campoEmail.style.display = "none";
      campoCelular.style.display = "block";
    }
  });

  // Enviar formulário
  document.getElementById("recuperarSenhaForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const metodo = metodoSelect.value;
    const email = document.getElementById("email").value;
    const celular = document.getElementById("celular").value;

    if (metodo === "email" && email) {
      mensagemDiv.textContent = "Um link de recuperação foi enviado para o seu e-mail.";
    } else if (metodo === "celular" && celular) {
      mensagemDiv.textContent = "Um código de recuperação foi enviado para o seu celular.";
    } else {
      mensagemDiv.textContent = "Por favor, preencha o campo necessário.";
    }
  });
});

