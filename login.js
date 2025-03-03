document.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body');

    document.addEventListener('mousemove', (e) => {
        let trail = document.createElement('div');
        trail.classList.add('trail');
        trail.style.left = `${e.clientX}px`;
        trail.style.top = `${e.clientY}px`;
        body.appendChild(trail);

        // Remove the trail after animation
        setTimeout(() => {
            trail.remove();
        }, 500);
    });

    // Show alert when login button is clicked
    document.querySelector('.login-form').addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent form submission
        alert("🚀 This feature is coming soon!");
    });
});
