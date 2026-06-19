/* ================================
   NAVIGATION SPA (Single Page App)
================================ */

/**
 * Affiche une page et masque toutes les autres.
 * @param {string} pageId - L'id de la div .page à afficher
 */
function showPage(pageId) {
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
  });

  document.getElementById(pageId).classList.add('active');

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ================================
   ANIMATION AU SCROLL (fade-up)
================================ */

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });

window.addEventListener('load', () => {
  document
    .querySelectorAll('.glass-card, .project-card, .timeline-item, .sidebar-card')
    .forEach(el => {
      el.classList.add('fade-up');
      observer.observe(el);
    });
});

/* ================================
   TRADUCTIONS (i18n)
================================ */

const i18n = {
  fr: {
    navAbout:     "À propos",
    navProjects:  "Projets",
    navExp:       "Expérience",
    navContact:   "Contact",
    badge:        "Disponible pour un stage • 2026",
    subtitle:     "Développement logiciel • Cybersécurité",
    hero:         "Étudiant à Epitech La Réunion. Je développe des applications, j'explore les systèmes informatiques et je m'intéresse particulièrement à la cybersécurité offensive et défensive.",
    projectsBtn:  "Voir mes projets",
    contactBtn:   "Me contacter",
    skills:       "Compétences",
    experience:   "Expérience",
    contact:      "Contact",
    availability: "Disponible pour un stage de juillet à décembre 2026.",
    pageTitle:    "Mathis Germanaz | Développement & Cybersécurité"
  },
  en: {
    navAbout:     "About",
    navProjects:  "Projects",
    navExp:       "Experience",
    navContact:   "Contact",
    badge:        "Available for Internship • 2026",
    subtitle:     "Software Development • Cybersecurity",
    hero:         "Student at Epitech Reunion. I develop applications, explore computer systems and have a strong interest in offensive and defensive cybersecurity.",
    projectsBtn:  "View Projects",
    contactBtn:   "Contact Me",
    skills:       "Skills",
    experience:   "Experience",
    contact:      "Contact",
    availability: "Available for an internship from July to December 2026.",
    pageTitle:    "Mathis Germanaz | Development & Cybersecurity"
  }
};

/**
 * Applique la langue choisie sur tous les éléments statiques
 * et sur les éléments portant les attributs data-fr / data-en.
 * @param {'fr'|'en'} lang
 */
function translateStatic(lang) {
  const nav = document.querySelectorAll('nav a');
  if (nav.length >= 4) {
    nav[0].textContent = i18n[lang].navAbout;
    nav[1].textContent = i18n[lang].navProjects;
    nav[2].textContent = i18n[lang].navExp;
    nav[3].textContent = i18n[lang].navContact;
  }

  document.querySelector('.badge').textContent                        = i18n[lang].badge;
  document.querySelector('.hero-subtitle').textContent                = i18n[lang].subtitle;
  document.querySelector('.hero-text').textContent                    = i18n[lang].hero;
  document.querySelector('.hero-buttons .btn-primary').textContent    = i18n[lang].projectsBtn;
  document.querySelector('.hero-buttons .btn-secondary').textContent  = i18n[lang].contactBtn;

  document.querySelector('#about .section-title').textContent      = i18n[lang].skills;
  document.querySelector('#experience .section-title').textContent  = i18n[lang].experience;
  document.querySelector('#contact .section-title').textContent     = i18n[lang].contact;
  document.querySelector('#contact p').textContent                  = i18n[lang].availability;

  document.title = i18n[lang].pageTitle;

  // Traduction via attributs data-fr / data-en
  document.querySelectorAll('[data-fr]').forEach(el => {
    el.innerHTML = lang === 'fr' ? el.dataset.fr : el.dataset.en;
  });
}

/* ================================
   INITIALISATION
================================ */

document.addEventListener('DOMContentLoaded', () => {
  let lang = 'fr';
  const btn = document.getElementById('langToggle');

  btn.addEventListener('click', () => {
    lang = lang === 'fr' ? 'en' : 'fr';
    btn.textContent = lang === 'fr' ? 'EN' : 'FR';
    translateStatic(lang);
  });
});

const spotlight = document.querySelector(".spotlight");

window.addEventListener("mousemove",(e)=>{

spotlight.style.left=e.clientX+"px";
spotlight.style.top=e.clientY+"px";

});

const counters=document.querySelectorAll(".nb");


counters.forEach(counter=>{

let target=parseInt(counter.innerText);

let n=0;

let interval=setInterval(()=>{

n++;

counter.innerText=n+"+";

if(n>=target)
clearInterval(interval);

},30);
});
