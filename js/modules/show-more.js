export default class ShowMore {
  constructor(btn, lista) {
    this.showBtn = document.querySelector(btn);
    this.lista = document.querySelector(lista);
    this.listaParent = this.lista.parentElement;
    this.events = ["touch", "click"];
    this.showMore = this.showMore.bind(this);
    this.goTop = this.goTop.bind(this);
  }

  goTop() {
    this.listaParent.scrollIntoView();
  }

  showMore() {
    this.lista.classList.toggle("ativo");
    if (this.lista.classList.contains("ativo")) {
      this.showBtn.innerHTML = "Ver menos";
      this.events.forEach((userEvent) => {
        this.showBtn.addEventListener(userEvent, this.goTop);
      });
    } else {
      this.showBtn.innerHTML = "Ver mais";
      setTimeout(() => {
        this.events.forEach((userEvent) => {
          this.showBtn.removeEventListener(userEvent, this.goTop);
        });
      }, 0);
    }
  }

  addEventElements() {
    this.events.forEach((userEvent) => {
      this.showBtn.addEventListener(userEvent, this.showMore);
    });
  }

  init() {
    if (this.showBtn && this.lista) {
      this.addEventElements();
    }
    return this;
  }
}
