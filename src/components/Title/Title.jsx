import React from "react";
import "./Title.css";

const Title = ({ title, subTitle, theme }) => {
  return (
    <div className="titleWrpp">
      <h1 className={`title ${theme === "dark" ? "dark" : ""}`}>{title}</h1>
      <span className={`subtitle ${theme === "dark" ? "dark" : ""}`}>{subTitle}</span>
    </div>
  );
};

export default Title;
