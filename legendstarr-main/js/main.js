// Initialize Swiper
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu handling
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav-menu')) {
            if (navLinks) {
                navLinks.classList.remove('active');
            }
        }
    });

    // Hero section animations
    const h1Title = document.getElementById('h1-title');
    const heroText = document.querySelector('.text-size-29.hero');
    
    if (h1Title && heroText) {
        setTimeout(() => {
            h1Title.style.opacity = '1';
            h1Title.style.transform = 'translateY(0)';
        }, 500);
        
        setTimeout(() => {
            heroText.style.opacity = '1';
            heroText.style.transform = 'translateY(0)';
        }, 1000);
    }

    // Video background handling
    const videoIframe = document.getElementById('splash-video-iframe');
    if (videoIframe) {
        // Ensure video is muted and autoplays
        videoIframe.setAttribute('muted', 'true');
        videoIframe.setAttribute('autoplay', 'true');
        videoIframe.setAttribute('loop', 'true');
    }

    // Hero CTA button click handler
    const heroCta = document.getElementById('hero_cta');
    if (heroCta) {
        heroCta.addEventListener('click', function(e) {
            e.preventDefault();
            // Add your CTA action here
            console.log('Hero CTA clicked');
        });
    }

    // Initialize testimonials slider
    const testimonialsSlider = new Swiper('.testimonials-slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        },
    });

    // Initialize image slider
    const imageSlider = new Swiper('.image-slider', {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        speed: 1000
    });

    // Newsletter form handling
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            // Add your newsletter subscription logic here
            console.log('Newsletter subscription:', email);
        });
    }

    // Form submission handling
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Add your form submission logic here
            console.log('Form submitted');
        });
    }

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                // Close mobile menu if open
                if (navLinks) {
                    navLinks.classList.remove('active');
                }
                // Scroll to target
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Scroll animations
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.animate-on-scroll');
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            const isVisible = (elementTop < window.innerHeight) && (elementBottom >= 0);
            
            if (isVisible) {
                element.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    window.addEventListener('load', animateOnScroll);

    // Initialize Swiper for wisdom slider
    const wisdomSlider = new Swiper('.wisdom-slider', {
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 40,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        // No fade effect, just slide
        speed: 700
    });

    // Wisdom tabs control slider
    const wisdomTabs = document.querySelectorAll('.wisdom-tab');
    wisdomTabs.forEach(function(tab) {
        tab.addEventListener('click', function() {
            const slideIndex = parseInt(this.getAttribute('data-slide'), 10);
            if (!isNaN(slideIndex)) {
                wisdomSlider.slideToLoop(slideIndex);
            }
        });
    });

    // Update active tab on slide change
    wisdomSlider.on('slideChange', function() {
        const realIndex = wisdomSlider.realIndex;
        wisdomTabs.forEach((tab, idx) => {
            if (idx === realIndex) {
                tab.classList.add('active');
            } else {
                tab.classList.remove('active');
            }
        });
    });

    // Mission/Feature Section Randomizer
    const missions = [
        {
            icon: `<img src="images/logo.png" alt="Legendstarr Logo" style="width:56px;height:56px;">`,
            title: "AI <span class='bold'>MASTERY</span>",
            desc: [
                "Turn AI into your personal money machine.",
                "Get step-by-step guidance to build web apps and create content that actually sells.",
                "No tech skills needed—just proven blueprints, real results, and lifetime access.",
                "Start earning online, even if you're a complete beginner."
            ],
            btn: { text: "JOIN THE COURSE", link: "ai-mastery.html" }
        },
        {
            icon: `<img src="images/logo.png" alt="Legendstarr Logo" style="width:56px;height:56px;">`,
            title: "CRYPTO <span class='bold'>TRADING</span>",
            desc: [
                "Profit from crypto—no guesswork, no hype.",
                "Get real-time trading insights, winning strategies, and direct access to a millionaire mentor and private group.",
                "Stay ahead of the market and multiply your income, month after month."
            ],
            btn: { text: "JOIN THE MASTERMIND", link: "crypto-trading.html" }
        },
        {
            icon: `<img src="images/logo.png" alt="Legendstarr Logo" style="width:56px;height:56px;">`,
            title: "THE <span class='bold'>STARS</span>",
            desc: [
                "A global brotherhood for ambitious individuals.",
                "Gain access to exclusive skills, opportunities, and a powerful network across the world.",
                "Support, growth, and real connections for those who want more from life."
            ],
            btn: { text: "JOIN THE BROTHERHOOD", link: "the-stars.html" }
        }
    ];

    function randomizeMissionSection() {
        const missionBg = document.querySelector('.mission-bg');
        const missionIcon = document.querySelector('.mission-icon');
        const missionTitle = document.querySelector('.mission-title');
        const missionDesc = document.querySelector('.mission-desc');
        const missionBtn = document.querySelector('.mission-btn');

        // Only proceed if we're on the home page (where these elements exist)
        if (missionBg && missionIcon && missionTitle && missionDesc && missionBtn) {
            const mission = missions[Math.floor(Math.random() * missions.length)];
            missionBg.style.backgroundImage = `url('${mission.bg}')`;
            missionIcon.innerHTML = mission.icon;
            missionTitle.innerHTML = `<span class='mission-title-main'>${mission.title}</span>`;
            missionDesc.innerHTML = mission.desc.map(line => `<p>${line}</p>`).join('');
            missionBtn.textContent = mission.btn.text;
            missionBtn.href = mission.btn.link;
        }
    }

    // Only run randomizeMissionSection on the home page
    if (document.querySelector('.mission-bg')) {
        window.addEventListener('DOMContentLoaded', randomizeMissionSection);
    }

    // Hamburger menu toggle for mobile (overlay)
    const mobileToggle = document.getElementById('navbar-mobile-toggle');
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
    const mobileMenuClose = document.getElementById('mobile-menu-close');
    
    if (mobileToggle && mobileMenuOverlay) {
        mobileToggle.addEventListener('click', function() {
            mobileMenuOverlay.classList.add('active');
        });
    }
    if (mobileMenuClose && mobileMenuOverlay) {
        mobileMenuClose.addEventListener('click', function() {
            mobileMenuOverlay.classList.remove('active');
        });
    }
    // Close overlay when a menu link is clicked
    if (mobileMenuOverlay) {
        mobileMenuOverlay.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                mobileMenuOverlay.classList.remove('active');
            });
        });
    }
});

// Handle responsive video background
function handleVideoBackground() {
    const videoContainer = document.querySelector('.video-background');
    const videoIframe = document.getElementById('splash-video-iframe');
    
    if (videoContainer && videoIframe) {
        const containerWidth = videoContainer.offsetWidth;
        const containerHeight = videoContainer.offsetHeight;
        const videoRatio = 16 / 9; // Assuming 16:9 video
        
        if (containerWidth / containerHeight > videoRatio) {
            // Container is wider than video ratio
            videoIframe.style.width = '100%';
            videoIframe.style.height = 'auto';
        } else {
            // Container is taller than video ratio
            videoIframe.style.width = 'auto';
            videoIframe.style.height = '100%';
        }
    }
}

// Call on load and resize
window.addEventListener('load', handleVideoBackground);
window.addEventListener('resize', handleVideoBackground);

// Hero Section Title Change after 2 minutes
setTimeout(() => {
    const heroTitle = document.querySelector('.hero-heading');
    if (heroTitle) {
        heroTitle.innerHTML = '<span class="bold">Reach</span> the <span class="bold">Top</span>';
    }
}, 2 * 60 * 1000); 