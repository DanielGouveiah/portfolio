import React from "react";
import styles from "./SlideControllers.module.css";

const SlideControllers = ({ setCurrent, current, projectList }) => {
  React.useEffect(() => {
    window.addEventListener("keydown", changeBtn);
  }, []);

  const changeItem = (type) => {
    if (!type) return;
    if (type === "next") {
      setCurrent((current) => {
        if (current >= projectList.length - 1) return 0;
        return current + 1;
      });
      return;
    }
    if (type === "prev") {
      setCurrent((current) => {
        if (current <= 0) return projectList.length - 1;
        return current - 1;
      });
      return;
    }
  };

  const changeBtn = (e) => {
    if (e.key === "ArrowLeft") {
      changeItem("prev");
      return;
    }
    if (e.key === "ArrowRight") {
      changeItem("next");
      return;
    }
  };

  return (
    <div className={styles.controllers}>
      <button
        onClick={() => changeItem("prev")}
        className={`${styles.controller} ${styles.left}`}></button>
      <span className={styles.count}>
        {current + 1}/{projectList.length}
      </span>
      <button
        onClick={() => changeItem("next")}
        className={styles.controller}></button>
    </div>
  );
};

export default SlideControllers;
