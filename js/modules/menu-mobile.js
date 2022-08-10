export default class MenuMobile {
  constructor(menuBtn, menuList) {
    this.menuBtn = document.querySelector(menuBtn);
    this.menuList = document.querySelector(menuList);
    this.events = ["touch", "click"];
    this.toggleMenu = this.toggleMenu.bind(this);
    this.outSideClick = this.outSideClick.bind(this);
  }

  outSideClick(e) {
    if (e.target !== this.menuList) {
      if (this.menuList.hasAttribute("data-outside")) {
        this.menuList.classList.remove("ativo");
        this.menuList.removeAttribute("data-outside");
        this.menuBtn.removeAttribute("data-outside", "");

        this.events.forEach((userEvent) => {
          setTimeout(() => {
            window.removeEventListener(userEvent, this.outSideClick);
          }, 0);
        });
      }
    }
  }

  toggleMenu() {
    if (!this.menuList.classList.contains("ativo")) {
      this.menuList.classList.add("ativo");
      this.menuList.setAttribute("data-outside", "");
      this.menuBtn.setAttribute("data-outside", "");
    }
    this.events.forEach((userEvent) => {
      setTimeout(() => {
        window.addEventListener(userEvent, this.outSideClick);
      }, 0);
    });
  }

  init() {
    this.events.forEach((userEvent) => {
      this.menuBtn.addEventListener(userEvent, this.toggleMenu);
    });
    return this;
  }
}
