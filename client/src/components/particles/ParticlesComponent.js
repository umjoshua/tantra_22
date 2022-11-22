import React from 'react'

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function ParticlesComponent() {
    const particlesInit = async(main) => {
        console.log(main);
        await loadFull(main);
    };
    const particlesLoaded = (container) => {
        console.log(container)
    }
  return (
    <Particles
        id = 'tsparticles'
        init= {particlesInit}
        loaded={particlesLoaded}
        options={{
            fullScreen: {
                enable: true,
                zIndex: 1
            },
            fpsLimit: 320,
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: "push",
                    },
                    onHover: {
                        enable: true,
                        mode: "repulse",
                    },
                    resize: true,
                },
                modes: {
                    push: {
                        quantity: 4,
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.9,
                    },
                },
            },
            particles: {
                color: {
                    value: "#ffffff",
                },
                links: {
                    color: "#ffffff",
                    distance: 150,
                    enable: true,
                    opacity: 0.5,
                    width: 1,
                },
                collisions: {
                    enable: true,
                },
                move: {
                    directions: "none",
                    enable: true,
                    outModes: {
                        default: "bounce",
                    },
                    random: false,
                    speed: 1,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                        area: 800,
                    },
                    value: 80,
                },
                opacity: {
                    value: 0.5,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 1, max: 5 },
                },
            },
            detectRetina: true,
        }}
    />
  )
}

export default ParticlesComponent
