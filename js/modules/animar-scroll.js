export default function initAnimarScroll() {
  const sections = document.querySelectorAll("[data-anime='scroll']");
  const halfWindow = window.innerHeight * 0.5;

  function animarScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop <= halfWindow) {
        section.classList.add("ativo");
      }
    });
  }
  animarScroll();
  window.addEventListener("scroll", animarScroll);
}
