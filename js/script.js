import AnimarScroll from "./modules/animar-scroll.js";
import MenuMobile from "./modules/menu-mobile.js";
import ScrollSuave from "./modules/scroll-suave.js";
import ShowMore from "./modules/show-more.js";
import TitleAnimation from "./modules/title-animation.js";

document.documentElement.classList.add("js");

const scrollSuave = new ScrollSuave(".menu li a");
scrollSuave.init();

const scrollToTop = new ScrollSuave(".to-top");
scrollToTop.init();

const showMoreCursos = new ShowMore("#ver-cursos", ".academico-cursos");
showMoreCursos.init();

const showMoreProjetos = new ShowMore("#ver-projetos", ".projetos-lista");
showMoreProjetos.init();

const menuBtn = new MenuMobile(".menu-mobile", ".menu");
menuBtn.init();

const animarScroll = new AnimarScroll("[data-anime='scroll']");
animarScroll.init();

const titleAnimation = new TitleAnimation(".conteudo h1");
titleAnimation.init();
