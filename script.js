
/* ==============================
   MOHIT PORTFOLIO — GSAP MOTION
================================ */

if (window.gsap && window.ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger);

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  // Hero entrance animation
  if (!prefersReducedMotion) {
    const heroTimeline = gsap.timeline({
      defaults: {
        duration: 1,
        ease: "power3.out"
      }
    });

    heroTimeline
      .from(".hero-label", {
        opacity: 0,
        y: 15
      })
      .from(".portrait", {
        opacity: 0,
        y: 25
      }, "-=0.55")
      .from(".hero-content", {
        opacity: 0,
        y: 25
      }, "-=0.45");

    // Reveal projects heading when it enters the viewport
    gsap.from(".projects-heading > *", {
      opacity: 0,
      y: 35,
      duration: 0.85,
      stagger: 0.15,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".projects-heading",
        start: "top 82%",
        once: true
      }
    });

    // Project cards reveal one after another
    gsap.from(".project-card", {
      opacity: 0,
      y: 45,
      duration: 0.9,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".project-grid",
        start: "top 82%",
        once: true
      }
    });

    // Footer line reveal
    gsap.from(".projects-bottom", {
      opacity: 0,
      y: 15,
      duration: 0.7,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".projects-bottom",
        start: "top 95%",
        once: true
      }
    });
  }

  // Refresh scroll measurements after images and fonts load
  window.addEventListener("load", () => {
    ScrollTrigger.refresh();
  });
} else {
  console.warn(
    "GSAP did not load. Check your internet connection and script tags."
  );
}


/* About section: interactive cards */

const pillarCards = document.querySelectorAll(".pillar-card");
const pillarStatus = document.querySelector(".pillar-status");

const pillarMessages = {
  build: "BUILD — LEARN BY MAKING SOMETHING REAL.",
  learn: "LEARN — STRENGTHEN THE FUNDAMENTALS EVERY DAY.",
  connect: "CONNECT — SHARE IDEAS AND GROW TOGETHER."
};

pillarCards.forEach((card) => {
  card.addEventListener("click", () => {
    pillarCards.forEach((item) => {
      item.classList.remove("active");
    });

    card.classList.add("active");

    if (pillarStatus) {
      pillarStatus.textContent =
        pillarMessages[card.dataset.pillar];
    }
  });
});

/* About section scroll animation */

if (window.gsap && window.ScrollTrigger) {
  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (!reduceMotion) {
    gsap.from(".orbit-square", {
      scale: 0.75,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".about-artwork",
        start: "top 80%",
        once: true
      }
    });

    gsap.from(".about-copy > *", {
      opacity: 0,
      y: 22,
      duration: 0.75,
      stagger: 0.12,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".about-copy",
        start: "top 82%",
        once: true
      }
    });

    gsap.from(".pillar-card", {
      opacity: 0,
      y: 20,
      duration: 0.7,
      stagger: 0.15,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".about-pillars",
        start: "top 90%",
        once: true
      }
    });
  }
}


// Skills section reveal animation
if (window.gsap && window.ScrollTrigger) {
  const skillsReduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (!skillsReduceMotion) {
    gsap.from(".skills-heading > *", {
      opacity: 0,
      y: 24,
      duration: 0.75,
      stagger: 0.12,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".skills-heading",
        start: "top 82%",
        once: true
      }
    });

    gsap.from(".skill-row", {
      opacity: 0,
      y: 18,
      duration: 0.6,
      stagger: 0.09,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".skills-list",
        start: "top 82%",
        once: true
      }
    });

    gsap.from(".skills-footer", {
      opacity: 0,
      y: 12,
      duration: 0.6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".skills-footer",
        start: "top 95%",
        once: true
      }
    });

    window.addEventListener("load", () => {
      ScrollTrigger.refresh();
    });
  }
}



// Contact section reveal animation
if (window.gsap && window.ScrollTrigger) {
  const contactReduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (!contactReduceMotion) {
    gsap.from(".contact-content > *", {
      opacity: 0,
      y: 24,
      duration: 0.7,
      stagger: 0.12,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".contact-content",
        start: "top 82%",
        once: true
      }
    });

    gsap.from(".contact-bottom > *", {
      opacity: 0,
      y: 10,
      duration: 0.5,
      stagger: 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".contact-bottom",
        start: "top 98%",
        once: true
      }
    });
  }
}


// Photo and square-box motion toggle
const motionToggle = document.querySelector("#motion-toggle");
const motionState = document.querySelector("#motion-state");

if (motionToggle && motionState) {
  let motionEnabled = true;

  // Elements whose motion the user can control
  const getMotionElements = () => [
    ...document.querySelectorAll(
      ".hero-portrait, .hero-portrait img, .orbit-square"
    )
  ];

  motionToggle.addEventListener("click", () => {
    motionEnabled = !motionEnabled;

    const elements = getMotionElements();

    if (window.gsap && elements.length) {
      elements.forEach((element) => {
        const tweens = gsap.getTweensOf(element);

        tweens.forEach((tween) => {
          if (motionEnabled) {
            tween.resume();
          } else {
            tween.pause();
          }
        });
      });
    }

    motionState.textContent = motionEnabled ? "ON" : "OFF";
    motionToggle.setAttribute(
      "aria-pressed",
      String(motionEnabled)
    );
  });
}
