particlesJS("particles-js", {
  particles: {
    number: {
      value: 7,
    },
    color: {
      value: ["#34CFC2", "#34cf9b"],
    },
    shape: {
      type: "circle",
    },
    opacity: {
      value: 1,
      random: false,
    },
    size: {
      value: 100,
      random: true,
    },
    move: {
      enable: true,
      speed: 1,
      direction: "left",
      random: true,
    },
    line_linked: {
      enable: false,
    },
  },
  interactivity: {
    events: {
      onclick: {
        enable: true,
        mode: "push",
      },
    },
  },
});
