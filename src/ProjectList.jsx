import bikcraft from "./assets/projects/bikcraft.jpg";
import dojoBlog from "./assets/projects/dojoBlog.jpg";
import myTodo from "./assets/projects/myTodo.jpg";
import animais from "./assets/projects/animais.jpg";
import nlw from "./assets/projects/nlw.jpg";
import calculator from "./assets/projects/calculator.jpg";

const ProjectList = [
  {
    title: "Animais Fantásticos",
    text: "Página sobre animais selvagens feita no curso de JavaScript da Origamid, onde foram treinados os principais conceitos da linguagem JavaScript.",
    img: animais,
    tags: ["HTML", "CSS", "JavaScript"],
    code: "https://github.com/DanielGouveiah/animais-fantasticos",
    deploy: "https://danielgouveiah.github.io/animais-fantasticos/",
  },
  {
    title: "My ToDo",
    text: "Aplicativo de lista de tarefas com sistema de login e salvamento de tarefas em banco de dados, feito com as tecnologias React, Google Firebase e Tailwind.",
    img: myTodo,
    tags: ["React.js", "Google Firebase", "Tailwind", "Figma"],
    code: "https://github.com/DanielGouveiah/mytodo",
    deploy: "https://mytodo-smoky.vercel.app/",
  },
  {
    title: "Dojo Blog",
    text: "Blog simples feito em React.js onde foram utilizados os conceitos básicos da bibliotéca, assim como soluções como React Router e Json Server.",
    img: dojoBlog,
    tags: ["React.js", "CSS"],
    code: "https://github.com/DanielGouveiah/react-dojoBlog",
  },
  {
    title: "Bikcraft",
    text: "E-commerce fictício de bicicletas eletricas, objeto de estudo onde foram estudados os principais conceitos de HTML5 e CSS3.",
    img: bikcraft,
    tags: ["HTML", "CSS", "Figma"],
    code: "https://github.com/DanielGouveiah/bikcraft",
    deploy: "https://danielgouveiah.github.io/bikcraft/",
  },

  {
    title: "Find My Duo",
    text: "Aplicativo para encontrar uma dupla para jogos famoso, feito em React.js, React Native e Tailwind CSS com servidor Node.js ",
    img: nlw,
    tags: ["React.js", "React Native", "Node.js", "Tailwind", "Radix"],
    code: "https://github.com/DanielGouveiah/nlw-esports-ignite",
  },
  {
    title: "Calculator",
    text: "Calculadora simples com operações básicas e um design simples tentando trazer uma ideia de calculadora real, feito apenas com React.js e CSS.",
    img: calculator,
    tags: ["React.js", "CSS"],
    code: "https://github.com/DanielGouveiah/calculator",
  },
];

export default ProjectList;
