// Dictionnaire de traductions
const translations = {
  fr: {
    // Navigation
    home: "Accueil",
    about: "À propos",
    projects: "Projets",
    skills: "Compétences",
    footer_follow: "Retrouvez-moi sur :",
    language: "Langue",
    
    // Projets
    projects_title: "Mes Projets",
    portfolio_title: "Portfolio Web",
    portfolio_desc: "Site personnel développé en HTML, CSS et JavaScript, avec navigation fluide et design responsive.",
    view_project: "Voir le projet",
    mortgage_title: "Calculateur de prêt hypotécaire",
    mortgage_desc: "Calculateur de prêt hypothécaire développé en HTML, CSS et JavaScript. Il calcule automatiquement le paiement mensuel estimé.",
    qcm_title: "QCM avec Python sur Python",
    qcm_desc: "QCM codé en Python avec vingt questions portant sur python et donnant une note à la fin.",
    stdh_title: "StudentHub",
    stdh_desc: "Plateforme web pour la gestion des cours des étudiants, développée avec Node.js, Laravel et JavaScript. Interface intuitive pour suivre et organiser les apprentissages.",
    
    // À propos
    about_title: "À propos",
    about_intro: "Je m'appelle <span class='prenom'>Alex</span>, je suis étudiant en Intelligence Artificielle et Big Data. Je suis passionné par le développement web, le design, l'Intelligence Artificielle et tout ce qui touche à la technologie. J'aime créer des sites web attrayants et fonctionnels, et je suis toujours à la recherche de nouvelles opportunités pour apprendre et grandir dans ce domaine en constante évolution.",
    download_cv: "Télécharger mon CV",
    professional_objective: "Objectif Professionnel",
    objective_text: "Devenir ingénieur en IA et Big Data, spécialisé dans la conception et le déploiement de modèles intelligents pour l'analyse de données, l'automatisation et la reconnaissance visuelle.",
    certifications: "Certifications",
    first_aid: "Premiers secours à base communautaire",
    it_english: "Initiation à l'informatique et Anglais pratique",
    universal_acceptance: "Journée de l'acceptation universelle",
    web_beginner: "Développement Web – Niveau Débutant",
    web_intermediate: "Développement Web – Niveau Intermédiaire",
    web_advanced: "Développement Web – Niveau Avancé",
    interests: "Centres d'Intérêt",
    interests_text: "Technologies du numérique, IA, Mathématiques, innovation sociale.",
    hobbies: "Loisirs",
    hobbies_text: "Basketball, Films, Séries et animes, Lecture, Jeux vidéos.",
    academic_formation: "Formation Académique",
    social_commitments: "Engagements et Œuvres Sociales",
    current: "(en cours)",
    present: "(présent)",
    red_cross_member: "Membre Croix Rouge Togolaise",
    isoc_member: "Membre Internet Society Chapitre Togolais",
    blood_donor: "Donneur volontaire de sang",
    
    // Compétences
    skills_title: "Mes Compétences",
    soft_skills: "Soft Skills",
    hard_skills: "Hard Skills",
    languages: "Langages",
    frameworks: "Frameworks / Outils Web",
    tools: "Outils",
    rigor: "Rigueur académique",
    organization: "Organisation logique",
    analysis: "Analyse critique",
    communication: "Communication technique",
    python: "Programmation Python",
    c_lang: "Programmation C",
    java: "Programmation Java",
    php: "PHP",
    sql: "SQL",
    web_dev: "Développement Web",
    react: "React",
    laravel: "Laravel",
    github: "GitHub",
    vscode: "VS Code",
    wordpress: "WordPress",
    latex: "LaTeX",
    arduino: "Arduino",
    overleaf: "Overleaf",
    bepc: "Brevet d'Études du Premier Cycle",
    university_lome: "Université de Lomé – École polytechnique de Lomé (Université de Lomé)",
    professional_objective: "Objectif Professionnel",
    objective_text: "Devenir ingénieur en IA et Big Data, spécialisé dans la conception et le déploiement de modèles intelligents pour l'analyse de données, l'automatisation et la reconnaissance visuelle.",
    certifications: "Certifications",
    interests: "Centres d'Intérêt",
    interests_text: "Technologies du numérique, IA, Mathématiques, innovation sociale.",
    hobbies: "Loisirs",
    hobbies_text: "Basketball, Films, Séries et animes, Lecture, Jeux vidéos.",
  },
  en: {
    // Navigation
    home: "Home",
    about: "About",
    projects: "Projects",
    skills: "Skills",
    footer_follow: "Follow me on:",
    language: "Language",
    
    // Index
    hero_title: "I'm <span class='prenom'>Alex</span>, a student in AI and Big Data beginning in web development. I'm passionate about the web, design, Artificial Intelligence and everything related to tech!",
    view_projects: "View my projects",
    
    // Projects
    projects_title: "My Projects",
    portfolio_title: "Web Portfolio",
    portfolio_desc: "Personal website developed in HTML, CSS and JavaScript, with smooth navigation and responsive design.",
    view_project: "View project",
    mortgage_title: "Mortgage Calculator",
    mortgage_desc: "Mortgage calculator developed in HTML, CSS and JavaScript. It automatically calculates the estimated monthly payment.",
    qcm_title: "Python QCM on Python",
    qcm_desc: "QCM coded in Python with twenty questions about Python and giving a grade at the end.",
    stdh_title: "StudentHub",
    stdh_desc: "Web platform for managing student courses, developed with Node.js, Laravel and JavaScript. Intuitive interface to track and organize learning.",
    
    // About
    about_title: "About",
    about_intro: "My name is <span class='prenom'>Alex</span>, I'm a student in Artificial Intelligence and Big Data. I'm passionate about web development, design, Artificial Intelligence and everything related to technology. I love creating attractive and functional websites, and I'm always looking for new opportunities to learn and grow in this constantly evolving field.",
    download_cv: "Download my CV",
    professional_objective: "Professional Objective",
    objective_text: "Become an AI and Big Data engineer, specialized in the design and deployment of intelligent models for data analysis, automation and visual recognition.",
    certifications: "Certifications",
    first_aid: "Community-based first aid",
    it_english: "Introduction to IT and Practical English",
    universal_acceptance: "Universal Acceptance Day",
    web_beginner: "Web Development – Beginner Level",
    web_intermediate: "Web Development – Intermediate Level",
    web_advanced: "Web Development – Advanced Level",
    interests: "Interests",
    interests_text: "Digital technologies, AI, Mathematics, social innovation.",
    hobbies: "Hobbies",
    hobbies_text: "Basketball, Movies, Series and anime, Reading, Video games.",
    academic_formation: "Academic Formation",
    social_commitments: "Social Commitments and Works",
    current: "(current)",
    present: "(present)",
    red_cross_member: "Togolese Red Cross Member",
    isoc_member: "Internet Society Togolese Chapter Member",
    blood_donor: "Voluntary Blood Donor",
    
    // Academic details
    licence_degree: "Fundamental Degree in Artificial Intelligence, Big Data",
    serie_c_bac: "Series C – Baccalaureate Fair Mention (Science Mathematics)",
    bepc_mention: "BEPC Very Good Mention",
    languages_section: "Languages",
    french_native: "French: Native",
    english_b2: "English: B2",
    moba_local: "Moba: Local language",
    
    // Skills
    skills_title: "My Skills",
    soft_skills: "Soft Skills",
    hard_skills: "Hard Skills",
    languages: "Languages",
    frameworks: "Frameworks / Web Tools",
    tools: "Tools",
    rigor: "Academic Rigor",
    organization: "Logical Organization",
    analysis: "Critical Analysis",
    communication: "Technical Communication",
    python: "Python Programming",
    c_lang: "C Programming",
    java: "Java Programming",
    php: "PHP",
    sql: "SQL",
    wordpress: "WordPress",
    latex: "LaTeX",
    arduino: "Arduino",
    overleaf: "Overleaf",
    react: "React",
    laravel: "Laravel",
    github: "GitHub",
    vscode: "VS Code",
    bepc: "Junior Secondary School Certificate",
    university_lome: "University of Lomé – École Polytechnique de Lomé (University of Lomé)",
  },
  ru: {
    // Navigation
    home: "Главная",
    about: "Обо мне",
    projects: "Проекты",
    skills: "Навыки",
    footer_follow: "Найдите меня в:",
    language: "Язык",
    
    // Index
    hero_title: "Я <span class='prenom'>Alex</span>, студент ИИ и Big Data, начинающий веб-разработчик. Я увлечен веб-дизайном, искусственным интеллектом и всем, что связано с технологиями!",
    view_projects: "Посмотреть мои проекты",
    
    // Проекты
    projects_title: "Мои проекты",
    portfolio_title: "Веб-портфолио",
    portfolio_desc: "Личный сайт, разработанный на HTML, CSS и JavaScript, с плавной навигацией и адаптивным дизайном.",
    view_project: "Посмотреть проект",
    mortgage_title: "Калькулятор ипотечного кредита",
    mortgage_desc: "Калькулятор ипотечного кредита, разработанный на HTML, CSS и JavaScript. Он автоматически рассчитывает предполагаемый ежемесячный платеж.",
    qcm_title: "Тест по Python на Python",
    qcm_desc: "Тест, закодированный на Python с двадцатью вопросами о Python и выставлением оценки в конце.",
    stdh_title: "StudentHub",
    stdh_desc: "Веб-платформа для управления курсами студентов, разработанная с использованием Node.js, Laravel и JavaScript. Интуитивный интерфейс для отслеживания и организации обучения.",
    
    // About
    about_title: "Обо мне",
    about_intro: "Меня зовут <span class='prenom'>Alex</span>, я студент Искусственного Интеллекта и Big Data. Я увлечен веб-разработкой, дизайном, искусственным интеллектом и всем, что связано с технологией. Я люблю создавать привлекательные и функциональные веб-сайты и всегда ищу новые возможности для обучения и роста в этой постоянно развивающейся области.",
    download_cv: "Скачать мое резюме",
    professional_objective: "Профессиональная цель",
    objective_text: "Стать инженером АИ и Big Data, специализирующийся на проектировании и расположении интеллектуальных моделей для анализа данных, автоматизации и оптического распознавания.",
    certifications: "Сертификации",
    first_aid: "Первая помощь на случокском уровне",
    it_english: "Ввод в итю и Практический английский",
    universal_acceptance: "День всеобщего принятия",
    web_beginner: "Веб-развитие – Уровень Начинающих",
    web_intermediate: "Веб-развитие – Нредний уровень",
    web_advanced: "Веб-развитие – Продвинутый уровень",
    interests: "Центры интересов",
    interests_text: "Цифровые технологии, АИ, Математика, социальные инновации.",
    hobbies: "Увлечения",
    hobbies_text: "Баскетбол, Кино, Сериалы и аниме, Чтение, Видеоигры.",
    academic_formation: "Академическое образование",
    social_commitments: "Социальные обязательства и работы",
    current: "(текущее)",
    present: "(настоящее время)",
    red_cross_member: "Член Тоголезского Красного Креста",
    isoc_member: "Член Тоголезской главы Internet Society",
    blood_donor: "Добровольный донор крови",
    
    // Академические детали
    licence_degree: "Фундаментальная степень по Искусственному Интеллекту, Big Data",
    serie_c_bac: "Серия C – Бакалавриат Удовлетворительная оценка (наука математика)",
    bepc_mention: "BEPC Отличная оценка",
    languages_section: "Языки",
    french_native: "Французский: Родной",
    english_b2: "Английский: B2",
    moba_local: "Моба: Местный язык",
    skills_title: "Мои навыки",
    soft_skills: "Мягкие навыки",
    hard_skills: "Технические навыки",
    languages: "Языки программирования",
    frameworks: "Фреймворки / Веб-инструменты",
    tools: "Инструменты",
    rigor: "Академическая строгость",
    organization: "Логическая организация",
    analysis: "Критический анализ",
    communication: "Техническое общение",
    python: "Программирование на Python",
    c_lang: "Программирование на C",
    java: "Программирование на Java",
    php: "PHP",
    sql: "SQL",
    web_dev: "Веб-разработка",
    react: "React",
    laravel: "Laravel",
    github: "GitHub",
    vscode: "VS Code",
    wordpress: "WordPress",
    latex: "LaTeX",
    arduino: "Arduino",
    overleaf: "Overleaf",
    bepc: "Свидетельство о начальном образовании",
    university_lome: "Университет Ломе – Политехническая школа Ломе (Университет Ломе)",
  },
  tr: {
    // Navigation
    home: "Ana Sayfa",
    about: "Hakkında",
    projects: "Projeler",
    skills: "Beceriler",
    footer_follow: "Beni takip et:",
    language: "Dil",
    
    // Index
    hero_title: "Ben <span class='prenom'>Alex</span>, Yapay Zeka ve Big Data öğrencisi, web geliştirmeye yeni başlayan. Web tasarımı, yapay zeka ve teknolojiyle ilgili her şeyden tutkulu!",
    view_projects: "Projelerime bak",
    
    // Projeler
    projects_title: "Projelerim",
    portfolio_title: "Web Portföy",
    portfolio_desc: "HTML, CSS ve JavaScript ile geliştirilmiş kişisel web sitesi, akıcı navigasyon ve responsive tasarım ile.",
    view_project: "Projeyi gör",
    mortgage_title: "Konut Kredisi Hesaplayıcı",
    mortgage_desc: "HTML, CSS ve JavaScript ile geliştirilmiş konut kredisi hesaplayıcı. Otomatik olarak tahmini aylık ödemeyi hesaplar.",
    qcm_title: "Python Hakkında Python ile Test",
    qcm_desc: "Python ile kodlanmış, Python hakkında yirmi soru içeren ve sonunda not veren test.",
    stdh_title: "StudentHub",
    stdh_desc: "Node.js, Laravel ve JavaScript ile geliştirilen öğrenci kurslarını yönetmek için web platformu. Öğrenmeyi takip etmek ve düzenlemek için sezgisel arayüz.",
    
    // About
    about_title: "Hakkında",
    about_intro: "Adım <span class='prenom'>Alex</span>, Yapay Zeka ve Big Data öğrencisiyim. Web geliştirme, tasarım, yapay zeka ve teknolojiyle ilgili her şeyden tutkulu. Çekici ve işlevsel web siteleri oluşturmayı seviyorum ve bu sürekli gelişen alanda öğrenme ve büyüme için her zaman yeni fırsatlar arıyorum.",
    download_cv: "CV'mi İndir",
    professional_objective: "Profesyonel Hedef",
    objective_text: "Veri analizi, otomasyon ve görsel tanıma için akilli modellerin tasarlanması ve başarlanmasında uzmanlaşık YZ ve Big Data mühendisi olun.",
    certifications: "Sertifikalar",
    first_aid: "Toplum tabanlı ilkyardsın c",
    it_english: "Bilgisayara giriş ve pratik İngilizce",
    universal_acceptance: "Evrensel kabul günü",
    web_beginner: "Web Geliştirme – Başlangıç Seviyesi",
    web_intermediate: "Web Geliştirme – Orta Seviye",
    web_advanced: "Web Geliştirme – İleri Seviye",
    interests: "İlgi Alanları",
    interests_text: "Dijital teknolojiler, YZ, Matematik, sosyal inovasyon.",
    hobbies: "Hobiler",
    hobbies_text: "Basketbol, Filmler, Diziler ve anime, Okuma, Video oyunları.",
    academic_formation: "Akademik Eğitim",
    social_commitments: "Sosyal Sorumluluklar ve Çalışmalar",
    current: "(güncel)",
    present: "(şu anda)",
    red_cross_member: "Togolu Kızıl Haç Üyesi",
    isoc_member: "Internet Society Togolu Bölümü Üyesi",
    blood_donor: "Gönüllü Kan Bağışçısı",
    
    // Akademik detaylar
    licence_degree: "Yapay Zeka, Big Data Temel Lisansı",
    serie_c_bac: "C Serisi – İyi Notla Lise Diploması (Fen Matematik)",
    bepc_mention: "BEPC Çok İyi Not",
    languages_section: "Diller",
    french_native: "Fransızca: Anadil",
    english_b2: "İngilizce: B2",
    moba_local: "Moba: Yerel dil",
    skills_title: "Becerilerim",
    soft_skills: "Yumuşak Beceriler",
    hard_skills: "Teknik Beceriler",
    languages: "Programlama Dilleri",
    frameworks: "Çerçeveler / Web Araçları",
    tools: "Araçlar",
    rigor: "Akademik Titizlik",
    organization: "Mantıksal Organizasyon",
    analysis: "Eleştirel Analiz",
    communication: "Teknik İletişim",
    python: "Python Programlama",
    c_lang: "C Programlama",
    java: "Java Programlama",
    php: "PHP",
    sql: "SQL",
    wordpress: "WordPress",
    latex: "LaTeX",
    arduino: "Arduino",
    overleaf: "Overleaf",
    react: "React",
    laravel: "Laravel",
    github: "GitHub",
    vscode: "VS Code",
    bepc: "İlk Dönem Sınavı Sertifikası",
    university_lome: "Lomé Üniversitesi – Lomé Politeknik Okulu (Lomé Üniversitesi)",
  }
};

