// ════════════════════════════════════════════════════
// STAR THERAPY SOLUTIONS — script.js
//
// JavaScript makes the page interactive.
// It runs AFTER the HTML loads (because the <script>
// tag is at the bottom of index.html).
// ════════════════════════════════════════════════════


// ── FEATURE 1: MOBILE HAMBURGER MENU ─────────────────
//
// On small screens the nav links are hidden.
// Clicking the ☰ button toggles them open/closed.
// ─────────────────────────────────────────────────────

// document.getElementById() searches the page for an element
// whose id="..." matches. If nothing matches, it returns null.
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');

// We check that both elements exist before adding listeners.
// This prevents crashes if the HTML ever changes.
if (navToggle && navLinks) {

  // addEventListener waits for an event ('click') then runs a function
  navToggle.addEventListener('click', function () {

    // classList.toggle adds the class if it's missing, removes if present
    // In styles.css, #navLinks.open { display: flex } makes the menu appear
    navLinks.classList.toggle('open');

  });

  // Close the menu when the user clicks any nav link
  navLinks.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      navLinks.classList.remove('open');
    });
  });

}


// ── FEATURE 2: CONTACT FORM ───────────────────────────
//
// The form uses Formspree (action= in the HTML) to send
// data to your email. This JS adds a visual confirmation
// so users know their message was sent.
//
// HOW IT WORKS:
// Formspree redirects back to your page with ?success=true
// in the URL after a successful submission.
// We check for that and show the success message.
// ─────────────────────────────────────────────────────

const successMsg = document.getElementById('successMessage');

// window.location.search is the part of the URL after the ?
// e.g. https://yoursite.com/?success=true
if (window.location.search.includes('success=true') && successMsg) {
  successMsg.style.display = 'block';

  // Scroll the success message into view smoothly
  successMsg.scrollIntoView({ behavior: 'smooth', block: 'center' });
}


// ── FEATURE 3: SMOOTH SCROLL (bonus) ─────────────────
//
// When clicking nav links like #about, the page jumps.
// This makes it scroll smoothly instead.
// ─────────────────────────────────────────────────────

document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
  anchor.addEventListener('click', function (e) {

    // href="#about" → target is the element with id="about"
    const targetId = this.getAttribute('href').slice(1);
    const target   = document.getElementById(targetId);

    if (target) {
      e.preventDefault();                     // stop the instant jump
      target.scrollIntoView({ behavior: 'smooth' });
    }

  });
});
