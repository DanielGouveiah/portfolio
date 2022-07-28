export default function initTitleAnimation() {
  const title = document.querySelector(".conteudo h1");
  const oldTitle = title.innerText.split("");
  title.innerText = "";

  let i = 400;
  function blinkText(char) {
    setTimeout(() => {
      title.innerText += char;
    }, i);
    i += 200;
  }

  oldTitle.forEach((char) => {
    blinkText(char === undefined ? " " : char);
  });
}
