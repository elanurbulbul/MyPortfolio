import { Language } from "@/components/LanguageProvider";

export const translations = {
  tr: {
    nav: {
      about: "Hakkımda",
      experience: "Deneyim",
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
        "Şu anda Netrisk Tech bünyesinde Full Stack Developer olarak kurumsal projeler için production seviyesinde full-stack uygulamalar geliştiriyorum. Öncesinde Barfas'ta Frontend Developer olarak çalıştım ve Code and More'da frontend stajımı tamamladım.",
      skillsTitle: "Teknik Yetkinlikler",
      skillsDescription:
        "Teknoloji yığım React.js, Next.js, Vue.js, Node.js, Java, MySQL, MongoDB, Tailwind CSS, Material UI, RTK Query, REST API'ler ve Socket.IO ile WebSocket tabanlı gerçek zamanlı çözümleri kapsıyor.",
    },
    experience: {
      title: "İş",
      accent: "Deneyimi",
      description:
        "Kurumsal ürünlerden gerçek zamanlı sistemlere kadar farklı ölçeklerde, kullanıcı odaklı ve sürdürülebilir çözümler geliştiriyorum.",
      items: [
        {
          company: "Netrisk Tech",
          role: "Full Stack Developer",
          period: "Şubat 2025 – Günümüz",
          highlights: [
            "React.js, Node.js ve Java ile production seviyesinde web uygulamaları geliştirdim ve yayına aldım.",
            "Socket.IO kullanan şirket içi gerçek zamanlı iletişim uygulaması ile MySQL ve MongoDB tabanlı full-stack projeler geliştirdim.",
            "Sağlık Bakanlığı projesinde React, Vite, Tailwind CSS, Material UI ve RTK Query ile arayüz ve REST API entegrasyonları geliştirdim.",
            "Java tabanlı admin panelinin frontend geliştirmesine liderlik ettim; Next.js ile form sayfalarını yeniledim ve SQL sorguları geliştirdim.",
          ],
          technologies:
            "React.js · Next.js · Node.js · Vue.js · Java · MySQL · MongoDB · Socket.IO · RTK Query",
        },
        {
          company: "Barfas",
          role: "Frontend Developer",
          period: "Temmuz 2024 – Aralık 2024",
          highlights: [
            "React.js, WebSocket, Konva.js ve Material UI ile RTLS projesinin frontend geliştirmesine liderlik ettim.",
            "TÜBİTAK destekli bir yapay zekâ girişimi dahil olmak üzere kurumsal projeler için admin panelleri geliştirdim.",
            "Figma ile mobil arayüzler tasarladım, seçili ekranları React Native ile geliştirdim; .NET Core MVC, Node.js ve SQL tabanlı projelere katkı sundum.",
          ],
          technologies:
            "React.js · Node.js · Material UI · WebSocket · Konva.js · Chart.js · SQL · Redux",
        },
        {
          company: "Code and More",
          role: "Frontend Developer Intern",
          period: "Ocak 2024 – Nisan 2024",
          highlights: [
            "React.js ve Redux ile responsive admin panelleri ve müşteri odaklı arayüzler geliştirdim.",
            "CarrefourSA B2B ve Yatırımcı İlişkileri projelerinde REST API entegrasyonu ve i18n desteği üzerinde çalıştım.",
            "EasyFishoil arayüzünü Bootstrap ve AJAX ile geliştirdim; kod ve görsel optimizasyonlarıyla performansı iyileştirdim.",
          ],
          technologies:
            "React.js · Redux · JavaScript · Bootstrap · Sass · jQuery · AJAX · REST API · i18n",
        },
      ],
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
      title: "Teknik Yetkinlikler",
      description:
        "Frontend ve backend geliştirme süreçlerinde modern arayüzler, ölçeklenebilir API'ler ve sürdürülebilir full-stack çözümler üretiyorum.",
      groups: [
        {
          title: "Programlama Dilleri",
          items: "JavaScript, TypeScript, Java, C#, SQL",
        },
        {
          title: "Frontend",
          items:
            "React.js, Next.js, Vue.js, React Native, HTML5, CSS3, Tailwind CSS, Material UI",
        },
        {
          title: "Backend & Veri",
          items:
            "Node.js, Java / Spring tabanlı servisler, REST API, MySQL, MongoDB",
        },
        {
          title: "Prensipler & Araçlar",
          items:
            "OOP, SOLID, Algoritmalar, Git, GitHub, VS Code, IntelliJ IDEA",
        },
      ],
    },
    credentials: {
      title: "Eğitim &",
      accent: "Gelişim",
      educationTitle: "Eğitim",
      education: [
        "Bilgisayar Mühendisliği Lisans — Abant İzzet Baysal Üniversitesi, 2019–2024 (GNO: 3.4/4.0)",
        "İngilizce Hazırlık — Abant İzzet Baysal Üniversitesi, 2019",
      ],
      certificatesTitle: "Sertifikalar",
      certificates: [
        "Komple Uygulamalı Web Geliştirme Eğitimi — .NET / Can Boz, Udemy",
        "The Complete 2023 Web Development Bootcamp — Dr. Angela Yu, Udemy (Devam ediyor)",
        "React ile Web Programcılığı — BTK Akademi (Devam ediyor)",
        "JavaScript — BTK Akademi",
      ],
      languageTitle: "Yabancı Dil",
      language: "İngilizce — B1 Orta Seviye",
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
      experience: "Experience",
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
        "I am currently working as a Full Stack Developer at Netrisk Tech, building production-level full-stack applications for enterprise projects. Before that, I worked at Barfas as a Frontend Developer and completed my frontend internship at Code and More.",
      skillsTitle: "Technical Skills",
      skillsDescription:
        "My stack includes React.js, Next.js, Vue.js, Node.js, Java, MySQL, MongoDB, Tailwind CSS, Material UI, RTK Query, REST APIs, and real-time features with Socket.IO and WebSocket.",
    },
    experience: {
      title: "Work",
      accent: "Experience",
      description:
        "I build user-focused, maintainable solutions across different scales, from enterprise products to real-time systems.",
      items: [
        {
          company: "Netrisk Tech",
          role: "Full Stack Developer",
          period: "February 2025 – Present",
          highlights: [
            "Developed and deployed production-level web applications using React.js, Node.js, and Java.",
            "Built an internal real-time communication app with Socket.IO and full-stack projects backed by MySQL and MongoDB.",
            "Developed UI features and REST API integrations for a Ministry of Health project using React, Vite, Tailwind CSS, Material UI, and RTK Query.",
            "Led frontend development of a Java-based admin panel, migrated form pages to Next.js, and developed SQL queries.",
          ],
          technologies:
            "React.js · Next.js · Node.js · Vue.js · Java · MySQL · MongoDB · Socket.IO · RTK Query",
        },
        {
          company: "Barfas",
          role: "Frontend Developer",
          period: "July 2024 – December 2024",
          highlights: [
            "Led frontend development of an RTLS project using React.js, WebSocket, Konva.js, and Material UI.",
            "Developed admin panels for enterprise projects, including a TÜBİTAK-supported AI initiative.",
            "Designed mobile interfaces in Figma, implemented selected screens with React Native, and contributed to .NET Core MVC, Node.js, and SQL projects.",
          ],
          technologies:
            "React.js · Node.js · Material UI · WebSocket · Konva.js · Chart.js · SQL · Redux",
        },
        {
          company: "Code and More",
          role: "Frontend Developer Intern",
          period: "January 2024 – April 2024",
          highlights: [
            "Built responsive admin panels and client-facing interfaces with React.js and Redux.",
            "Worked on REST API integrations and i18n support for CarrefourSA B2B and Investor Relations projects.",
            "Developed the EasyFishoil interface with Bootstrap and AJAX, improving performance through code and image optimization.",
          ],
          technologies:
            "React.js · Redux · JavaScript · Bootstrap · Sass · jQuery · AJAX · REST API · i18n",
        },
      ],
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
      title: "Technical Skills",
      description:
        "I work across frontend and backend development, building modern interfaces, scalable APIs, and maintainable full-stack solutions.",
      groups: [
        {
          title: "Programming Languages",
          items: "JavaScript, TypeScript, Java, C#, SQL",
        },
        {
          title: "Frontend",
          items:
            "React.js, Next.js, Vue.js, React Native, HTML5, CSS3, Tailwind CSS, Material UI",
        },
        {
          title: "Backend & Data",
          items:
            "Node.js, Java / Spring-based services, REST APIs, MySQL, MongoDB",
        },
        {
          title: "Principles & Tools",
          items:
            "OOP, SOLID, Algorithms, Git, GitHub, VS Code, IntelliJ IDEA",
        },
      ],
    },
    credentials: {
      title: "Education &",
      accent: "Growth",
      educationTitle: "Education",
      education: [
        "B.Sc. in Computer Engineering — Abant Izzet Baysal University, 2019–2024 (GPA: 3.4/4.0)",
        "English Preparatory Program — Abant Izzet Baysal University, 2019",
      ],
      certificatesTitle: "Certificates",
      certificates: [
        "Complete Practical Web Development Training — .NET / Can Boz, Udemy",
        "The Complete 2023 Web Development Bootcamp — Dr. Angela Yu, Udemy (Ongoing)",
        "Web Programming with React — BTK Academy (Ongoing)",
        "JavaScript — BTK Academy",
      ],
      languageTitle: "Language",
      language: "English — B1 Intermediate",
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
