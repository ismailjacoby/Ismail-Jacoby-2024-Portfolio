// Example: Basic client-side validation
document.getElementById('contactForm').addEventListener('submit', function(event) {
  console.log("JS Working")
  event.preventDefault();
  this.reset();
  console.log("And voila")
});
