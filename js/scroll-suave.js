export default function scrollSuave() {
  const body = document.body;
  const nav = document.getElementById("nav");
  const linksInterno = document.querySelectorAll("#menu a.interno");

  function scrolar(i) {
    i.preventDefault();
    const href = i.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    const scrollMarginTop = 100;
    section.style.scrollMarginTop = `${scrollMarginTop}px`;
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    body.classList.remove("menu-active");
    nav.classList.remove("active");
  }

  linksInterno.forEach((item) => {
    item.addEventListener("click", scrolar);
  });
}
