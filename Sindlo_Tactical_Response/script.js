// Sindlo Tactical - Main Script

document.addEventListener('DOMContentLoaded', () => {
    const burger = document.getElementById('burger');
    const mobileNav = document.getElementById('mobile-nav');
    const mobileLinks = document.querySelectorAll('.mobile-link');
    const header = document.getElementById('header');

    // Toggle Mobile Menu
    burger.addEventListener('click', () => {
        mobileNav.classList.toggle('active');
        burger.classList.toggle('toggle');
        
        // Animate Burger Icon
        // You can add specific class animation logic here if css needs it, 
        // e.g., turning the lines into an X
    });

    // Close mobile menu when a link is clicked
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.classList.remove('active');
            burger.classList.remove('toggle');
        });
    });

    // Header Scroll Effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(11, 12, 13, 1)'; // Solid dark
            header.style.padding = '15px 0';
        } else {
            header.style.backgroundColor = 'rgba(11, 12, 13, 0.95)'; // Slightly transparent
            header.style.padding = '20px 0';
        }
    });

    // Custom Video Play Overlay
    const videoOverlay = document.getElementById('video-overlay');
    const mainVideo = document.getElementById('main-video');

    if (videoOverlay && mainVideo) {
        videoOverlay.addEventListener('click', () => {
            videoOverlay.classList.add('hidden');
            mainVideo.play();
        });
    }

    // Scroll Spy for Navigation Highlighting
    const sections = document.querySelectorAll('section, footer');
    const navLi = document.querySelectorAll('.nav-links li a');

    const observerOptions = {
        root: null,
        rootMargin: '-30% 0px -30% 0px', // Trigger when section is in middle of viewport
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let current = entry.target.getAttribute('id');
                // Handle cases where footer "contact" might share ID or be separate
                // existing HTML has <section id="contact"> and <footer id="footer">
                // but links point to #contact. The section is what we want to track mainly.
                
                navLi.forEach(a => {
                    a.classList.remove('active');
                    if (a.getAttribute('href').includes(current)) {
                        a.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
});
