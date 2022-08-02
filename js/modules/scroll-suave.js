export default class ScrollSuave {
  constructor(links) {
    this.links = document.querySelectorAll(links);
    this.events = ["touch", "click"];
  }

  scrollSuave(e) {
    e.preventDefault();
    const section = document.querySelector(e.target.hash);
    const sectionTop = section.getBoundingClientRect().top;
    setTimeout(() => {
      window.scroll({ top: sectionTop, behavior: "smooth" });
    }, 0);
  }

  addElementEvents() {
    this.links.forEach((link) => {
      this.events.forEach((userEvent) => {
        link.addEventListener(userEvent, this.scrollSuave);
      });
    });
  }

  init() {
    this.addElementEvents();
    return this;
  }
}
