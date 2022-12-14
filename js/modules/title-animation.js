export default class TitleAnimation {
  constructor(element) {
    this.title = document.querySelector(element);
    this.oldTitle = this.title.innerText.split("");
    this.cont = 200;
    this.blinkText = this.blinkText.bind(this);
  }

  blinkText(char) {
    setTimeout(() => {
      this.title.innerText += char;
    }, this.cont);
    this.cont += 200 * Math.random();
  }

  init() {
    if (this.title) {
      this.title.innerText = "";
      this.oldTitle.forEach((char) => {
        this.blinkText(char === undefined ? " " : char);
      });
    }
    return this;
  }
}
