const form = document.querySelector("form");

form.addEventListener("submit", function (evento) {
  const nome = document.getElementById("nome").value.trim();
  if (nome.length < 3) {
    evento.preventDefault();
    alert("nome muito curto!");
  }
});