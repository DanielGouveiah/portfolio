import React from "react";
import "./Projects.css";
import Slide from "../../components/Slide/Slide";
import Title from "../../components/Title/Title";

const Projects = () => {
  return (
    <section
      className="projects"
      id="projects"
      aria-label="projetos">
      <Title
        title={"projetos"}
        subTitle={"principais projetos"}
        theme={"dark"}
      />

      <div className="projectsWrpp">
        <Slide />
      </div>
      <a
        href="https://github.com/DanielGouveiah"
        target="_blank"
        className="more">
        VER MAIS
      </a>
    </section>
  );
};

export default Projects;
