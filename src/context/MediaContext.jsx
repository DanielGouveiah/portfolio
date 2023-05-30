import React from "react";

export const MediaContext = React.createContext();

export const MediaStorage = ({ children }) => {
  const [sections, setSections] = React.useState();
  const halfWindow = window.innerHeight * 0.725;

  // Define uma lista de todas as sections do site
  React.useEffect(() => {
    const sectionsArr = [...document.querySelectorAll("section")];
    let sections = {};
    sectionsArr.forEach((section) => {
      sections = { ...sections, [section.id]: section };
    });
    setSections(sections);
  }, []);

  const checkScroll = () => {
    const sectionsArr = [...document.querySelectorAll("section")];
    sectionsArr.forEach((section) => {
      if (!(section.getBoundingClientRect().top <= halfWindow)) return;
      section.dataset.view = "active";
      section.classList.add("active");
      return;
    });
  };

  let scrollTimeout;

  React.useEffect(() => {
    checkScroll();
    window.addEventListener("scroll", () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(checkScroll, 50);
    });
  }, []);

  return <MediaContext.Provider value={{ sections }}>{...children}</MediaContext.Provider>;
};
