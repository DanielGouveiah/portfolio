import React from "react";
import styles from "./Menu.module.css";
import handleScroll from "../../utils/handleScroll";
import { MediaContext } from "../../context/MediaContext";

const Menu = () => {
  const [dropdown, setDropdown] = React.useState(false);
  const events = ["touch", "click"];
  const menuRef = React.useRef();
  const { sections } = React.useContext(MediaContext);

  const isOutside = (e) => {
    if (e.target === menuRef.current) return;
    setDropdown(false);
    events.forEach((event) => {
      window.removeEventListener(event, isOutside);
    });
    return;
  };

  const openMenu = () => {
    if (dropdown) {
      setDropdown(false);
      events.forEach((event) => {
        window.removeEventListener(event, isOutside);
      });
      return;
    }
    setDropdown(true);
    setTimeout(() => {
      events.forEach((event) => {
        window.addEventListener(event, isOutside);
      });
    }, 0);
    return;
  };

  return (
    <div className={styles.menuWrpp}>
      <button
        className={`${styles.menubtn} ${dropdown ? `${styles.active}` : ""}`}
        onClick={openMenu}>
        <span className={styles.menuico}>
          <span></span>
          <span></span>
        </span>
      </button>
      <ul
        className={`${styles.dropdown}  ${dropdown ? `${styles.active}` : ""}`}
        ref={menuRef}>
        <a
          href=""
          onClick={(e) => handleScroll(e, sections.intro)}>
          início
        </a>
        <a
          href=""
          onClick={(e) => handleScroll(e, sections.projects)}>
          projetos
        </a>
        <a
          href=""
          onClick={(e) => handleScroll(e, sections.contacts)}>
          contatos
        </a>
        <a
          href=""
          onClick={(e) => handleScroll(e, sections.about)}>
          sobre
        </a>
      </ul>
    </div>
  );
};

export default Menu;
