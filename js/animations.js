// GENERAL ANIMATION HELPERS

export function fadeIn(el, duration = 600) {
  el.style.opacity = 0;
  el.style.transition = `opacity ${duration}ms ease`;
  requestAnimationFrame(() => {
    el.style.opacity = 1;
  });
}

export function floatElement(el, intensity = 10) {
  el.animate(
    [
      { transform: "translateY(0px)" },
      { transform: `translateY(-${intensity}px)` }
    ],
    {
      duration: 4000,
      iterations: Infinity,
      direction: "alternate",
      easing: "ease-in-out"
    }
  );
}
