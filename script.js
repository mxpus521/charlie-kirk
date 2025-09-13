// Language Toggle Functionality for Charlie Kirk Memorial Website

class LanguageToggle {
    constructor() {
        this.currentLang = 'en'; // Default language is English
        this.langToggleBtn = document.getElementById('langToggle');
        this.init();
    }

    init() {
        // Set initial language to English
        this.setLanguage('en');
        
        // Add event listener to language toggle button
        if (this.langToggleBtn) {
            this.langToggleBtn.addEventListener('click', () => {
                this.toggleLanguage();
            });
        }

        // Check for saved language preference
        const savedLang = localStorage.getItem('preferredLanguage');
        if (savedLang && savedLang !== 'en') {
            this.setLanguage(savedLang);
        }
    }

    toggleLanguage() {
        const newLang = this.currentLang === 'en' ? 'zh' : 'en';
        this.setLanguage(newLang);
    }

    setLanguage(lang) {
        this.currentLang = lang;
        
        // Update button text and attributes
        if (this.langToggleBtn) {
            const langText = this.langToggleBtn.querySelector('.lang-text');
            if (langText) {
                langText.textContent = lang === 'en' ? '中文' : 'English';
            } else {
                this.langToggleBtn.textContent = lang === 'en' ? '中文' : 'English';
            }
            
            this.langToggleBtn.setAttribute('data-lang', lang);
            this.langToggleBtn.setAttribute('aria-label', 
                lang === 'en' ? 'Switch to Chinese' : 'Switch to English'
            );
            
            // Add ripple effect
            this.langToggleBtn.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.langToggleBtn.style.transform = '';
            }, 150);
        }

        // Update HTML lang attribute
        document.documentElement.lang = lang;

        // Update all elements with data attributes
        this.updateContent(lang);

        // Save language preference
        localStorage.setItem('preferredLanguage', lang);

        // Add smooth transition effect with enhanced animations
        document.body.classList.add('language-switching');
        
        // Add switching animation to button
        if (this.langToggleBtn) {
            this.langToggleBtn.classList.add('switching');
        }
        
        // Add content transition effect
        const mainContent = document.querySelector('main');
        if (mainContent) {
            mainContent.classList.add('content-transitioning');
        }
        
        setTimeout(() => {
            document.body.classList.remove('language-switching');
            if (this.langToggleBtn) {
                this.langToggleBtn.classList.remove('switching');
            }
            if (mainContent) {
                mainContent.classList.remove('content-transitioning');
            }
        }, 400);
    }

    updateContent(lang) {
        // Get all elements with language data attributes
        const elements = document.querySelectorAll('[data-en][data-zh]');
        
        elements.forEach(element => {
            const content = element.getAttribute(`data-${lang}`);
            if (content) {
                // Handle different types of content updates
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = content;
                } else if (element.tagName === 'IMG') {
                    element.alt = content;
                } else {
                    // For most elements, update innerHTML to support HTML entities
                    element.innerHTML = content;
                }
            }
        });

        // Update page title
        const titleEn = "Charlie Kirk Memorial - Defender of Freedom";
        const titleZh = "查理·柯克纪念网站 - 自由的捍卫者";
        document.title = lang === 'en' ? titleEn : titleZh;

        // Update meta description if it exists
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            const descEn = "Memorial website for Charlie Kirk, founder of Turning Point USA and defender of free speech rights.";
            const descZh = "查理·柯克纪念网站，转折点美国组织创始人，言论自由权利的捍卫者。";
            metaDescription.setAttribute('content', lang === 'en' ? descEn : descZh);
        }
    }

    // Method to get current language (useful for other scripts)
    getCurrentLanguage() {
        return this.currentLang;
    }

    // Method to set language programmatically
    switchTo(lang) {
        if (lang === 'en' || lang === 'zh') {
            this.setLanguage(lang);
        }
    }
}

// Quotes Carousel Class
class QuotesCarousel {
    constructor() {
        this.currentSlide = 0;
        this.slides = document.querySelectorAll('.quote-card');
        this.dots = document.querySelectorAll('.dot');
        this.prevBtn = document.querySelector('.carousel-btn.prev');
        this.nextBtn = document.querySelector('.carousel-btn.next');
        this.autoPlayInterval = null;
        
        this.init();
    }
    
