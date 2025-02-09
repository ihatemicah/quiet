console.log("Hello, World!");

import Lenis from '@studio-freight/lenis'

// Initialize Lenis for the right homepage section only
const lenis = new Lenis({
    wrapper: document.querySelector('.right-homepage'),
    content: document.querySelector('.right-homepage'),
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 1,
    smooth: true,
    smoothTouch: false,
    infinite: false,
    gestureOrientation: 'vertical',
    normalizeWheel: true,
    touchInertiaMultiplier: 35,
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
    
    // Create an Intersection Observer with more generous threshold
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // When video comes into view
            if (entry.isIntersecting) {
                const video = entry.target;
                // Add a small delay before attempting to play
                setTimeout(() => {
                    // Try to play the video
                    video.play().catch(function(error) {
                        console.log("Video play failed", error);
                        // Retry once on failure
                        setTimeout(() => {
                            video.play().catch(function(retryError) {
                                console.log("Retry failed", retryError);
                            });
                        }, 1000);
                    });
                }, 100);
                
                // Stop observing this video
                observer.unobserve(video);
            }
        });
    }, {
        rootMargin: '50px 0px', // Start loading before the video enters viewport
        threshold: 0.05 // Trigger when just 5% of the video is visible
    });

    // Observe all videos except the first one
    videos.forEach((video, index) => {
        if (index !== 0) { // Skip the first video
            observer.observe(video);
            
            // Add load event listener
            video.addEventListener('loadeddata', () => {
                console.log(`Video ${index} loaded successfully`);
            });
            
            // Add error handling
            video.addEventListener('error', (e) => {
                console.log(`Error loading video ${index}:`, e);
            });
        }
    });

    // Optional: Add this to handle iframe focus
    document.querySelectorAll('.vimeo-container iframe').forEach(iframe => {
        iframe.addEventListener('mouseenter', () => {
            lenis.stop()
        })
        
        iframe.addEventListener('mouseleave', () => {
            lenis.start()
        })
    })
});