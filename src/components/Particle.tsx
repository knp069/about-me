import React from "react";
import Particles from "react-particles-js";

const Particle = () => {
  return (
    <>
      <Particles
        className="particles"
        params={{
          particles: {
            number: {
              value: 75,
              density: {
                enable: true,
                value_area: 1200,
              },
            },
            color: {
              value: "#000",
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#000000",
              },
              polygon: {
                nb_sides: 3,
              },
            },
            opacity: {
              value: 0.6,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 4,
              random: true,
              anim: {
                enable: true,
                speed: 2,
                size_min: 0.1,
                sync: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#000",
              opacity: 0.2,
              width: 1,
            },
            move: {
              enable: true,
              speed: 0.75,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: false,
              },
              onclick: {
                enable: false,
              },
              resize: true,
            },
          },
          retina_detect: true,
        }}
      />
    </>
  );
};

export default Particle;
