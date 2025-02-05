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

document.addEventListener('DOMContentLoaded', function() {
    // Get all videos
    const videos = document.querySelectorAll('video');
    
    // Create an Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // When video comes into view
            if (entry.isIntersecting) {
                const video = entry.target;
                // Try to play the video
                video.play().catch(function(error) {
                    console.log("Video play failed", error);
                });
                // Stop observing this video
                observer.unobserve(video);
            }
        });
    }, {
        threshold: 0.1 // Start loading when 10% of the video is visible
    });

    // Observe all videos except the first one
    videos.forEach((video, index) => {
        if (index !== 0) { // Skip the first video
            observer.observe(video);
        }
    });
});