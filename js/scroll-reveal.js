// SCROLL REVEAL

const revealEls = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const trigger = window.innerHeight * 0.85;

  revealEls.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < trigger) el.classList.add("visible");
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
