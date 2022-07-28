import initAnimarScroll from "./modules/animar-scroll.js";
import initMenuMobile from "./modules/menu-mobile.js";
import ScrollSuave from "./modules/scroll-suave.js";
import initTitleAnimation from "./modules/title-animation.js";

const scrollSuave = new ScrollSuave(".menu li a");
scrollSuave.init();

initAnimarScroll();
initMenuMobile();
initTitleAnimation();

document.documentElement.classList.add("js");