// Classe pour gérer les langues
class LanguageManager {
  constructor() {
    this.currentLanguage = this.getStoredLanguage() || 'fr';
    // Ne pas appliquer automatiquement au constructeur
  }

  getStoredLanguage() {
    return localStorage.getItem('language');
  }

  setLanguage(lang) {
    if (translations[lang]) {
      this.currentLanguage = lang;
      localStorage.setItem('language', lang);
      document.documentElement.lang = lang;
      this.applyLanguage(lang);
    }
  }

  applyLanguage(lang) {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');
      if (translations[lang][key]) {
        element.innerHTML = translations[lang][key];
      }
    });
  }

  translate(key) {
    return translations[this.currentLanguage][key] || key;
  }

  // Nouvelle méthode pour initialiser après le chargement du DOM
  initialize() {
    this.currentLanguage = this.getStoredLanguage() || 'fr';
    this.applyLanguage(this.currentLanguage);
  }
}

// Créer l'instance mais ne pas l'initialiser automatiquement
const languageManager = new LanguageManager();

// Initialiser seulement quand la page est complètement chargée
window.addEventListener('load', () => {
  languageManager.initialize();

  // Écouter les changements de langue
  const languageSelect = document.getElementById('languageSelect');
  if (languageSelect) {
    // Définir la valeur actuelle du select
    languageSelect.value = languageManager.currentLanguage;

    languageSelect.addEventListener('change', (e) => {
      const selectedLang = e.target.value;
      languageManager.setLanguage(selectedLang);
      // Mettre à jour la valeur du select après changement
      languageSelect.value = selectedLang;
    });
  }
});
