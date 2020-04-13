$(document).ready(function() {

    // link hover state
    $('a:not(.lightbox)').mouseenter(function() {
        $(this).css('color', 'white');
        $(this).css('background-color', 'purple');
        $(this).css('border-bottom-color', 'purple');
        $(this).css('text-decoration', 'none');
    });

    // undo link hover state
    $('a:not(.lightbox)').mouseleave(function() {
        $(this).css('color', 'white');
        $(this).css('background-color', 'black');
        $(this).css('border-bottom-color', 'white');
        $(this).css('text-decoration', 'none');
    });

    // resets hover states on browser back button press
    $(window).bind("pageshow", function(event) {
        if (event.originalEvent.persisted) {
            window.location.reload();
        }
    });

    particlesJS("particles-js", {
        "particles": {
            "number": {
                "value": 100,
                "density": {
                    "enable": true,
                    "value_area": 1000
                }
            },
            "color": {
                "value": "#9400D3"
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "move": {
                "enable": true,
                "speed": 6,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });

});