export default class ScrollSuave {
  constructor(links) {
    this.links = document.querySelectorAll(links);
    this.events = ["touch", "click"];
    this.options = {
      behavior: "smooth",
    };
    this.scrollSuave = this.scrollSuave.bind(this);
  }

  scrollSuave(e) {
    e.preventDefault();
    console.log(e.currentTarget);
    const href = e.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView(this.options);
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
