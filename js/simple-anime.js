export default function animar() {
  window.SimpleAnime = class {
    constructor() {
      this.items = document.querySelectorAll("[data-anime]");
      this.observer = new IntersectionObserver(
        this.handleIntersection.bind(this),
        {
          threshold: 0.1, // Ajuste a visibilidade do elemento para disparar a animação (10%)
        }
      );
      this.init();
    }

    animateItems(item) {
      const delay = Number(item.getAttribute("data-anime")) + 500; // Adiciona 500ms de delay
      if (!isNaN(delay)) {
        setTimeout(() => {
          item.classList.add("anime");
        }, delay);
      }
    }

    handleIntersection(entries) {
      entries.forEach((entry) => {
        // Verifica se o elemento está visível
        if (entry.isIntersecting) {
          this.animateItems(entry.target);
          // Desconecta o observer após animar para evitar animações repetidas
          this.observer.unobserve(entry.target);
        }
      });
    }

    init() {
      // Observa cada item que possui o atributo data-anime
      this.items.forEach((item) => {
        this.observer.observe(item);
      });
    }
  };
  new SimpleAnime();
}
