export default class AnimarScroll {
  constructor(elements) {
    this.sections = document.querySelectorAll(elements);
    this.halfWindow = window.innerHeight * 0.5;
    this.animarScroll = this.animarScroll.bind(this);
  }

  animarScroll() {
    this.sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop <= this.halfWindow) {
        section.classList.add("ativo");
      }
    });
  }

  init() {
    if (this.sections.length) {
      this.animarScroll();
      window.addEventListener("scroll", this.animarScroll);
    }
    return this;
  }
}
