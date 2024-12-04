// Get the image element
const image = document.getElementById('image');

// Variables to store current position of the image
let imageX = 0;
let imageY = 0;

// Set the speed of the image movement
const speed = 1.0;  // The lower the value, the slower the image moves

// Listen for mouse movements
document.addEventListener('mousemove', (e) => {
    // Get the mouse coordinates
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    // Lerp (linear interpolation) for smooth movement
    imageX += (mouseX - imageX) * speed;
    imageY += (mouseY - imageY) * speed;

    // Update the image's position
    image.style.left = `${imageX - image.width / 2}px`;  // Center the image at the mouse
    image.style.top = `${imageY - image.height / 2}px`;  // Center the image at the mouse
});

// Get the cookie popup element and buttons
const cookiePopup = document.getElementById('cookie-popup');
const acceptBtn = document.getElementById('accept-btn');
const rejectBtn = document.getElementById('reject-btn');

// Check if the user has already made a choice (use sessionStorage to track within the session)
if (!sessionStorage.getItem('cookiesAccepted')) {
    cookiePopup.style.display = 'block'; 
    document.body.classList.add('popup-active');  
}

// When the user clicks "Accept"
acceptBtn.addEventListener('click', () => {
    sessionStorage.setItem('cookiesAccepted', 'true'); 
    cookiePopup.style.display = 'none'; 
    document.body.classList.remove('popup-active');  
});

// When the user clicks "Reject"
rejectBtn.addEventListener('click', () => {
    sessionStorage.setItem('cookiesAccepted', 'false');  
    cookiePopup.style.display = 'none';  
    document.body.classList.remove('popup-active'); 
});
