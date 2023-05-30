import React from "react";
import styles from "./SlideItem.module.css";

const SlideItem = ({ project }) => {
  return (
    <li className={styles.slideItem}>
      <img
        className={styles.slideImg}
        src={project.slideImg}
        alt=""
      />
      <div className={styles.slideInfo}>
        <h1 className={styles.slideTitle}>{project.title}</h1>
        <p className={styles.slideText}>{project.text}</p>
        <ul className={styles.slideTags}>
          {project.tags.map((tag, i) => {
            return <li key={i}>{tag}</li>;
          })}
        </ul>

        <div className={styles.slideLinks}>
          <a
            href={project.code}
            target="_blank">
            Code
          </a>
          {project.deploy && (
            <a
              href={project.deploy}
              target="_blank"
              className={styles.deploy}>
              Deploy
            </a>
          )}
        </div>
      </div>
    </li>
  );
};

export default SlideItem;
