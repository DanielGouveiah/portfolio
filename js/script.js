import initAnimarScroll from "./modules/animar-scroll.js";
import initMenuMobile from "./modules/menu-mobile.js";
import ScrollSuave from "./modules/scroll-suave.js";
import ShowMore from "./modules/show-more.js";
import initTitleAnimation from "./modules/title-animation.js";

const scrollSuave = new ScrollSuave(".menu li a");
scrollSuave.init();

const showMoreCursos = new ShowMore(".ver-mais", ".academico-cursos");
showMoreCursos.init();

initAnimarScroll();
initMenuMobile();
initTitleAnimation();

document.documentElement.classList.add("js");
