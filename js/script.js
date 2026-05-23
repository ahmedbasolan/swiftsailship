// ===== Swift Sail Shipping - Enhanced Scripts =====

(function () {
    'use strict';

    // ===== CONSTANTS =====
    var SCROLL_THRESHOLD = 60;
    var COUNTER_DURATION = 2000;
    var COUNTER_K_THRESHOLD = 1000;
    var OBSERVER_THRESHOLD = 0.12;
    var OBSERVER_ROOT_MARGIN = '0px 0px -40px 0px';
    var COUNTER_OBSERVER_THRESHOLD = 0.5;
    var STAGGER_MAX = 6;
    var FORM_SUBMIT_DELAY = 1500;
    var NAV_OFFSET = 80;

    // ===== MOBILE NAVIGATION TOGGLE =====
    function closeMobileMenu(btn, menu) {
        if (!menu) return;
        menu.classList.add('hidden');
        if (!btn) return;
        var spans = btn.querySelectorAll('span');
        if (spans.length >= 3) {
            spans[0].style.transform = '';
            spans[1].style.opacity = '';
            spans[2].style.transform = '';
        }
    }

    function openMobileMenu(btn, menu) {
        if (!menu) return;
        menu.classList.remove('hidden');
        if (!btn) return;
        var spans = btn.querySelectorAll('span');
        if (spans.length >= 3) {
            spans[0].style.transform = 'rotate(45deg) translate(4px, 4px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(4px, -4px)';
        }
    }

document.addEventListener('DOMContentLoaded', function () {
    var scrollObserver = null;
    var btn = document.getElementById('mobile-menu-btn');
    var menu = document.getElementById('mobile-menu');

    if (btn && menu) {
        btn.addEventListener('click', function () {
            if (menu.classList.contains('hidden')) {
                openMobileMenu(btn, menu);
            } else {
                closeMobileMenu(btn, menu);
            }
        });

        // Close on link click
        menu.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                closeMobileMenu(btn, menu);
            });
        });

        // Close on Escape key
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') {
                closeMobileMenu(btn, menu);
            }
        });

        // Close on click outside
        document.addEventListener('click', function (e) {
            if (!btn.contains(e.target) && !menu.contains(e.target)) {
                closeMobileMenu(btn, menu);
            }
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
                    top: target.offsetTop - NAV_OFFSET,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===== NAV SCROLL EFFECT =====
    var nav = document.querySelector('nav');
    if (nav) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > SCROLL_THRESHOLD) {
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
        scrollObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-visible');
                    scrollObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: OBSERVER_THRESHOLD,
            rootMargin: OBSERVER_ROOT_MARGIN
        });

        animateElements.forEach(function (el) {
            scrollObserver.observe(el);
        });
    } else if (animateElements.length > 0) {
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
        }, { threshold: COUNTER_OBSERVER_THRESHOLD });

        statElements.forEach(function (el) {
            counterObserver.observe(el);
        });
    }

    function animateCounter(el) {
        if (!el) return;
        var target = el.getAttribute('data-counter');
        if (!target) return;
        var suffix = el.getAttribute('data-suffix') || '';
        var prefix = el.getAttribute('data-prefix') || '';
        var startTime = null;

        // Parse the numeric value
        var numericTarget = parseFloat(target.replace(/[^0-9.]/g, ''));
        if (isNaN(numericTarget)) {
            el.textContent = prefix + target + suffix;
            return;
        }

        var useKFormat = numericTarget >= COUNTER_K_THRESHOLD && !suffix;

        function easeOutExpo(t) {
            return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
        }

        function step(timestamp) {
            if (!startTime) startTime = timestamp;
            var progress = Math.min((timestamp - startTime) / COUNTER_DURATION, 1);
            var easedProgress = easeOutExpo(progress);
            var current = Math.floor(easedProgress * numericTarget);

            if (useKFormat && current >= COUNTER_K_THRESHOLD) {
                el.textContent = prefix + Math.floor(current / COUNTER_K_THRESHOLD) + 'k' + suffix;
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
        if (!children || children.length === 0) return;
        for (var i = 0; i < children.length; i++) {
            var child = children[i];
            if (!child.classList.contains('animate-on-scroll')) {
                child.classList.add('animate-on-scroll');
            }
            // Add stagger delay class
            var delayIndex = (i % STAGGER_MAX) + 1;
            child.classList.add('stagger-delay-' + delayIndex);
        }
    });

    // Re-observe newly added animate-on-scroll elements from stagger (reuse scrollObserver)
    if (scrollObserver) {
        var reObserveElements = document.querySelectorAll(
            '.animate-on-scroll:not(.animate-visible), .animate-slide-left:not(.animate-visible), .animate-slide-right:not(.animate-visible), .animate-scale-in:not(.animate-visible)'
        );
        reObserveElements.forEach(function (el) {
            scrollObserver.observe(el);
        });
    } else if ('IntersectionObserver' in window) {
        // scrollObserver wasn't created earlier (no initial elements), create one now
        scrollObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-visible');
                    scrollObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: OBSERVER_THRESHOLD,
            rootMargin: OBSERVER_ROOT_MARGIN
        });
        var reObserveElements2 = document.querySelectorAll(
            '.animate-on-scroll:not(.animate-visible), .animate-slide-left:not(.animate-visible), .animate-slide-right:not(.animate-visible), .animate-scale-in:not(.animate-visible)'
        );
        reObserveElements2.forEach(function (el) {
            scrollObserver.observe(el);
        });
    }

    // ===== DYNAMIC COPYRIGHT YEAR =====
    var copyrightElements = document.querySelectorAll('[data-copyright-year]');
    var currentYear = new Date().getFullYear();
    copyrightElements.forEach(function (el) {
        el.textContent = el.textContent.replace(/(?:©|&copy;)\s*\d{4}/g, '© ' + currentYear);
    });

    // ===== FORM SUBMISSION FEEDBACK =====
    var contactForm = document.querySelector('form[data-contact-form]');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Client-side validation
            var requiredFields = contactForm.querySelectorAll('[required]');
            var isValid = true;
            requiredFields.forEach(function (field) {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('border-red-400');
                    field.addEventListener('input', function handler() {
                        field.classList.remove('border-red-400');
                        field.removeEventListener('input', handler);
                    });
                }
            });

            // Email validation
            var emailField = contactForm.querySelector('input[type="email"]');
            if (emailField && emailField.value.trim()) {
                var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(emailField.value.trim())) {
                    isValid = false;
                    emailField.classList.add('border-red-400');
                    emailField.addEventListener('input', function handler() {
                        emailField.classList.remove('border-red-400');
                        emailField.removeEventListener('input', handler);
                    });
                }
            }

            if (!isValid) return;

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
                } else if (submitBtn) {
                    // No success element — reset button state
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = 'Send Message';
                }
            }, FORM_SUBMIT_DELAY);
        });
    }

    // ===== INTERACTIVE CARGO TRACKING ENGINE =====
    var trackerForm = document.getElementById('tracking-simulator-form');
    var trackerResult = document.getElementById('tracking-result-panel');
    var trackingDb = {
        'SS-98745': {
            cargo: 'Medical Equipment & PPE',
            vessel: 'Al Sharqi Express - V12',
            loc: 'In Transit - Arabian Sea',
            eta: '2 Days (May 25, 2026)',
            step: 3
        },
        'SS-12345': {
            cargo: 'Premium Organic Dates',
            vessel: 'Emirates SkyCargo EK-99',
            loc: 'London Heathrow (LHR)',
            eta: 'Delivered & Signed',
            step: 5
        },
        'SS-54321': {
            cargo: 'High-Pressure Industrial Valves',
            vessel: 'MSC Hamburg - V204',
            loc: 'Customs Clearance - Jebel Ali Port',
            eta: '1 Day (May 24, 2026)',
            step: 4
        },
        'SS-88888': {
            cargo: 'Consolidated B2B Electronics',
            vessel: 'COSCO Horizon - V088',
            loc: 'Origin Port Loading - Hong Kong (HKG)',
            eta: '5 Days (May 28, 2026)',
            step: 2
        }
    };

    if (trackerForm && trackerResult) {
        trackerForm.addEventListener('submit', function (e) {
            e.preventDefault();
            var inputField = document.getElementById('tracking-num-input');
            if (!inputField) return;
            var rawCode = inputField.value.trim();
            var code = rawCode.toUpperCase();
            if (!code) return;

            var submitBtn = trackerForm.querySelector('button[type="submit"]');
            var originalBtnText = submitBtn.innerHTML;
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<svg class="animate-spin mr-2 h-4 w-4 inline-block text-gold" fill="none" viewBox="0 0 24 24" style="animation: spin 1s linear infinite; width: 14px; height: 14px; margin-right: 6px;"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> Retrieving...';

            // Find shipment in simulator db, or fallback to auto-simulation
            var shipment = trackingDb[code] || {
                cargo: 'General Cargo (Ref: ' + code + ')',
                vessel: 'Pending Assignment',
                loc: 'Dubai Distribution Hub (DXB)',
                eta: 'Pending Route Confirmation',
                step: 1
            };

            setTimeout(function () {
                // Restore button
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalBtnText;

                // Show result container
                trackerResult.classList.add('show');

                // Bind text values
                document.getElementById('track-val-cargo').textContent = shipment.cargo;
                document.getElementById('track-val-vessel').textContent = shipment.vessel;
                document.getElementById('track-val-loc').textContent = shipment.loc;
                document.getElementById('track-val-eta').textContent = shipment.eta;

                // Animate Timeline progress fill bar width
                var progressFill = document.getElementById('tracking-progress-fill');
                var nodes = trackerResult.querySelectorAll('.ep-tracking-timeline-node');
                
                var percent = 0;
                if (shipment.step > 1) {
                    percent = ((shipment.step - 1) / (nodes.length - 1)) * 100;
                }
                
                // Adjust for horizontal vs vertical layout on responsive devices
                var isMobile = window.innerWidth <= 768;
                if (isMobile) {
                    progressFill.style.width = '3px';
                    progressFill.style.height = percent + '%';
                } else {
                    progressFill.style.height = '3px';
                    progressFill.style.width = percent + '%';
                }

                // Highlight nodes step-by-step
                nodes.forEach(function (node) {
                    var stepNum = parseInt(node.getAttribute('data-step'));
                    node.classList.remove('active', 'completed');
                    
                    if (stepNum < shipment.step) {
                        node.classList.add('completed');
                    } else if (stepNum === shipment.step) {
                        node.classList.add('active');
                    }
                });

            }, 1000);
        });
    }

    // ===== TESTIMONIALS SLIDER ENGINE =====
    var testTrack = document.getElementById('testimonial-slider-track');
    var testPrev = document.getElementById('testimonial-prev');
    var testNext = document.getElementById('testimonial-next');
    var testDotsContainer = document.getElementById('testimonial-dots');
    
    if (testTrack && testDotsContainer) {
        var currentSlide = 0;
        var slides = testTrack.querySelectorAll('.ep-testimonial-slide');
        var dots = testDotsContainer.querySelectorAll('.ep-testimonial-dot');
        var slideCount = slides.length;
        var slideInterval = null;

        function goToSlide(index) {
            if (index < 0) {
                index = slideCount - 1;
            } else if (index >= slideCount) {
                index = 0;
            }
            currentSlide = index;
            
            // Apply CSS transform translate slide transition
            testTrack.style.transform = 'translateX(-' + (currentSlide * 100) + '%)';
            
            // Sync dot active state
            dots.forEach(function (dot, i) {
                if (i === currentSlide) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
        }

        function startAutoPlay() {
            stopAutoPlay();
            slideInterval = setInterval(function () {
                goToSlide(currentSlide + 1);
            }, 5000);
        }

        function stopAutoPlay() {
            if (slideInterval) {
                clearInterval(slideInterval);
                slideInterval = null;
            }
        }

        if (testPrev && testNext) {
            testPrev.addEventListener('click', function () {
                goToSlide(currentSlide - 1);
                startAutoPlay(); // Reset timer
            });
            testNext.addEventListener('click', function () {
                goToSlide(currentSlide + 1);
                startAutoPlay(); // Reset timer
            });
        }

        dots.forEach(function (dot) {
            dot.addEventListener('click', function () {
                var idx = parseInt(this.getAttribute('data-index'));
                goToSlide(idx);
                startAutoPlay(); // Reset timer
            });
        });

        // Pause timer on hover
        var container = document.querySelector('.ep-testimonial-slider-container');
        if (container) {
            container.addEventListener('mouseenter', stopAutoPlay);
            container.addEventListener('mouseleave', startAutoPlay);
        }

        startAutoPlay();
    }

});

})();
