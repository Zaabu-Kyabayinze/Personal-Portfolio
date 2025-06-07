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