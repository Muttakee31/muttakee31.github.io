import { useCallback, useEffect, useState } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import { logos } from "../utils/logos";

const ParticleAnimation = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        //console.log(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        //await console.log(container);
    }, []);
    
    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                fpsLimit: 70,
                particles: {
                number: {
                    value: 9,
                    density: {
                        enable: true,
                        height: 800,
                        width: 800
                    }
                },
                color: {
                    value: "#ff0000",
                    animation: {
                        enable: true,
                        speed: 8,
                        sync: true
                    }
                },
                shape: {
                    type: "images", // Use an image as the particle shape
                    image: logos
                },
                opacity: {
                    value: 0.8
                },
                size: {
                    value: 15,
                },
                rotate: {
                    value: 0,
                    direction: "clockwise",
                    animation: {
                        speed: 15,
                        enable: true
                    }
                },
                move: {
                    enable: true,
                    speed: 4,
                    direction: "none",
                    outModes: "out"
                } 
            },
            detectRetina: true,  
            }}
        />
    );
};

export default ParticleAnimation;