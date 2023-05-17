// Get all nav links
const navLinks = document.querySelectorAll('.nav-link');

// Function to handle click event on nav links
function handleClick(event) {
  // Remove active class from all nav links
  navLinks.forEach(link => {
    link.classList.remove('active');
  });

  // Add active class to the clicked nav link
  event.target.classList.add('active');
}

// Attach click event listener to each nav link
navLinks.forEach(link => {
  link.addEventListener('click', handleClick);
});
