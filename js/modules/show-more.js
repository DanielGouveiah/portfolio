export default class ShowMore {
  constructor(btn, lista) {
    this.showBtn = document.querySelector(btn);
    this.lista = document.querySelector(lista);
    this.events = ["touch", "click"];
    this.showMore = this.showMore.bind(this);
  }

  showMore() {
    this.lista.classList.toggle("ativo");
    if (this.lista.classList.contains("ativo")) {
      this.showBtn.innerHTML = "Ver menos";
    } else {
      this.showBtn.innerHTML = "Ver mais";
    }
  }

  addEventElements() {
    this.events.forEach((userEvent) => {
      this.showBtn.addEventListener(userEvent, this.showMore);
    });
  }

  init() {
    this.addEventElements();
    return this;
  }
}
