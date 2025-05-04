const translations = {
  "en": {
    "language-home-desc": "A Junior Full Stack Developer who currently focused on Web Development. Other than that, I also interested in UX/UI Design, Mobile and AI Development. I love to learn new things and always open to new opportunities",
    "language-about": "About Me",
    "language-about-desc": "A brief introduction about me and my interest.",
    "language-detail": "Show Detail",
    "language-more": "See More",
    "language-project": "My Projects",
    "language-project-desc": "This is some of my projects that I have done and currently working on.",
    "language-contact": "Get In Touch",
    "language-contact-desc": "Feel free to contact me if you have any questions or just want to say hi.",
    "language-about": "About Me",
    "language-about": "About Me"
  },
  "id": {
    "language-home-desc": "Seorang Full Stack Developer Junior yang saat ini fokus pada Pengembangan Web. Selain itu, saya juga tertarik pada Desain UX/UI, Pengembangan Seluler. Saya suka mempelajari hal-hal baru dan selalu terbuka terhadap peluang baru.",
    "language-about": "Tentang Saya",
    "language-about-desc": "Perkenalan singkat dan minat saya.",
    "language-detail": "Selengkapnya",
    "language-more": "Lihat Lainnya",
    "language-project": "Proyek Saya",
    "language-project-desc": "Berikut adalah beberapa proyek yang telah saya selesaikan dan sedang saya kerjakan.",
    "language-contact": "Hubungi Saya",
    "language-contact-desc": "Jangan ragu untuk menghubungi saya jika Anda memiliki pertanyaan atau hanya ingin menyapa.",
    "language-about": "Tentang Saya",
    "language-about": "Tentang Saya"
  }
};

const languageToggle = document.getElementById('language-toggle');
const languageIcon = document.getElementById('language-icon');

const flags = {
  "en": "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg",
  "id": "https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_Indonesia.svg"
};

function loadLanguage(language) {
  const translation = translations[language];
  if (translation) {
    document.querySelectorAll('[data-key]').forEach(element => {
      const key = element.getAttribute('data-key');
      if (translation[key]) {
        element.textContent = translation[key];
      }
    });
  }
}

languageToggle.addEventListener('click', () => {
  const currentLang = localStorage.getItem('preferredLanguage') || 'id';
  const newLang = currentLang === 'id' ? 'en' : 'id';
  localStorage.setItem('preferredLanguage', newLang);
  languageIcon.src = flags[newLang];
  loadLanguage(newLang);
});

const preferredLanguage = localStorage.getItem('preferredLanguage') || 'en';
languageIcon.src = flags[preferredLanguage];
loadLanguage(preferredLanguage);
