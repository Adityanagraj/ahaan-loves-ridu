// Love messages array
const loveMessages = [
    "You are my sunshine on the cloudiest days ☀️",
    "Every moment with you is a dream come true 💭",
    "Your smile is my favorite thing in the world 😊",
    "I fall in love with you more every single day 💕",
    "You make my heart skip a beat every time I see you 💓",
    "Being with you feels like home 🏠",
    "You are my everything, my always, my forever 💖",
    "Your love makes me the happiest person alive ✨",
    "I'm so grateful to have you in my life 🙏",
    "You are more beautiful than all the stars in the sky ⭐",
    "My heart belongs to you, now and always 💗",
    "You are my greatest adventure and my safest place 🌸"
];

// Create floating hearts background
function createFloatingHearts() {
    const heartsContainer = document.querySelector('.hearts-container');
    if (!heartsContainer) return;
    
    const heartEmojis = ['💕', '💖', '💗', '💝', '💓', '💞'];
    
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDelay = Math.random() * 15 + 's';
        heart.style.animationDuration = (10 + Math.random() * 10) + 's';
        heartsContainer.appendChild(heart);
    }
}

// Scroll to next section
function scrollToNext() {
    const messageSection = document.getElementById('message');
    if (messageSection) {
        messageSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Show love message when heart is clicked
function showLoveMessage(element) {
    const randomMessage = loveMessages[Math.floor(Math.random() * loveMessages.length)];
    const heartMessage = document.getElementById('heartMessage');
    if (heartMessage) {
        heartMessage.textContent = randomMessage;
    }
    
    // Add click animation to the heart
    if (element) {
        element.style.transform = 'scale(1.5) rotate(360deg)';
        setTimeout(() => {
            element.style.transform = '';
        }, 500);
    }
    
    // Create confetti effect
    createConfetti(element);
}

// Handle Yes button
function handleYes() {
    const celebration = document.getElementById('celebration');
    if (celebration) {
        celebration.textContent = '💕💖💗💝💓💞💕💖💗💝💓💞';
        celebration.classList.remove('hidden');
    }

    const loveMoment = document.getElementById('loveMoment');
    if (loveMoment) {
        loveMoment.classList.remove('hidden');
        
        // Load Tenor embed script if not already loaded
        if (!document.querySelector('script[src="https://tenor.com/embed.js"]')) {
            const tenorScript = document.createElement('script');
            tenorScript.type = 'text/javascript';
            tenorScript.async = true;
            tenorScript.src = 'https://tenor.com/embed.js';
            document.body.appendChild(tenorScript);
        }
        
        setTimeout(() => {
            loveMoment.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 300);
    }
    
    // Create massive confetti
    createMassiveConfetti();
}

// Handle No button (playful)
function handleNo() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    
    if (!noButton || !yesButton) return;
    
    // Move the no button away
    const maxAttempts = 3;
    let attempts = 0;
    
    function moveButton() {
        if (attempts < maxAttempts) {
            const randomX = Math.random() * 200 - 100;
            const randomY = Math.random() * 200 - 100;
            noButton.style.transform = `translate(${randomX}px, ${randomY}px)`;
            attempts++;
        } else {
            // After 3 attempts, make yes button bigger
            yesButton.style.transform = 'scale(1.3)';
            yesButton.style.fontSize = '1.5rem';
            alert('Hmm, maybe try the other button? 😊💕');
        }
    }
    
    moveButton();
    
    // Reset after a moment
    setTimeout(() => {
        noButton.style.transform = '';
    }, 2000);
}

// Create confetti effect
function createConfetti(element) {
    if (!element) return;
    
    const rect = element.getBoundingClientRect();
    const confettiEmojis = ['💕', '💖', '💗', '💝', '💓', '💞', '✨', '⭐'];
    
    // Add confetti animation if not already added
    if (!document.getElementById('confettiStyle')) {
        const style = document.createElement('style');
        style.id = 'confettiStyle';
        style.textContent = `
            @keyframes confettiFall {
                to {
                    transform: translate(var(--x), var(--y)) rotate(360deg);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    for (let i = 0; i < 10; i++) {
        const confetti = document.createElement('div');
        confetti.textContent = confettiEmojis[Math.floor(Math.random() * confettiEmojis.length)];
        confetti.style.position = 'fixed';
        confetti.style.left = rect.left + rect.width / 2 + 'px';
        confetti.style.top = rect.top + rect.height / 2 + 'px';
        confetti.style.fontSize = '20px';
        confetti.style.pointerEvents = 'none';
        confetti.style.zIndex = '9999';
        confetti.style.animation = `confettiFall ${1 + Math.random()}s ease-out forwards`;
        
        const angle = (Math.PI * 2 * i) / 10;
        const velocity = 100 + Math.random() * 50;
        const x = Math.cos(angle) * velocity;
        const y = Math.sin(angle) * velocity;
        
        confetti.style.setProperty('--x', x + 'px');
        confetti.style.setProperty('--y', y + 'px');
        
        document.body.appendChild(confetti);
        
        setTimeout(() => {
            if (confetti.parentNode) {
                confetti.remove();
            }
        }, 1000);
    }
}

// Create massive confetti
function createMassiveConfetti() {
    const confettiEmojis = ['💕', '💖', '💗', '💝', '💓', '💞', '✨', '⭐', '🌸', '🌺'];
    
    // Add massive confetti animation if not already added
    if (!document.getElementById('massiveConfettiStyle')) {
        const style = document.createElement('style');
        style.id = 'massiveConfettiStyle';
        style.textContent = `
            @keyframes massiveConfetti {
                to {
                    transform: translate(var(--confetti-x), 100vh) rotate(720deg);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.textContent = confettiEmojis[Math.floor(Math.random() * confettiEmojis.length)];
            confetti.style.position = 'fixed';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.top = '-50px';
            confetti.style.fontSize = (20 + Math.random() * 20) + 'px';
            confetti.style.pointerEvents = 'none';
            confetti.style.zIndex = '9999';
            
            const randomX = (Math.random() * 200 - 100) + 'px';
            confetti.style.setProperty('--confetti-x', randomX);
            confetti.style.animation = `massiveConfetti ${2 + Math.random() * 2}s ease-out forwards`;
            
            document.body.appendChild(confetti);
            
            setTimeout(() => {
                confetti.remove();
            }, 4000);
        }, i * 50);
    }
}

// Initialize page
function initializePage() {
    // Create floating hearts
    createFloatingHearts();

    // Seed a friendly default message under the hearts
    const heartMessage = document.getElementById('heartMessage');
    if (heartMessage && !heartMessage.textContent) {
        heartMessage.textContent = 'Tap a heart to reveal a little note 💕';
    }
    
    // Add scroll animations
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
    
    // Observe all sections except hero (which should be visible immediately)
    document.querySelectorAll('section:not(.hero)').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
}

// Smooth scroll on page load
window.addEventListener('load', () => {
    initializePage();
});

// Also run on DOMContentLoaded as a fallback
document.addEventListener('DOMContentLoaded', () => {
    initializePage();
});

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// No popups — nothing to close via keyboard now.
