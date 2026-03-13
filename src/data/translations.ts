import { Language } from "@/components/LanguageProvider";

export const translations = {
  tr: {
    nav: {
      about: "Hakkımda",
      portfolio: "Projeler",
      contact: "İletişim",
    },
    hero: {
      greeting: "Merhaba, ben",
      role: "Full Stack Developer",
      description:
        "React, Next.js, Node.js ve Java ile ölçeklenebilir dijital ürünler tasarlıyor ve geliştiriyorum. Temiz mimariyi güçlü kullanıcı deneyimiyle birleştirerek karmaşık ihtiyaçları güvenilir ve sürdürülebilir çözümlere dönüştürmeyi seviyorum.",
    },
    about: {
      title: "Hakkımda",
      accent: "",
      educationTitle: "Eğitim",
      educationDescription:
        "Abant İzzet Baysal Üniversitesi Bilgisayar Mühendisliği bölümünden 3.4/4.0 not ortalamasıyla mezun oldum ve öncesinde İngilizce hazırlık eğitimi tamamladım.",
      focusTitle: "Profesyonel Odak",
      focusDescription:
        "React, Next.js, Node.js ve Java ile ölçeklenebilir web uygulamaları geliştiriyor; temiz kod, tekrar kullanılabilir bileşenler, API entegrasyonu ve sürdürülebilir mimariye odaklanıyorum.",
      experienceTitle: "Deneyim",
      experienceDescription:
        "Şu anda Netrisk Tech bünyesinde Full Stack Developer olarak kurumsal projeler için production seviyesinde full-stack uygulamalar ve frontend çözümleri geliştiriyorum. Daha önce Barfas'ta Junior Frontend Developer olarak çalıştım ve Code and More'da frontend stajımı tamamladım.",
      skillsTitle: "Teknik Yetkinlikler",
      skillsDescription:
        "Teknoloji yığım React.js, Next.js, Vue.js, Node.js, Java, MySQL, MongoDB, Tailwind CSS, Material UI, RTK Query, REST API'ler ve Socket.IO ile WebSocket tabanlı gerçek zamanlı çözümleri kapsıyor.",
    },
    portfolio: {
      title: "Öne Çıkan",
      accent: "Projeler",
      items: [
        {
          title: "Healthy Nutrition Map",
          desc: "Diyet planlama ve sağlıklı tarif keşfi için geliştirilmiş, birden fazla API kaynağını entegre eden interaktif bir React uygulaması.",
          devStack: "React.js, JavaScript, Bootstrap, CSS, Fetch API, Axios",
        },
        {
          title: "Film Folio",
          desc: "İzleme listeleri ve oyuncu filmografileri sunan, modern ve akıcı bir deneyim için Vite ile geliştirilmiş film ve dizi keşif platformu.",
          devStack: "React.js, Vite, Context API, Axios, Chakra UI",
        },
        {
          title: "My Portfolio",
          desc: "Projelerimi, teknik altyapımı ve deneyimimi temiz bir arayüz ve akıcı etkileşimlerle sunmak için geliştirdiğim responsive portfolyo sitesi.",
          devStack: "Next.js, Tailwind CSS, Framer Motion",
        },
      ],
      live: "Canlı",
      github: "GitHub",
    },
    skills: {
      title: "Neler Yapıyorum",
      description:
        "Frontend ve backend geliştirme süreçlerinde modern arayüzler, ölçeklenebilir API'ler ve sürdürülebilir full-stack çözümler üretiyorum.",
    },
    contact: {
      title: "İletişime Geçelim",
      description: "Mail gönder, birlikte kısa bir görüşme planlayalım.",
      firstName: "Ad",
      lastName: "Soyad",
      email: "E-posta",
      phone: "Telefon",
      message: "Mesajın",
      button: "Mesaj Gönder",
    },
  },
  en: {
    nav: {
      about: "About",
      portfolio: "Portfolio",
      contact: "Contact",
    },
    hero: {
      greeting: "Hello, I am",
      role: "Full Stack Developer",
      description:
        "I design and build scalable digital products with React, Next.js, Node.js, and Java, combining clean architecture with thoughtful user experience. I enjoy turning complex requirements into reliable, maintainable solutions that create real value.",
    },
    about: {
      title: "About",
      accent: "Me",
      educationTitle: "Education",
      educationDescription:
        "I graduated in Computer Engineering from Abant Izzet Baysal University with a 3.4/4.0 GPA after completing an English preparatory program.",
      focusTitle: "Professional Focus",
      focusDescription:
        "I build scalable web applications with React, Next.js, Node.js, and Java, with a strong focus on clean code, reusable components, API integration, and maintainable architecture.",
      experienceTitle: "Experience",
      experienceDescription:
        "I am currently working as a Full Stack Developer at Netrisk Tech, building production-level full-stack applications and frontend solutions for enterprise projects. Before that, I worked at Barfas as a Junior Frontend Developer and completed my frontend internship at Code and More.",
      skillsTitle: "Technical Skills",
      skillsDescription:
        "My stack includes React.js, Next.js, Vue.js, Node.js, Java, MySQL, MongoDB, Tailwind CSS, Material UI, RTK Query, REST APIs, and real-time features with Socket.IO and WebSocket.",
    },
    portfolio: {
      title: "Selected",
      accent: "Projects",
      items: [
        {
          title: "Healthy Nutrition Map",
          desc: "An interactive React application for diet planning and healthy recipe discovery, integrating multiple API data sources for a practical and engaging nutrition experience.",
          devStack: "React.js, JavaScript, Bootstrap, CSS, Fetch API, Axios",
        },
        {
          title: "Film Folio",
          desc: "A Vite-powered movie and TV show discovery platform featuring watchlists and actor filmographies, designed to deliver a smooth and modern browsing experience.",
          devStack: "React.js, Vite, Context API, Axios, Chakra UI",
        },
        {
          title: "My Portfolio",
          desc: "A responsive portfolio website built to showcase my projects, technical background, and experience with a clean interface and smooth interactions.",
          devStack: "Next.js, Tailwind CSS, Framer Motion",
        },
      ],
      live: "Live",
      github: "GitHub",
    },
    skills: {
      title: "What I Do",
      description:
        "I work across frontend and backend development, building modern interfaces, scalable APIs, and maintainable full-stack solutions.",
    },
    contact: {
      title: "Let's connect",
      description: "Send me a mail and let's schedule a call!",
      firstName: "First Name",
      lastName: "Last Name",
      email: "Email",
      phone: "Phone",
      message: "Your Message",
      button: "Send Message",
    },
  },
} as const;

export function getTranslations(language: Language) {
  return translations[language];
}
