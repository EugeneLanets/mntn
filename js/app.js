const preparations = document.querySelectorAll(".preparation");
const asideNav = document.querySelector(".aside-nav");
const observer = new IntersectionObserver(
  ([entry]) => {
    let position;
    if (entry.isIntersecting) {
      const position = entry.target.classList.contains("hero")
        ? 0
        : parseInt(entry.target.id);
      asideNav.style.setProperty("--position", `${position}`);
    }
  },
  { threshold: 1 },
);

preparations.forEach((preparation) => {
  observer.observe(preparation);
});
observer.observe(document.querySelector(".hero"));
