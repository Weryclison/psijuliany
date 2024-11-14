export default function perguntas() {
  const perguntaLista = document.querySelectorAll("dl dt");

  function esconder() {
    const resposta = this.nextElementSibling;
    this.classList.toggle("ativo");
    resposta.classList.toggle("ativo");

    if (resposta.classList.contains("ativo")) {
      resposta.style.maxHeight = resposta.scrollHeight + "px"; // Mostra a resposta gradualmente
    } else {
      resposta.style.maxHeight = null; // Esconde a resposta gradualmente
    }
  }

  perguntaLista.forEach((item) => {
    item.addEventListener("click", esconder);
  });
}
