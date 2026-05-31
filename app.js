document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // MOBILE NAVIGATION HAMBURGER MENU
  // ==========================================
  const hamburger = document.getElementById('hamburger-menu');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      const expanded = hamburger.getAttribute('aria-expanded') === 'true';
      hamburger.setAttribute('aria-expanded', !expanded);
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    // Close mobile menu when a link is clicked
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ==========================================
  // STICKY HEADER & SCROLL SPY ACTIVE LINKS
  // ==========================================
  const header = document.getElementById('header');
  const sections = document.querySelectorAll('section[id]');

  const handleHeaderScroll = () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  const handleScrollSpy = () => {
    const scrollPosition = window.scrollY + 120; // offset for nav height

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      const associatedLink = document.getElementById(`link-${sectionId}`);

      if (associatedLink) {
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          navLinks.forEach(lnk => lnk.classList.remove('active'));
          associatedLink.classList.add('active');
        }
      }
    });
  };

  window.addEventListener('scroll', () => {
    handleHeaderScroll();
    handleScrollSpy();
  });
  
  // Initial check
  handleHeaderScroll();

  // ==========================================
  // SCROLL ENTRANCE REVEAL ANIMATIONS (Intersection Observer)
  // ==========================================
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        // Once animated, no need to observe again
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15, // trigger when 15% visible
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => {
    revealObserver.observe(el);
  });

  // ==========================================
  // INTERACTIVE PRODUCT CATALOG FILTERING
  // ==========================================
  const tabButtons = document.querySelectorAll('.tab-btn');
  const productCards = document.querySelectorAll('.product-card');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Set active button
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const targetCategory = btn.getAttribute('data-category');

      productCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');

        // Elegant fade transitions
        if (targetCategory === 'all' || cardCategory === targetCategory) {
          card.style.display = 'flex';
          // Force reflow
          void card.offsetWidth;
          card.style.opacity = '1';
          card.style.transform = 'scale(1)';
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.95)';
          // Wait for CSS transition to complete before display: none
          setTimeout(() => {
            if (btn.getAttribute('data-category') !== 'all' && card.getAttribute('data-category') !== btn.getAttribute('data-category')) {
              card.style.display = 'none';
            }
          }, 400);
        }
      });
    });
  });

  // ==========================================
  // MODALS CONTROL (Get a Quote & Product Inquiry)
  // ==========================================
  const quoteModal = document.getElementById('quote-modal');
  const quoteTriggerBtns = document.querySelectorAll('.btn-quote-trigger');
  const productInquireBtns = document.querySelectorAll('.btn-inquire-trigger');
  const quoteProductSelect = document.getElementById('quote-product');
  const modalCloseBtn = document.getElementById('modal-quote-close');
  const successModalCloseBtn = document.getElementById('quote-success-close-btn');
  const quoteForm = document.getElementById('quote-form');
  const quoteSuccessState = document.getElementById('quote-success-state');

  // Open general quote modal
  quoteTriggerBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      openModal();
      // Default choice
      if (quoteProductSelect) {
        quoteProductSelect.value = "General Distributorship Inquiry";
      }
    });
  });

  // Open modal prefilled with specific product
  productInquireBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const productName = btn.getAttribute('data-product');
      openModal();
      if (quoteProductSelect && productName) {
        quoteProductSelect.value = productName;
      }
    });
  });

  const openModal = () => {
    quoteModal.classList.add('active');
    quoteModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden'; // stop scroll background
  };

  const closeModal = () => {
    quoteModal.classList.remove('active');
    quoteModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    
    // Reset forms and success screen inside modal after transition closes
    setTimeout(() => {
      quoteSuccessState.classList.remove('active');
      quoteForm.reset();
    }, 450);
  };

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  if (successModalCloseBtn) successModalCloseBtn.addEventListener('click', closeModal);

  // Close when clicking overlay backdrop
  if (quoteModal) {
    quoteModal.addEventListener('click', (e) => {
      if (e.target === quoteModal) {
        closeModal();
      }
    });
  }

  // Close with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && quoteModal.classList.contains('active')) {
      closeModal();
    }
  });

  // ==========================================
  // FORM VALIDATIONS & SIMULATED SUBMISSIONS
  // ==========================================

  // Validation Helpers
  const showError = (input, message) => {
    const formGroup = input.closest('.form-group');
    let errorEl = formGroup.querySelector('.form-error-msg');
    
    // Set custom border
    input.style.borderColor = '#d90429';
    input.style.backgroundColor = '#fff5f5';

    if (!errorEl) {
      errorEl = document.createElement('div');
      errorEl.className = 'form-error-msg';
      errorEl.style.color = '#d90429';
      errorEl.style.fontSize = '0.75rem';
      errorEl.style.marginTop = '4px';
      errorEl.style.fontWeight = '600';
      formGroup.appendChild(errorEl);
    }
    errorEl.textContent = message;
  };

  const clearError = (input) => {
    const formGroup = input.closest('.form-group');
    const errorEl = formGroup.querySelector('.form-error-msg');
    input.style.borderColor = '';
    input.style.backgroundColor = '';
    if (errorEl) {
      formGroup.removeChild(errorEl);
    }
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePhone = (phone) => {
    // Basic phone validation (allowing digits, +, spaces, hyphens)
    const cleanPhone = phone.replace(/[^0-9]/g, '');
    return cleanPhone.length >= 10;
  };

  // Quote Form Submission Handlers
  if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      const nameInput = document.getElementById('quote-name');
      const phoneInput = document.getElementById('quote-phone');
      const quantityInput = document.getElementById('quote-quantity');

      // Validate name
      if (!nameInput.value.trim()) {
        showError(nameInput, 'Full name is required');
        isValid = false;
      } else {
        clearError(nameInput);
      }

      // Validate phone
      if (!phoneInput.value.trim()) {
        showError(phoneInput, 'Mobile number is required');
        isValid = false;
      } else if (!validatePhone(phoneInput.value)) {
        showError(phoneInput, 'Enter a valid 10-digit mobile number');
        isValid = false;
      } else {
        clearError(phoneInput);
      }

      // Validate quantity
      if (quantityInput.value < 1) {
        showError(quantityInput, 'Quantity must be at least 1');
        isValid = false;
      } else {
        clearError(quantityInput);
      }

      if (isValid) {
        const submitBtn = document.getElementById('quote-submit-btn');
        const origText = submitBtn.textContent;
        submitBtn.disabled = true;
        submitBtn.textContent = 'Initiating Invoice Calculation...';
        submitBtn.style.opacity = '0.7';

        // Mock network delay
        setTimeout(() => {
          submitBtn.disabled = false;
          submitBtn.textContent = origText;
          submitBtn.style.opacity = '';
          
          // Trigger visual success screen overlay inside modal
          quoteSuccessState.classList.add('active');
        }, 1200);
      }
    });

    // Real-time error clearance
    quoteForm.querySelectorAll('input, select, textarea').forEach(input => {
      input.addEventListener('input', () => clearError(input));
    });
  }

  // Contact Inquiry Form Submission Handlers
  const contactForm = document.getElementById('contact-form');
  const contactSuccessState = document.getElementById('contact-success-state');
  const contactSuccessResetBtn = document.getElementById('contact-success-reset');

  if (contactForm && contactSuccessState) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      const nameInput = document.getElementById('contact-name');
      const emailInput = document.getElementById('contact-email');
      const phoneInput = document.getElementById('contact-phone');
      const messageInput = document.getElementById('contact-message');

      // Validate Name
      if (!nameInput.value.trim()) {
        showError(nameInput, 'Your full name is required');
        isValid = false;
      } else {
        clearError(nameInput);
      }

      // Validate Email
      if (!emailInput.value.trim()) {
        showError(emailInput, 'Email address is required');
        isValid = false;
      } else if (!validateEmail(emailInput.value)) {
        showError(emailInput, 'Please provide a valid email format');
        isValid = false;
      } else {
        clearError(emailInput);
      }

      // Validate Phone
      if (!phoneInput.value.trim()) {
        showError(phoneInput, 'Contact phone number is required');
        isValid = false;
      } else if (!validatePhone(phoneInput.value)) {
        showError(phoneInput, 'Provide a valid mobile number (10+ digits)');
        isValid = false;
      } else {
        clearError(phoneInput);
      }

      // Validate Message
      if (!messageInput.value.trim()) {
        showError(messageInput, 'Inquiry details are required');
        isValid = false;
      } else if (messageInput.value.trim().length < 15) {
        showError(messageInput, 'Details must be at least 15 characters long');
        isValid = false;
      } else {
        clearError(messageInput);
      }

      if (isValid) {
        const submitBtn = document.getElementById('contact-submit-btn');
        const origText = submitBtn.textContent;
        submitBtn.disabled = true;
        submitBtn.textContent = 'Transmitting Inquiry...';
        submitBtn.style.opacity = '0.7';

        // Mock network delay
        setTimeout(() => {
          submitBtn.disabled = false;
          submitBtn.textContent = origText;
          submitBtn.style.opacity = '';

          // Transition to success screen state inside card
          contactSuccessState.classList.add('active');
        }, 1200);
      }
    });

    // Reset contact form success overlay
    contactSuccessResetBtn.addEventListener('click', () => {
      contactSuccessState.classList.remove('active');
      contactForm.reset();
    });

    // Clear errors inline
    contactForm.querySelectorAll('input, select, textarea').forEach(input => {
      input.addEventListener('input', () => clearError(input));
    });
  }

});
