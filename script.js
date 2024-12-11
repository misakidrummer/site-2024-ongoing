// Get the image element
const image = document.getElementById('image');

// Variables to store current position of the image
let imageX = 0;
let imageY = 0;

// Set the speed of the image movement
const speed = 1.0; // The lower the value, the smoother the image movement

// Listen for mouse movements
document.addEventListener('mousemove', (e) => {
    // Get the mouse coordinates adjusted by the page's scroll offset
    const mouseX = e.clientX + window.pageXOffset; // Mouse X position with scroll offset
    const mouseY = e.clientY + window.pageYOffset; // Mouse Y position with scroll offset

    // Lerp (linear interpolation) for smooth movement
    imageX += (mouseX - imageX) * speed;
    imageY += (mouseY - imageY) * speed;

    // Update the image's position
    image.style.left = `${imageX - image.width / 2}px`; // Center the image at the mouse
    image.style.top = `${imageY - image.height / 2}px`; // Center the image at the mouse
});

// Ensure the image has `position: absolute;` or `position: fixed;` in CSS
