import React from "react";
import "./Intro.css";
import avatarIntro from "../../assets/avatar-intro.png";
import resume from "../../assets/daniel-resume.pdf";
import Stack from "./Stack";

import handleScroll from "../../utils/handleScroll";
import { MediaContext } from "../../context/MediaContext";

const Intro = () => {
  const { sections } = React.useContext(MediaContext);

  function download(url) {
    const a = document.createElement("a");
    a.href = url;
    a.download = url.split("/").pop();
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  return (
    <section
      className="introWrpp"
      id="intro"
      aria-label="introdução">
      <div className="introtitle">
        <h1 className="title">
          DANIEL<span className="detail">BARBOSA</span>
        </h1>
        <span className="subtitle">
          DESENVOLVEDOR <span className="detail">WEB</span>
        </span>
      </div>

      <div className="intro">
        <div className="introInfo">
          <p className="introText">
            Olá me chamo <span>Daniel!</span> Sou de <span>Recife-PE</span> e estou cursando o
            segundo período do curso de <span>Ciência da computação!</span>
          </p>
          <div className="infos">
            <button
              className="infoItem resume"
              onClick={() => download(resume)}>
              baixar currículo
            </button>
            <a
              className="infoItem"
              onClick={(e) => handleScroll(e, sections.contacts)}>
              contatos
            </a>
          </div>
        </div>

        <img
          src={avatarIntro}
          className="introImg"
        />
      </div>
      <Stack />
    </section>
  );
};

export default Intro;
