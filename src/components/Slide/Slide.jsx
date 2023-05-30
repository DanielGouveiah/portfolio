import React from "react";
import projectList from "../../ProjectList";
import styles from "./Slide.module.css";
import SlideControllers from "./SlideControllers";
import SlideItem from "./SlideItem";

const Slide = () => {
  const [current, setCurrent] = React.useState(0);
  const slideRef = React.useRef();

  React.useEffect(() => {
    const children = [...slideRef.current.children];
    children.forEach((child) => delete child.dataset.state);
    children[current].dataset.state = "active";
  }, [current]);

  return (
    <div className={styles.slide}>
      <ul
        className={styles.slideList}
        ref={slideRef}>
        {projectList.map((project) => {
          return (
            <SlideItem
              project={project}
              key={project.title}
              slideRef={slideRef}
              current={current}
            />
          );
        })}
      </ul>
      <SlideControllers
        current={current}
        setCurrent={setCurrent}
        projectList={projectList}
      />
    </div>
  );
};

export default Slide;
