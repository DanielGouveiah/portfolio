import React from "react";
import "./Stack.css";
import { ReactComponent as Js } from "../../assets/js.svg";
import { ReactComponent as Figma } from "../../assets/figma.svg";
import { ReactComponent as Html } from "../../assets/html.svg";
import { ReactComponent as Css } from "../../assets/css.svg";
import { ReactComponent as Firebase } from "../../assets/firebase.svg";
import { ReactComponent as Reactjs } from "../../assets/reactjs.svg";

const Stack = () => {
  const stacks = [
    { logo: <Js />, title: "JavaScript" },
    { logo: <Html />, title: "HTML5" },
    { logo: <Css />, title: "CSS3" },
    { logo: <Reactjs />, title: "React.js" },
    { logo: <Firebase />, title: "Firebase" },
    { logo: <Figma />, title: "Figma" },
  ];
  let count = 0.5;

  return (
    <section
      id="stack"
      className="stacks">
      <p className="stackText">DEV STACK</p>
      <ul className="stackList">
        {stacks.map((item, i) => {
          return (
            <li
              key={i}
              style={{ animationDelay: `${(count += 0.2)}s` }}>
              {item.logo} <span>{item.title}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Stack;
