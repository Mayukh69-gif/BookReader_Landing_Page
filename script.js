window.addEventListener('scroll', function() {
    const navbar = document.querySelector('nav');
    if (window.scrollY > 50) {
      navbar.style.backgroundColor = '#222';
      navbar.style.color = '#FFC107';
    } else {
      navbar.style.backgroundColor = '#333';
      navbar.style.color = 'white';
    }
  });
  
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(link => {
    link.addEventListener('mouseenter', function() {
      this.style.color = '#FFA000';
    });
    link.addEventListener('mouseleave', function() {
      this.style.color = 'white';
    });
  });

  function toggleMenu() {
    var navLinks = document.getElementById("navLinks");
    if (navLinks.style.display === "flex") {
      navLinks.style.display = "none";
    } else {
      navLinks.style.display = "flex";
    }
  }
