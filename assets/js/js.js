const navToggle = document.getElementById("navToggle");
const navLinks = document.querySelector(".nav-links");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});


// Simpele submit feedback (zonder echte backend)
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

if (contactForm && formStatus) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = contactForm.name.value.trim();

    formStatus.textContent = `Bedankt${name ? ", " + name : ""}! Je bericht is (fictief) verstuurd.`;
    contactForm.reset();

    setTimeout(() => {
      formStatus.textContent = "";
    }, 4000);
  });
}

const cursor = document.querySelector('.cursor-effect');

  document.addEventListener('mousemove', (e) => {
    // Update de positie van de div naar de muispositie
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
  });

