// SYSTEMS MAP NODE MOTION

const nodes = document.querySelectorAll(".systems-map .node");

nodes.forEach((node, i) => {
  const delay = i * 300;

  setTimeout(() => {
    node.animate(
      [
        { transform: "translateY(0px)" },
        { transform: "translateY(-12px)" }
      ],
      {
        duration: 3000 + i * 400,
        iterations: Infinity,
        direction: "alternate",
        easing: "ease-in-out"
      }
    );
  }, delay);
});
