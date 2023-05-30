import React from "react";
import Title from "../../components/Title/Title";
import styles from "./About.module.css";

const About = () => {
  return (
    <section
      className={styles.about}
      id="about"
      aria-label="Sobre Mim">
      <Title
        title={"Sobre Mim"}
        theme={"dark"}
      />
      <p className={styles.aboutText}>
        Sou um Recifense, estudante de Ciência da Computação. Ainda não tenho experiência
        profissional, porém, desenvolvo projetos próprios em programação, sendo assim, possuo
        conhecimentos em HTML, CSS, JavaScript e React. Com esses conhecimentos, produzi meu último
        projeto que foi um app para listar afazeres que designei como My Todo.
      </p>
    </section>
  );
};

export default About;
