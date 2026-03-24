// ===== Swift Sail Shipping - Enhanced Scripts =====

document.addEventListener('DOMContentLoaded', function () {

    // ===== MOBILE NAVIGATION TOGGLE =====
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');

    if (btn && menu) {
        btn.addEventListener('click', function () {
            menu.classList.toggle('hidden');
            const spans = btn.querySelectorAll('span');
            if (!menu.classList.contains('hidden')) {
                spans[0].style.transform = 'rotate(45deg) translate(4px, 4px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(4px, -4px)';
            } else {
                spans[0].style.transform = '';
                spans[1].style.opacity = '';
                spans[2].style.transform = '';
            }
        });

        // Close on link click
        menu.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                menu.classList.add('hidden');
                const spans = btn.querySelectorAll('span');
                spans[0].style.transform = '';
                spans[1].style.opacity = '';
                spans[2].style.transform = '';
            });
        });
    }

    // ===== SMOOTH SCROLLING FOR ANCHOR LINKS =====
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            var href = this.getAttribute('href');
            if (href === '#') return;
            e.preventDefault();
            var target = document.querySelector(href);
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===== NAV SCROLL EFFECT =====
    var nav = document.querySelector('nav');
    if (nav) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 60) {
                nav.classList.add('nav-scrolled');
            } else {
                nav.classList.remove('nav-scrolled');
            }
        }, { passive: true });
    }

    // ===== SCROLL ANIMATIONS (Intersection Observer) =====
    var animateElements = document.querySelectorAll(
        '.animate-on-scroll, .animate-slide-left, .animate-slide-right, .animate-scale-in'
    );

    if (animateElements.length > 0 && 'IntersectionObserver' in window) {
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.12,
            rootMargin: '0px 0px -40px 0px'
        });

        animateElements.forEach(function (el) {
            observer.observe(el);
        });
    } else {
        // Fallback: show everything if IntersectionObserver not supported
        animateElements.forEach(function (el) {
            el.classList.add('animate-visible');
        });
    }

    // ===== STAT COUNTER ANIMATION =====
    var statElements = document.querySelectorAll('[data-counter]');

    if (statElements.length > 0 && 'IntersectionObserver' in window) {
        var counterObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    counterObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        statElements.forEach(function (el) {
            counterObserver.observe(el);
        });
    }

    function animateCounter(el) {
        var target = el.getAttribute('data-counter');
        var suffix = el.getAttribute('data-suffix') || '';
        var prefix = el.getAttribute('data-prefix') || '';
        var duration = 2000;
        var start = 0;
        var startTime = null;

        // Parse the numeric value
        var numericTarget = parseFloat(target.replace(/[^0-9.]/g, ''));
        if (isNaN(numericTarget)) {
            el.textContent = prefix + target + suffix;
            return;
        }

        function easeOutExpo(t) {
            return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
        }

        function step(timestamp) {
            if (!startTime) startTime = timestamp;
            var progress = Math.min((timestamp - startTime) / duration, 1);
            var easedProgress = easeOutExpo(progress);
            var current = Math.floor(easedProgress * numericTarget);

            if (numericTarget >= 1000) {
                // Format with 'k' suffix
                if (current >= 1000) {
                    el.textContent = prefix + Math.floor(current / 1000) + 'k' + suffix;
                } else {
                    el.textContent = prefix + current + suffix;
                }
            } else {
                el.textContent = prefix + current + suffix;
            }

            if (progress < 1) {
                requestAnimationFrame(step);
            } else {
                // Set final value exactly
                el.textContent = prefix + target + suffix;
            }
        }

        requestAnimationFrame(step);
    }

    // ===== STAGGERED GRID ANIMATIONS =====
    var grids = document.querySelectorAll('[data-stagger]');
    grids.forEach(function (grid) {
        var children = grid.children;
        for (var i = 0; i < children.length; i++) {
            var child = children[i];
            if (!child.classList.contains('animate-on-scroll')) {
                child.classList.add('animate-on-scroll');
            }
            // Add stagger delay class
            var delayIndex = (i % 6) + 1;
            child.classList.add('stagger-delay-' + delayIndex);
        }
    });

    // Re-observe any newly added animate-on-scroll elements from stagger
    if ('IntersectionObserver' in window) {
        var reObserveElements = document.querySelectorAll(
            '.animate-on-scroll:not(.animate-visible), .animate-slide-left:not(.animate-visible), .animate-slide-right:not(.animate-visible), .animate-scale-in:not(.animate-visible)'
        );
        var reObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-visible');
                    reObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.12,
            rootMargin: '0px 0px -40px 0px'
        });

        reObserveElements.forEach(function (el) {
            reObserver.observe(el);
        });
    }

    // ===== DYNAMIC COPYRIGHT YEAR =====
    var copyrightElements = document.querySelectorAll('[data-copyright-year]');
    var currentYear = new Date().getFullYear();
    copyrightElements.forEach(function (el) {
        el.textContent = el.textContent.replace(/© \d{4}/, '© ' + currentYear);
    });

    // ===== FORM SUBMISSION FEEDBACK =====
    var contactForm = document.querySelector('form[data-contact-form]');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            var successEl = document.getElementById('form-success');
            var formEl = this;

            // Simulate submission (replace with real endpoint later)
            var submitBtn = formEl.querySelector('button[type="submit"]');
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> Sending...';
            }

            setTimeout(function () {
                if (successEl) {
                    formEl.style.display = 'none';
                    successEl.classList.add('show');
                }
            }, 1500);
        });
    }

    // ===== TRACKING FORM FEEDBACK =====
    var trackingForm = document.querySelector('form[data-tracking-form]');
    if (trackingForm) {
        trackingForm.addEventListener('submit', function (e) {
            e.preventDefault();
            var input = this.querySelector('input');
            if (input && input.value.trim()) {
                alert('Tracking feature coming soon! Please contact us at +971 55 342 4700 for real-time tracking.');
            }
        });
    }

});
