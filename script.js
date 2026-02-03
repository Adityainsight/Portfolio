// Initialize Lenis for smooth scrolling
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smooth: true,
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// Initialize GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Custom Cursor
const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');

window.addEventListener('mousemove', (e) => {
    const posX = e.clientX;
    const posY = e.clientY;

    // Dot follows instantly
    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    // Outline follows with delay (using GSAP for smoothness)
    gsap.to(cursorOutline, {
        x: posX,
        y: posY,
        duration: 0.15,
        ease: "power2.out"
    });
});

// Hover effects for cursor
const links = document.querySelectorAll('a, .project-card');
links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        gsap.to(cursorOutline, {
            scale: 1.5,
            borderColor: "rgba(59, 186, 156, 0.5)", // Mint with opacity
            backgroundColor: "rgba(59, 186, 156, 0.1)",
            duration: 0.2
        });
    });
    link.addEventListener('mouseleave', () => {
        gsap.to(cursorOutline, {
            scale: 1,
            borderColor: "#707793",
            backgroundColor: "transparent",
            duration: 0.2
        });
    });
});

// Reveal Animations
const revealElements = document.querySelectorAll('.reveal-text');

revealElements.forEach((element, index) => {
    gsap.to(element, {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: index * 0.2,
        ease: "power3.out",
    });
});

// Section Headers Parallax/Reveal
const sections = document.querySelectorAll('section');
sections.forEach(section => {
    const header = section.querySelector('.section-header');
    if(header) {
        gsap.fromTo(header, 
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                scrollTrigger: {
                    trigger: section,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    }
});

// Project Cards Stagger
const workSection = document.querySelector('.work-section');
const projects = document.querySelectorAll('.project-card');

if(workSection && projects.length > 0) {
    gsap.fromTo(projects, 
        { y: 100, opacity: 0 },
        {
            y: 0, 
            opacity: 1,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: workSection,
                start: "top 70%",
            }
        }
    );
}

// Hero Parallax on Scroll
gsap.to('.hero-content', {
    y: 100,
    opacity: 0.5,
    ease: "none",
    scrollTrigger: {
        trigger: ".hero-section",
        start: "top top",
        end: "bottom top",
        scrub: true
    }
});
