const handleScroll = (e, target) => {
  e.preventDefault();
  if (!target) return;
  target.scrollIntoView({ block: "start", behavior: "smooth" });
};
export default handleScroll;
