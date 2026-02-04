// Get elements
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const questionContainer = document.getElementById('questionContainer');
const congratulationsContainer = document.getElementById('congratulationsContainer');
const cuteGif = document.querySelector('.cute-gif');

let noClickCount = 0;
const noBtnMessages = [
    'No',
    'Are you sure?',
    'Really?',
    'Think again!',
    'Last chance!',
    'Surely not?',
    'You might regret this!',
    'Give it another thought!',
    'Are you absolutely certain?',
    'But why? 🥺',
    'Please? 🥺',
    'No way! 🤨',
    'Please!! 🥺'
];

// Sad gif URL
const sadGif = 'https://media.giphy.com/media/OPU6wzx8JrHna/giphy.gif';

// Function to move the No button to a random position
function moveNoButton() {
    // Get current button dimensions
    const btnRect = noBtn.getBoundingClientRect();
    
    // Get viewport dimensions
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // Calculate safe boundaries within viewport with generous padding
    const padding = 30; // Padding from viewport edges
    
    // Calculate max positions ensuring button stays fully visible
    const maxX = viewportWidth - btnRect.width - padding;
    const maxY = viewportHeight - btnRect.height - padding;
    
    // Generate random positions within safe boundaries
    const randomX = padding + (Math.random() * (maxX - padding));
    const randomY = padding + (Math.random() * (maxY - padding));

    // Use fixed positioning relative to viewport for better control
    noBtn.style.position = 'fixed';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
    noBtn.style.transform = 'none'; // Reset any transforms

    // Increase the size of Yes button
    const currentYesSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
    yesBtn.style.fontSize = (currentYesSize + 2) + 'px';
    yesBtn.style.padding = (15 + noClickCount * 2) + 'px ' + (40 + noClickCount * 4) + 'px';
}

// Flag to track if we've changed to sad gif
let hasChangedToSad = false;

// Function to change the gif to sad one (only once, on first "No" interaction)
function changeSadGif() {
    if (!cuteGif || hasChangedToSad) {
        return;
    }
    
    hasChangedToSad = true;
    
    // Add a brief fade effect to make the change more visible
    cuteGif.style.opacity = '0.3';
    
    setTimeout(() => {
        // Change to the sad gif
        cuteGif.src = sadGif;
        
        // Fade back in
        cuteGif.style.opacity = '1';
        
        // Add a little shake animation to draw attention to the sad gif
        cuteGif.style.animation = 'shake 0.5s';
        setTimeout(() => {
            cuteGif.style.animation = '';
        }, 500);
    }, 100);
}

// Function to shrink the No button
function shrinkNoButton() {
    noClickCount++;

    // Change the gif to a sadder one
    changeSadGif();

    // Shrink the button more gradually - only start shrinking after 3 hovers
    if (noClickCount > 3) {
        const currentSize = parseFloat(window.getComputedStyle(noBtn).fontSize);
        const shrinkAmount = 1.5; // Reduced from 2 to make it more gradual
        const newSize = Math.max(currentSize - shrinkAmount, 10); // Minimum 10px
        noBtn.style.fontSize = newSize + 'px';

        // Reduce padding more gradually
        const currentPadding = parseInt(window.getComputedStyle(noBtn).padding);
        const newPadding = Math.max(currentPadding - 1.5, 5); // Minimum 5px
        noBtn.style.padding = newPadding + 'px ' + (newPadding * 2) + 'px';
    }

    // Update button text
    if (noClickCount < noBtnMessages.length) {
        noBtn.textContent = noBtnMessages[noClickCount];
    }

    // Only start fading after 10 hovers (more irritating!)
    if (noClickCount > 10) {
        noBtn.style.opacity = Math.max(0.3, 1 - ((noClickCount - 10) * 0.1));
    }
}

// Event listeners for No button
noBtn.addEventListener('mouseenter', () => {
    moveNoButton();
    shrinkNoButton();
});

noBtn.addEventListener('click', (e) => {
    e.preventDefault();
    moveNoButton();
    shrinkNoButton();
});

// Make the buttons container position relative to allow absolute positioning
const buttonsContainer = document.querySelector('.buttons-container');
buttonsContainer.style.position = 'relative';
buttonsContainer.style.minHeight = '100px';

// Event listener for Yes button
yesBtn.addEventListener('click', () => {
    // Hide question container
    questionContainer.style.display = 'none';

    // Show congratulations container
    congratulationsContainer.style.display = 'flex';

    // Start continuous celebration animation
    startContinuousConfetti();
    // Optional: Play a sound (uncomment if you add a sound file)
     const audio = new Audio('perfect.mp3');
    audio.play();
});

// Create additional confetti elements
function createConfetti() {
    const confettiCount = 30; // Reduced from 50 for better performance
    const confettiContainer = document.querySelector('.confetti');

    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'absolute';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = '-10px';
        confetti.style.fontSize = (Math.random() * 20 + 20) + 'px';
        
        // Force animation to play by using a unique animation name each time
        const duration = Math.random() * 3 + 3;
        const delay = Math.random() * 2;
        confetti.style.animation = `confettiFall ${duration}s linear ${delay}s forwards`;

        const emojis = ['🎉', '🎊', '💖', '💕', '❤️', '💝', '🌹', '⭐', '✨', '🎈'];
        confetti.textContent = emojis[Math.floor(Math.random() * emojis.length)];

        confettiContainer.appendChild(confetti);

        // Remove confetti after animation completes
        setTimeout(() => {
            confetti.remove();
        }, (duration + delay + 1) * 1000);
    }
}

// Continuously create confetti while on congratulations page
let confettiInterval;

function startContinuousConfetti() {
    // Create initial confetti
    createConfetti();
    
    // Create new confetti every 4 seconds (reduced frequency for better performance)
    confettiInterval = setInterval(() => {
        if (congratulationsContainer.style.display === 'flex') {
            createConfetti();
        } else {
            clearInterval(confettiInterval);
        }
    }, 4000);
}

// Easter egg: If user tries to use keyboard to select No
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab' && document.activeElement === noBtn) {
        moveNoButton();
        shrinkNoButton();
        yesBtn.focus();
    }
});

// Prevent context menu on No button (right-click)
noBtn.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    moveNoButton();
    shrinkNoButton();
});

// Add touch support for mobile
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault();
    moveNoButton();
    shrinkNoButton();
});

// Add a subtle hint after a while
setTimeout(() => {
    if (questionContainer.style.display !== 'none') {
        const hint = document.createElement('p');
        hint.style.cssText = `
            color: #FF69B4;
            font-size: 0.9em;
            margin-top: 20px;
            animation: fadeIn 1s;
            font-style: italic;
        `;
        hint.textContent = 'Psst... the Yes button looks pretty inviting 👀';
        document.querySelector('.question-box').appendChild(hint);
    }
}, 10000);
