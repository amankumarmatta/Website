// Content for different pages
const pageContent = {
    home: `
        <div class="name-container">
            <h1>Aman Kumar Matta</h1>
            <h2>Game Developer</h2>
        </div>
        <div class="welcome-text">
            <p>Creating immersive gaming experiences</p>
        </div>
    `,
    about: `
        <div class="about-me">
            <div class="text-content">
                <h2>About Me</h2>
                <p>I am a passionate game developer with expertise in creating immersive gaming experiences. With a strong foundation in both programming and game design, I strive to bring unique ideas to life through interactive storytelling and engaging gameplay mechanics.</p>
                <div class="skills">
                    <span>Unity</span>
                    <span>C#</span>
                    <span>Game Design</span>
                    <span>3D Modeling</span>
                    <span>Animation</span>
                    <span>UI/UX</span>
                </div>
            </div>
            <img src="assets/images/profile.png" alt="Aman Kumar Matta" class="profile-image">
        </div>
    `,
    experience: `
        <div class="experience-section">
            <h2>Experience</h2>
            <div class="timeline">
                <div class="timeline-item">
                    <h3>Senior Game Developer</h3>
                    <p class="company">Game Studio XYZ</p>
                    <p class="period">2020 - Present</p>
                    <p class="description">Led development of multiple successful game projects, focusing on gameplay mechanics and user experience.</p>
                </div>
                <div class="timeline-item">
                    <h3>Game Developer</h3>
                    <p class="company">Indie Game Studio</p>
                    <p class="period">2018 - 2020</p>
                    <p class="description">Developed and released several indie games, handling both programming and design aspects.</p>
                </div>
            </div>
        </div>
    `,
    work: `
        <div class="work-section">
            <h2>Portfolio</h2>
            <div class="portfolio-grid">
                <div class="portfolio-item">
                    <img src="assets/images/project1.png" alt="Project 1" class="project-image">
                    <h3>Project Title 1</h3>
                    <p>Description of the project and its key features.</p>
                </div>
                <div class="portfolio-item">
                    <img src="assets/images/project2.png" alt="Project 2" class="project-image">
                    <h3>Project Title 2</h3>
                    <p>Description of the project and its key features.</p>
                </div>
                <div class="portfolio-item">
                    <img src="assets/images/project3.png" alt="Project 3" class="project-image">
                    <h3>Project Title 3</h3>
                    <p>Description of the project and its key features.</p>
                </div>
            </div>
        </div>
    `,
    contact: `
        <div class="contact-section">
            <h2>Get in Touch</h2>
            <div class="contact-form">
                <form id="contactForm">
                    <div class="form-group">
                        <input type="text" id="name" name="name" required placeholder="Your Name">
                    </div>
                    <div class="form-group">
                        <input type="email" id="email" name="email" required placeholder="Your Email">
                    </div>
                    <div class="form-group">
                        <textarea id="message" name="message" required placeholder="Your Message"></textarea>
                    </div>
                    <button type="submit" class="submit-btn">Send Message</button>
                </form>
            </div>
        </div>
    `
};

// Navigation handling
document.addEventListener('DOMContentLoaded', () => {
    const mainContent = document.getElementById('main-content');
    const buttons = document.querySelectorAll('.buttons a[data-page]');
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.buttons');

    // Load home page by default
    loadPage('home');

    // Handle navigation clicks
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const page = button.getAttribute('data-page');
            loadPage(page);
            menu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Hamburger menu toggle
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        menu.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!menu.contains(e.target) && !hamburger.contains(e.target)) {
            menu.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
});

// Function to load page content
function loadPage(page) {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = pageContent[page];
    
    // Add fade-in animation
    mainContent.style.opacity = '0';
    setTimeout(() => {
        mainContent.style.opacity = '1';
    }, 50);
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