// Terminal-like typing effect
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';
    const cursor = document.createElement('span');
    cursor.className = 'cursor';
    element.appendChild(cursor);

    function type() {
        if (i < text.length) {
            element.insertBefore(document.createTextNode(text.charAt(i)), cursor);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Glitch effect
function glitchEffect(element) {
    const originalText = element.textContent;
    let glitchCount = 0;
    const maxGlitches = 5;

    function glitch() {
        if (glitchCount < maxGlitches) {
            const chars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
            let glitchedText = '';
            for (let i = 0; i < originalText.length; i++) {
                if (Math.random() > 0.9) {
                    glitchedText += chars.charAt(Math.floor(Math.random() * chars.length));
                } else {
                    glitchedText += originalText.charAt(i);
                }
            }
            element.textContent = glitchedText;
            glitchCount++;
            setTimeout(glitch, 50);
        } else {
            element.textContent = originalText;
        }
    }
    glitch();
}

// Terminal command effect
function terminalCommand(element, command) {
    const prompt = 'root@portfolio:~# ';
    element.innerHTML = prompt;
    const cursor = document.createElement('span');
    cursor.className = 'cursor';
    element.appendChild(cursor);

    let i = 0;
    function type() {
        if (i < command.length) {
            element.insertBefore(document.createTextNode(command.charAt(i)), cursor);
            i++;
            setTimeout(type, 50);
        }
    }
    type();
}

// Page content with hacker theme
const pageContent = {
    home: `
        <div class="terminal">
            <div class="terminal-title">root@portfolio:~#</div>
            <div class="content">
                <p class="loading">Initializing system...</p>
                <p>Welcome to my digital domain.</p>
                <p>Type 'help' for available commands.</p>
            </div>
        </div>
    `,
    about: `
        <div class="terminal">
            <div class="terminal-title">root@portfolio:~# about</div>
            <div class="content">
                <p>Loading personal data...</p>
                <p>Name: Aman Kumar Matta</p>
                <p>Role: Game Developer</p>
                <p>Skills: Unity, C#, Game Design</p>
                <p>Status: Active</p>
            </div>
        </div>
    `,
    experience: `
        <div class="terminal">
            <div class="terminal-title">root@portfolio:~# experience</div>
            <div class="content">
                <p>Accessing experience database...</p>
                <p>Senior Game Developer - Game Studio XYZ (2020-Present)</p>
                <p>Game Developer - Indie Game Studio (2018-2020)</p>
            </div>
        </div>
    `,
    work: `
        <div class="terminal">
            <div class="terminal-title">root@portfolio:~# projects</div>
            <div class="content">
                <p>Scanning project directory...</p>
                <p>Project 1: [REDACTED]</p>
                <p>Project 2: [REDACTED]</p>
                <p>Project 3: [REDACTED]</p>
            </div>
        </div>
    `,
    contact: `
        <div class="terminal">
            <div class="terminal-title">root@portfolio:~# contact</div>
            <div class="content">
                <p>Establishing secure connection...</p>
                <p>Email: [ENCRYPTED]</p>
                <p>Phone: [ENCRYPTED]</p>
                <p>Location: [REDACTED]</p>
            </div>
        </div>
    `
};

// Navigation handling
document.addEventListener('DOMContentLoaded', () => {
    const mainContent = document.getElementById('main-content');
    const buttons = document.querySelectorAll('.buttons a[data-page]');
    const title = document.querySelector('.terminal-title');

    // Load home page by default
    loadPage('home');

    // Handle navigation clicks
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const page = button.getAttribute('data-page');
            terminalCommand(title, page);
            setTimeout(() => loadPage(page), 1000);
        });
    });

    // Add glitch effect to headings
    const headings = document.querySelectorAll('h1, h2');
    headings.forEach(heading => {
        heading.addEventListener('mouseover', () => glitchEffect(heading));
    });
});

function loadPage(page) {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = pageContent[page];
    
    // Add typing effect to content
    const paragraphs = mainContent.querySelectorAll('p');
    paragraphs.forEach((p, index) => {
        setTimeout(() => {
            typeWriter(p, p.textContent);
        }, index * 1000);
    });
}

// Star canvas animation
const canvas = document.getElementById('starCanvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

const stars = [];
const numStars = 200;

for (let i = 0; i < numStars; i++) {
    stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2,
        speed: Math.random() * 0.5
    });
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    stars.forEach(star => {
        star.y += star.speed;
        if (star.y > canvas.height) {
            star.y = 0;
            star.x = Math.random() * canvas.width;
        }
        
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
    });
    
    requestAnimationFrame(animate);
}

animate(); 
animate(); 