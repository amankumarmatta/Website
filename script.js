// filepath: /c:/Users/aman/Documents/Git/Website/script.js
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.buttons a');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            alert(`You clicked on ${button.textContent}`);
        });
    });
});