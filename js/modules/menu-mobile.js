export default function initMenuMobile() {
  const btnMobile = document.querySelector(".menu-mobile");
  const menuMobile = document.querySelector(".menu");
  const events = ["touch", "click"];
  function outSideClick(e) {
    if (e.target !== menuMobile) {
      if (menuMobile.hasAttribute("data-outside")) {
        menuMobile.classList.remove("ativo");
        menuMobile.removeAttribute("data-outside");
        btnMobile.removeAttribute("data-outside", "");

        events.forEach((userEvent) => {
          setTimeout(() => {
            window.removeEventListener(userEvent, outSideClick);
          }, 0);
        });
      }
    }
  }

  function toggleMenuMobile(e) {
    if (!menuMobile.classList.contains("ativo")) {
      menuMobile.classList.add("ativo");
      menuMobile.setAttribute("data-outside", "");
      btnMobile.setAttribute("data-outside", "");
    }
    events.forEach((userEvent) => {
      setTimeout(() => {
        window.addEventListener(userEvent, outSideClick);
      }, 0);
    });
  }

  btnMobile.addEventListener("click", toggleMenuMobile);
}
