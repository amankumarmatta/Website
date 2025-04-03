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

// Page content with modern design
const pageContent = {
    home: `
        <section class="section fade-in">
            <h2 class="section-title">Welcome to My Portfolio</h2>
            <div class="card">
                <p class="card-text">
                    Hi! I'm Aman Kumar Matta. I'm a passionate game developer with a keen interest in game design and development. I have experience in developing games for various platforms including PC, mobile, and web. I'm proficient in Unity, C#, and JavaScript. I'm also skilled in 3D modeling and animation using Blender. I'm a quick learner and a team player. I'm always eager to learn new technologies and improve my skills. I'm looking forward to working on exciting projects and collaborating with talented individuals.
                </p>
            </div>
        </section>
    `,
    about: `
        <section class="section fade-in">
            <h2 class="section-title">About Me</h2>
            <div class="card">
                <p class="card-text">
                    With over 3 years of experience in game development, I specialize in creating
                    unique gaming experiences that combine innovative mechanics with compelling storytelling.
                    My background in both programming and design allows me to approach game development
                    from a holistic perspective, ensuring that every aspect of the game contributes to
                    an unforgettable player experience.
                </p>
            </div>
            <div class="about-grid">
                <div class="about-item">
                    <h3>Technical Skills</h3>
                    <p>Unity, Unreal Engine, C#, Game Design</p>
                </div>
                <div class="about-item">
                    <h3>Soft Skills</h3>
                    <p>Problem Solving, Team Collaboration, Project Management</p>
                </div>
                <div class="about-item">
                    <h3>Interests</h3>
                    <p>Systems Administration, Virtual Reality, Artificial Intelligence in Games</p>
                </div>
            </div>
        </section>
    `,
    experience: `
        <section class="section fade-in">
            <h2 class="section-title">Experience</h2>
            <div class="timeline">
                <div class="timeline-item">
                    <h3>Senior Game Developer</h3>
                    <span class="timeline-date">2020 - Present</span>
                    <p>Leading development of AAA titles, implementing core gameplay mechanics,
                    and optimizing performance across multiple platforms.</p>
                </div>
                <div class="timeline-item">
                    <h3>Game Developer</h3>
                    <span class="timeline-date">2018 - 2020</span>
                    <p>Developed indie games, focusing on innovative gameplay mechanics and
                    unique player experiences.</p>
                </div>
                <div class="timeline-item">
                    <h3>Junior Game Developer</h3>
                    <span class="timeline-date">2016 - 2018</span>
                    <p>Worked on mobile game development, implementing UI/UX features and
                    optimizing game performance for various devices.</p>
                </div>
            </div>
        </section>
    `,
    work: `
        <section class="section fade-in">
            <h2 class="section-title">Projects</h2>
            <div class="projects-grid">
                <div class="project-card">
                    <h3>Project Alpha</h3>
                    <p>An innovative open-world RPG featuring dynamic weather systems and
                    advanced AI behaviors.</p>
                    <div class="project-tags">
                        <span class="tag">Unity</span>
                        <span class="tag">C#</span>
                        <span class="tag">RPG</span>
                    </div>
                </div>
                <div class="project-card">
                    <h3>Project Beta</h3>
                    <p>A multiplayer strategy game with real-time combat and resource management.</p>
                    <div class="project-tags">
                        <span class="tag">Unreal</span>
                        <span class="tag">C++</span>
                        <span class="tag">Strategy</span>
                    </div>
                </div>
                <div class="project-card">
                    <h3>Project Gamma</h3>
                    <p>A virtual reality puzzle game that challenges players with innovative mechanics
                    and immersive environments.</p>
                    <div class="project-tags">
                        <span class="tag">Unity</span>
                        <span class="tag">VR</span>
                        <span class="tag">Puzzle</span>
                    </div>
                </div>
                <div class="project-card">
                    <h3>Project Delta</h3>
                    <p>A mobile game with procedurally generated levels and unique art style,
                    featuring over 100 levels and daily challenges.</p>
                    <div class="project-tags">
                        <span class="tag">Unity</span>
                        <span class="tag">Mobile</span>
                        <span class="tag">Procedural</span>
                    </div>
                </div>
            </div>
        </section>
    `,
    contact: `
        <section class="section fade-in">
            <h2 class="section-title">Contact Me</h2>
            <div class="card">
                <form class="contact-form" id="contactForm">
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input type="text" id="name" name="name" required>
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" id="email" name="email" required>
                    </div>
                    <div class="form-group">
                        <label for="message">Message</label>
                        <textarea id="message" name="message" rows="5" required></textarea>
                    </div>
                    <button type="submit" class="submit-btn">Send Message</button>
                </form>
            </div>
        </section>
    `
};

// Navigation handling
document.addEventListener('DOMContentLoaded', () => {
    const mainContent = document.getElementById('main-content');
    const navLinks = document.querySelectorAll('.nav-link');
    const backToTop = document.querySelector('.back-to-top');

    // Handle navigation
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = link.getAttribute('href').substring(1);
            loadPage(page);
            
            // Update active state
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // Load initial page
    const initialPage = window.location.hash.substring(1) || 'home';
    loadPage(initialPage);

    // Back to top button
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Form handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);
            
            // Basic validation
            if (!data.name || !data.email || !data.message) {
                showError('Please fill in all fields');
                return;
            }

            if (!isValidEmail(data.email)) {
                showError('Please enter a valid email address');
                return;
            }

            // Show success message
            showSuccess('Message sent successfully!');
            contactForm.reset();
        });
    }
});

// Page loading with animations
function loadPage(page) {
    const mainContent = document.getElementById('main-content');
    const content = pageContent[page] || pageContent.home;
    
    mainContent.style.opacity = '0';
    setTimeout(() => {
        mainContent.innerHTML = content;
        mainContent.style.opacity = '1';
        
        // Initialize animations for new content
        const sections = document.querySelectorAll('.section');
        sections.forEach(section => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, { threshold: 0.1 });
            
            observer.observe(section);
        });
    }, 300);
}

// Intersection Observer for scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1
});

// Observe all sections
document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
});

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

// Utility functions
function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function showError(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    
    const form = document.getElementById('contactForm');
    form.insertBefore(errorDiv, form.firstChild);
    
    setTimeout(() => errorDiv.remove(), 3000);
}

function showSuccess(message) {
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.textContent = message;
    
    const form = document.getElementById('contactForm');
    form.insertBefore(successDiv, form.firstChild);
    
    setTimeout(() => successDiv.remove(), 3000);
} 