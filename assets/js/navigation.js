// Mobile menu toggle
(function() {
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileNav = document.getElementById('mobile-nav');

  if (mobileMenuBtn && mobileNav) {
    mobileMenuBtn.addEventListener('click', function() {
      mobileNav.classList.toggle('is-open');
      mobileMenuBtn.classList.toggle('is-active');
      document.body.classList.toggle('menu-open');
    });

    // Close menu when clicking on a link
    const mobileLinks = mobileNav.querySelectorAll('a');
    mobileLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        mobileNav.classList.remove('is-open');
        mobileMenuBtn.classList.remove('is-active');
        document.body.classList.remove('menu-open');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
      if (!mobileNav.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        mobileNav.classList.remove('is-open');
        mobileMenuBtn.classList.remove('is-active');
        document.body.classList.remove('menu-open');
      }
    });
  }
})();
