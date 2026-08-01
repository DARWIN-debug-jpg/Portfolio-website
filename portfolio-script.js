/*==================================================
BUILD READY DIGITAL
Main JavaScript
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*=========================================
      MOBILE NAVIGATION
    =========================================*/

    const hamburger = document.getElementById("hamburger");
    const navMenu = document.querySelector(".nav-menu");

    if (hamburger && navMenu) {

        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
        });

        document.querySelectorAll(".nav-link").forEach(link => {

            link.addEventListener("click", () => {
                hamburger.classList.remove("active");
                navMenu.classList.remove("active");
            });

        });

    }

    /*=========================================
      STICKY NAVBAR
    =========================================*/

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if (!navbar) return;

        if (window.scrollY > 60) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

    });

    /*=========================================
      REVEAL ANIMATION
    =========================================*/

    const revealItems = document.querySelectorAll(
        ".reveal,.reveal-left,.reveal-right"
    );

    if (revealItems.length > 0) {

        const revealObserver = new IntersectionObserver((entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                }

            });

        }, {

            threshold: 0.15

        });

        revealItems.forEach(item => {

            revealObserver.observe(item);

        });

    }

    /*=========================================
      COUNTERS
    =========================================*/

    const counters = document.querySelectorAll(".counter");

    if (counters.length > 0) {

        const counterObserver = new IntersectionObserver((entries, observer) => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) return;

                const counter = entry.target;

                const target = Number(counter.dataset.target);

                let count = 0;

                const speed = target / 80;

                const updateCounter = () => {

                    if (count < target) {

                        count += speed;

                        counter.innerText = Math.ceil(count);

                        requestAnimationFrame(updateCounter);

                    } else {

                        counter.innerText = target + "+";

                    }

                };

                updateCounter();

                observer.unobserve(counter);

            });

        });

        counters.forEach(counter => {

            counterObserver.observe(counter);

        });

    }

    /*=========================================
      ACTIVE NAVIGATION
    =========================================*/

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 120;

            if (window.pageYOffset >= sectionTop) {

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    });

    /*=========================================
      SMOOTH SCROLL
    =========================================*/

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                target.scrollIntoView({

                    behavior: "smooth"

                });

            }

        });

    });

    /*=========================================
      CONTACT FORM
    =========================================*/

    const form = document.getElementById("contactForm");

    const submitBtn = document.getElementById("submitBtn");

    if (form && submitBtn) {

        form.addEventListener("submit", function (e) {

            e.preventDefault();

            submitBtn.innerHTML =
                '<i class="fas fa-check"></i> Message Sent';

            submitBtn.style.background = "#16a34a";

            setTimeout(() => {

                submitBtn.innerHTML =
                    '<i class="fas fa-paper-plane"></i> <span>Send Message</span>';

                submitBtn.style.background = "";

                form.reset();

            }, 3000);

        });

    }

    /*=========================================
      SCROLL PROGRESS BAR
    =========================================*/

    const progressBar = document.getElementById("progressBar");

    if (progressBar) {

        window.addEventListener("scroll", () => {

            const scrollTop = document.documentElement.scrollTop;

            const height =
                document.documentElement.scrollHeight -
                document.documentElement.clientHeight;

            const progress = (scrollTop / height) * 100;

            progressBar.style.width = progress + "%";

        });

    }

    /*=========================================
      THEME TOGGLE
    =========================================*/

    const themeToggle = document.getElementById("themeToggle");

    if (themeToggle) {

        themeToggle.addEventListener("click", () => {

            document.body.classList.toggle("light-mode");

            const icon = themeToggle.querySelector("i");

            if (icon) {

                if (document.body.classList.contains("light-mode")) {

                    icon.classList.remove("fa-moon");
                    icon.classList.add("fa-sun");

                } else {

                    icon.classList.remove("fa-sun");
                    icon.classList.add("fa-moon");

                }

            }

        });

    }

    /*=========================================
      PLANET HOVER
    =========================================*/

    const planets = document.querySelectorAll(".planet");

    planets.forEach(planet => {

        planet.addEventListener("mouseenter", () => {

            planet.style.transform = "scale(1.15)";

        });

        planet.addEventListener("mouseleave", () => {

            planet.style.transform = "";

        });

    });

});