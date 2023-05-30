import React from "react";
import "./Contacts.css";

import github from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";
import instagram from "../../assets/instagram.svg";
import Title from "../../components/Title/Title";

const Contacts = () => {
  return (
    <section
      className="contactsWrpp"
      id="contacts"
      aria-label="contatos">
      <div className="contacts">
        <Title
          title={"contatos"}
          subTitle={"redes sociais"}
        />
        <ul className="contactList">
          <a
            href="https://github.com/DanielGouveiah"
            target="_blank"
            className="github">
            <img src={github} />
          </a>
          <a
            href="https://www.linkedin.com/in/daniel-barbosa-425036220/"
            target="_blank"
            className="linkedin">
            <img src={linkedin} />
          </a>
          <a
            href="https://www.instagram.com/deniels_gouveia/"
            target="_blank"
            className="instagram">
            <img src={instagram} />
          </a>
        </ul>
      </div>
    </section>
  );
};

export default Contacts;