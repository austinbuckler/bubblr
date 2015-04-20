particlesJS('bubbles', {
    particles: {
        color: '#61BEFF',
        color_random: false,
        shape: 'circle',
        opacity: {
            opacity: 0.6,
            anim: {
                enable: false,
                speed: 1.0,
                opacity_min: 0.4,
                sync: true
            }
        },
        size: 60,
        size_random: true,
        nb: 20,
        line_linked: {
            enable_auto: false,
            distance: -1,
            color: '',
            opacity: 0,
            width: 0,
            condensed_mode: {
                enable: false
            }
        },
        anim: {
            enable: true,
            speed: 0.6
        }
    },
    interactivity: {
        enable: true,
        mouse: {
            distance: 1
        },
        detect_on: 'canvas', // "canvas" or "window"
        mode: 'false', // "grab" of false
        line_linked: {
            opacity: 0
        },
        events: {
            onclick: {
                enable: true,
                mode: 'push', // "push" or "remove"
                nb: 1
            },
            onresize: {
                enable: true,
                mode: 'bounce', // "out" or "bounce"
                density_auto: false,
                density_area: 5 // nb_particles = particles.nb * (canvas width *  canvas height / 1000) / density_area
            }
        }
    },

    retina_detect: true
});