// Scroll to section
function scrollToSection(id) {
  const section = document.getElementById(id);
  section.scrollIntoView({ behavior: 'smooth' });
}

// Handle order button clicks
document.querySelectorAll('.order-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    alert('Thank you! Your order has been added to the cart (demo).');
  });
});

// Contact form submission
document.querySelector('.contact-form').addEventListener('submit', function(e){
  e.preventDefault();
  alert('Thank you! Your message/order has been received.');
  this.reset();
});

// Smooth scroll for navigation links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e){
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const target = document.getElementById(targetId);
    if(target){
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
