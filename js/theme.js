// THEME TOGGLE

const root = document.documentElement;
const toggle = document.getElementById("themeToggle");

function setTheme(mode) {
  root.setAttribute("data-theme", mode);
  localStorage.setItem("theme", mode);
}

const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
  setTheme(savedTheme);
} else {
  const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
  setTheme(prefersLight ? "light" : "dark");
}

toggle.addEventListener("click", () => {
  const current = root.getAttribute("data-theme");
  setTheme(current === "dark" ? "light" : "dark");
});
