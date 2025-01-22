document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.getElementById('starCanvas');
    const ctx = canvas.getContext('2d');

    // Set canvas size to match the window size
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    // Array to store star objects
    let stars = [];

    // Adjust canvas size on window resize
    window.addEventListener('resize', function () {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });

    // Star class to represent each star
    class Star {
        constructor(x, y, velocityX, velocityY) {
            this.x = x;
            this.y = y;
            this.finalSize = Math.random() * 2; // Random final size
            this.size = this.finalSize * 2; // Start with twice the final size
            this.alpha = 1; // Initial opacity
            this.velocityX = velocityX * 0.05; // Horizontal velocity
            this.velocityY = 1 + Math.random() + velocityY * 0.05; // Vertical velocity
            this.gravity = 0.02; // Gravity effect
            this.drag = 0.97; // Drag effect
            this.turbulence = () => Math.random() * 0.5 - 0.25; // Random movement
            this.timeElapsed = 0; // Time since the star was created
        }

        // Draw the star on the canvas
        draw() {
            ctx.fillStyle = `rgba(255, 255, 255, ${this.alpha})`; // White with varying opacity
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2); // Circular shape
            ctx.fill();
        }

        // Update the star's position, size, and opacity
        update(deltaTime) {
            this.x += this.velocityX + this.turbulence();
            this.velocityX *= this.drag;
            this.y += this.velocityY;
            this.velocityY += this.gravity;
            this.alpha = Math.max(0, this.alpha - 0.005); // Gradual fade-out

            // Adjust size over time
            this.timeElapsed += deltaTime;
            if (this.timeElapsed < 2000) { // Shrink for 2 seconds
                this.size = this.finalSize * 2 - (this.finalSize * this.timeElapsed / 2000);
            } else {
                this.size = this.finalSize;
            }
        }
    }

    // Variables to track mouse velocity
    let lastMouseX = 0;
    let lastMouseY = 0;
    let mouseVelocityX = 0;
    let mouseVelocityY = 0;

    // Create a new star on mouse movement
    function addStar(e) {
        // Calculate mouse velocity
        mouseVelocityX = e.clientX - lastMouseX;
        mouseVelocityY = e.clientY - lastMouseY;
        lastMouseX = e.clientX;
        lastMouseY = e.clientY;

        // Add randomness to velocity
        let randomOffsetX = (Math.random() - 0.5) * 100;
        let randomOffsetY = (Math.random() - 0.5) * 100;

        // Create and add a new star
        stars.push(new Star(
            e.clientX,
            e.clientY,
            mouseVelocityX + randomOffsetX,
            mouseVelocityY + randomOffsetY
        ));
    }

    // Attach the mousemove event to the canvas
    canvas.addEventListener('mousemove', addStar);

    // Track the time for smooth animation
    let lastTime = 0;

    // Update and draw the stars in each animation frame
    function update(time = 0) {
        const deltaTime = time - lastTime;
        lastTime = time;

        // Clear the canvas
        ctx.clearRect(0, 0, width, height);

        // Update and draw each star
        stars.forEach(star => star.update(deltaTime));
        stars.forEach(star => star.draw());

        // Remove stars that are no longer visible or have faded
        stars = stars.filter(star => star.alpha > 0 && star.y < height && star.x > 0 && star.x < width);

        // Request the next animation frame
        requestAnimationFrame(update);
    }

    // Start the animation loop
    update();
});
