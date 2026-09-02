/*==================================================
BUILD READY DIGITAL
Main JavaScript
==============================================

    /*=========================================
  MOBILE NAVIGATION
=========================================*/

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("main-navigation");
const navLinks = document.querySelectorAll(".nav-link");

if (hamburger && navMenu) {

    // Open / close mobile menu
    hamburger.addEventListener("click", () => {

        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");

        const isOpen = navMenu.classList.contains("active");

        hamburger.setAttribute(
            "aria-expanded",
            isOpen ? "true" : "false"
        );

        hamburger.setAttribute(
            "aria-label",
            isOpen
                ? "Close navigation menu"
                : "Open navigation menu"
        );

    });


    // Close menu when a link is clicked
    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            hamburger.classList.remove("active");
            navMenu.classList.remove("active");

            hamburger.setAttribute(
                "aria-expanded",
                "false"
            );

            hamburger.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

        });

    });


    // Close menu when clicking outside
    document.addEventListener("click", (event) => {

        const clickedInsideMenu =
            navMenu.contains(event.target);

        const clickedHamburger =
            hamburger.contains(event.target);

        if (!clickedInsideMenu && !clickedHamburger) {

            hamburger.classList.remove("active");
            navMenu.classList.remove("active");

            hamburger.setAttribute(
                "aria-expanded",
                "false"
            );

            hamburger.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

        }

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
      SERVICE DETAIL PANEL
    =========================================*/

    const serviceLinks = document.querySelectorAll(".service-link[data-service]");
    const detailTitle = document.getElementById("serviceDetailTitle");
    const detailText = document.getElementById("serviceDetailText");
    const detailList = document.getElementById("serviceDetailList");
    const detailCta = document.getElementById("serviceDetailCta");
    const detailImage = document.getElementById("serviceDetailImage");

    const serviceContent = {
        design: {
            title: "Web Design",
            text: "Crafting elegant digital experiences that feel premium, clear, and conversion-ready.",
            items: [
                "Visual systems tailored to your brand",
                "Fast, responsive layouts for every screen",
                "Clear calls to action and strong storytelling"
            ],
            cta: "web-design.html",
            image: "images/Web-Development-Image.jpg"
        },
        brand: {
            title: "Brand Visualization",
            text: "Distinct identity systems that make your business memorable, premium, and instantly recognizable.",
            items: [
                "Consistent visual storytelling across touchpoints",
                "Logo, color, and typography frameworks",
                "Marketing-ready assets for stronger positioning"
            ],
            cta: "services.html",
            image: "images/Graphic-Design Image.jpg"
        },
        ux: {
            title: "UI/UX Design",
            text: "Thoughtful, user-centered interfaces designed to make every interaction feel intuitive and confident.",
            items: [
                "Smooth user journeys and clear information hierarchy",
                "Responsive wireframes and polished interface design",
                "User-first decisions that support conversion goals"
            ],
            cta: "services.html",
            image: "images/UI-UX image.jpg"
        },
        seo: {
            title: "SEO Optimization",
            text: "Search-focused structure and content strategy to boost visibility and ranking potential.",
            items: [
                "Technical SEO improvements and healthy site structure",
                "Keyword research and content direction",
                "Analytics tracking for measurable growth"
            ],
            cta: "seo-optimization.html",
            image: "images/SEO-Image.jpg"
        },
        app: {
            title: "App Development",
            text: "Cross-platform applications built for speed, reliability, and thoughtful user journeys.",
            items: [
                "Scalable frontend and backend architecture",
                "Modern frameworks for fast product delivery",
                "Ongoing maintenance and feature expansion"
            ],
            cta: "app-development.html",
            image: "images/App-development2.jpg"
        },
        social: {
            title: "Social Media Management",
            text: "Audience growth and content strategy designed to turn attention into meaningful engagement.",
            items: [
                "Consistent content planning and publishing",
                "Campaign analytics and audience insights",
                "Community engagement that strengthens trust"
            ],
            cta: "social-media-management.html",
            image: "images/Social-Media-Image.jpg"
        }
    };

    const serviceRedirects = {
        design: "web-design.html",
        brand: "services.html",
        ux: "services.html",
        seo: "seo-optimization.html",
        app: "app-development.html",
        social: "social-media-management.html"
    };

    if (serviceLinks.length && detailTitle && detailText && detailList && detailCta && detailImage) {
        const renderServiceDetail = (service) => {
            const content = serviceContent[service] || serviceContent.design;
            detailTitle.textContent = content.title;
            detailText.textContent = content.text;
            detailList.innerHTML = content.items.map(item => `<li>${item}</li>`).join("");
            detailCta.href = content.cta;
            detailCta.textContent = `View ${content.title.toLowerCase()} details`;
            detailImage.src = content.image;
            detailImage.alt = `${content.title} service`;
        };

        serviceLinks.forEach(link => {
            link.addEventListener("click", (event) => {
                event.preventDefault();
                const service = link.dataset.service;
                renderServiceDetail(service);
                const targetPage = serviceRedirects[service] || "services.html";
                window.location.href = targetPage;
            });
        });

        const params = new URLSearchParams(window.location.search);
        const initialService = params.get("service");
        if (initialService) {
            renderServiceDetail(initialService);
        }
    }

    /*=========================================
      LIVE CLOCK
    =========================================*/

    const liveClock = document.getElementById("liveClock");

    const updateClock = () => {
        if (!liveClock) return;
        const now = new Date();
        const time = now.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        });
        const date = now.toLocaleDateString([], {
            weekday: "short",
            month: "short",
            day: "numeric"
        });
        liveClock.textContent = `${date} • ${time}`;
    };

    updateClock();
    setInterval(updateClock, 1000);

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
        

    // Close menu when clicking outside navigation
    document.addEventListener("click", (event) => {

        const clickedInsideNav =
            navMenu.contains(event.target) ||
            hamburger.contains(event.target);

        if (!clickedInsideNav) {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
            hamburger.setAttribute("aria-expanded", "false");
        }
    });
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

