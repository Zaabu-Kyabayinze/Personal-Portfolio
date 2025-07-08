document.addEventListener("DOMContentLoaded", function () {
  const words = ["Software Engineer", "Web Developer"];
  const typewriter = document.getElementById("typewriter");
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 90;
  let pauseTime = 1200;

  function type() {
    const currentWord = words[wordIndex];
    if (isDeleting) {
      typewriter.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 40;
      if (charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typingSpeed = 500;
      }
    } else {
      typewriter.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 90;
      if (charIndex === currentWord.length) {
        isDeleting = true;
        typingSpeed = pauseTime;
      }
    }
    setTimeout(type, typingSpeed);
  }

  type();
});

// Typewriter for "Connect with me"
document.addEventListener("DOMContentLoaded", function () {
  const connectWords = ["Let’s start a conversation!"];
  const connectTypewriter = document.getElementById("connect-typewriter");
  if (connectTypewriter) {
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 90;
    let pauseTime = 1200;

    function typeConnect() {
      const currentWord = connectWords[wordIndex];
      if (isDeleting) {
        connectTypewriter.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 40;
        if (charIndex === 0) {
          isDeleting = false;
          wordIndex = (wordIndex + 1) % connectWords.length;
          typingSpeed = 500;
        }
      } else {
        connectTypewriter.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 90;
        if (charIndex === currentWord.length) {
          isDeleting = true;
          typingSpeed = pauseTime;
        }
      }
      setTimeout(typeConnect, typingSpeed);
    }
    typeConnect();
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const backToTopBtn = document.getElementById('back-to-top');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add('show');
    } else {
      backToTopBtn.classList.remove('show');
    }
  });
  backToTopBtn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

// Section fade-in and slide-up using Intersection Observer
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  sections.forEach(section => observer.observe(section));
});

window.addEventListener("load", function () {
  setTimeout(() => {
    document.getElementById("page-loader").classList.add("hide");
  }, 1400); // increased delay for longer loader (was 400)
});

document.querySelectorAll('a[href^="#"], a.internal-link').forEach(link => {
  link.addEventListener('click', function(e) {
    // Only fade if not opening in new tab
    if (!link.target && link.getAttribute('href').charAt(0) === "#") {
      e.preventDefault();
      const target = link.getAttribute('href');
      gsap.to("body", { opacity: 0, duration: 0.4, onComplete: () => {
        window.location.hash = target;
        gsap.to("body", { opacity: 1, duration: 0.4 });
      }});
    }
  });
});

// Add this at the end of your loader JS to animate the dots in the loader text
document.addEventListener("DOMContentLoaded", function () {
  const dots = document.querySelector('.loader-text .dots');
  if (dots) {
    let count = 0;
    setInterval(() => {
      count = (count + 1) % 4;
      dots.textContent = '.'.repeat(count) || '.';
    }, 400);
  }
});

// Loader typewriter for welcome message and loader control
window.addEventListener("load", function () {
  const welcomeText = "Welcome to my Portfolio!";
  const el = document.getElementById("loader-typewriter");
  let idx = 0;

  function typeWelcome() {
    if (el) {
      el.textContent = welcomeText.substring(0, idx);
      idx++;
      if (idx <= welcomeText.length) {
        setTimeout(typeWelcome, 35); // Typing speed
      } else {
        // Loader will never hide, so do nothing here
        // setTimeout(() => {
        //   document.getElementById("page-loader").classList.add("hide");
        //   setTimeout(() => {
        //     document.body.style.opacity = "1";
        //   }, 500);
        // }, 3000);
      }
    }
  }

  // Call the function to start the typewriter effect
  typeWelcome();
});