    init() {
        if (this.slides.length === 0) return;
        
        // Add click listeners to navigation buttons
        if (this.prevBtn) {
            this.prevBtn.addEventListener('click', () => this.prevSlide());
        }
        
        if (this.nextBtn) {
            this.nextBtn.addEventListener('click', () => this.nextSlide());
        }
        
        // Add click listeners to dots
        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => this.goToSlide(index));
        });
        
        // Start auto-play
        this.startAutoPlay();
        
        // Pause auto-play on hover
        const carousel = document.querySelector('.quotes-carousel');
        if (carousel) {
            carousel.addEventListener('mouseenter', () => this.stopAutoPlay());
            carousel.addEventListener('mouseleave', () => this.startAutoPlay());
        }
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.target.closest('.quotes')) {
                if (e.key === 'ArrowLeft') {
                    e.preventDefault();
                    this.prevSlide();
                } else if (e.key === 'ArrowRight') {
                    e.preventDefault();
                    this.nextSlide();
                }
            }
        });
    }
    
    goToSlide(index) {
        // Remove active class from current slide and dot
        this.slides[this.currentSlide].classList.remove('active');
        this.dots[this.currentSlide].classList.remove('active');
        
        // Update current slide
        this.currentSlide = index;
        
        // Add active class to new slide and dot
        this.slides[this.currentSlide].classList.add('active');
        this.dots[this.currentSlide].classList.add('active');
    }
    
    nextSlide() {
        const nextIndex = (this.currentSlide + 1) % this.slides.length;
        this.goToSlide(nextIndex);
    }
    
    prevSlide() {
        const prevIndex = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
        this.goToSlide(prevIndex);
    }
    
    startAutoPlay() {
        this.stopAutoPlay(); // Clear any existing interval
        this.autoPlayInterval = setInterval(() => {
            this.nextSlide();
        }, 5000); // Change slide every 5 seconds
    }
    
    stopAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
            this.autoPlayInterval = null;
        }
    }
}

// Initialize language toggle when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.languageToggle = new LanguageToggle();
    
    // Initialize quotes carousel
    window.quotesCarousel = new QuotesCarousel();
    
    // Add smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Account for fixed navigation
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add fade-in animation for sections on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all sections for animation
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    // Add keyboard navigation support
    document.addEventListener('keydown', (e) => {
        // Alt + L to toggle language
        if (e.altKey && e.key.toLowerCase() === 'l') {
            e.preventDefault();
            window.languageToggle.toggleLanguage();
        }
    });
});

// Add CSS transition for language switching and enhanced effects
const style = document.createElement('style');
style.textContent = `
    body {
        transition: opacity 0.3s ease;
    }
    
    .language-switching {
        pointer-events: none;
    }
    
    .language-switching * {
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1) !important;
    }
    
    /* Pulse animation for language switch */
    @keyframes languagePulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.1); }
        100% { transform: scale(1); }
    }
    
    .lang-btn.switching {
        animation: languagePulse 0.6s ease-in-out;
    }
    
    /* Smooth content transition */
    .content-transitioning {
        opacity: 0.7;
        transform: translateY(5px);
    }
`;
document.head.appendChild(style);

// Social sharing functions
function shareOnFacebook() {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent('Charlie Kirk Memorial - Defender of Freedom');
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank', 'width=600,height=400');
}

function shareOnTwitter() {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('Honoring the life and legacy of Charlie Kirk - a true champion of conservative values and free speech. #CharlieKirk #TurningPointUSA');
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank', 'width=600,height=400');
}

function shareOnLinkedIn() {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent('Charlie Kirk Memorial - Defender of Freedom');
    const summary = encodeURIComponent('Memorial website for Charlie Kirk, founder of Turning Point USA and champion of conservative values.');
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank', 'width=600,height=400');
}

function shareViaEmail() {
    const subject = encodeURIComponent('Charlie Kirk Memorial - Defender of Freedom');
    const body = encodeURIComponent(`I wanted to share this memorial website honoring Charlie Kirk, founder of Turning Point USA and champion of conservative values and free speech.\n\n${window.location.href}\n\nCharlie Kirk's legacy will continue to inspire future generations of conservatives.`);
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
}

function copyLink() {
    navigator.clipboard.writeText(window.location.href).then(() => {
        const messageElement = document.getElementById('shareMessage');
        if (messageElement) {
            messageElement.style.display = 'block';
            setTimeout(() => {
                messageElement.style.display = 'none';
            }, 3000);
        }
    }).catch(err => {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = window.location.href;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        
        const messageElement = document.getElementById('shareMessage');
        if (messageElement) {
            messageElement.style.display = 'block';
            setTimeout(() => {
                messageElement.style.display = 'none';
            }, 3000);
        }
    });
}

// Export for potential use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = LanguageToggle;
}