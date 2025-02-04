console.log("Hello, World!");

import Lenis from '@studio-freight/lenis'

// Initialize Lenis for the right homepage section only
const lenis = new Lenis({
    wrapper: document.querySelector('.right-homepage'),
    content: document.querySelector('.right-homepage'),
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // default easing
    orientation: 'vertical',
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 1,
    smooth: true,
})

// RAF loop for Lenis
function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)