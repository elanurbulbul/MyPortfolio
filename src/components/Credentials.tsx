"use client";

import { FaCertificate, FaGraduationCap, FaLanguage } from "react-icons/fa";
import { useLanguage } from "./LanguageProvider";
import { getTranslations } from "@/data/translations";

const Credentials = () => {
  const { language } = useLanguage();
  const t = getTranslations(language);

  const cards = [
    {
      title: t.credentials.educationTitle,
      icon: <FaGraduationCap aria-hidden="true" />,
      items: t.credentials.education,
    },
    {
      title: t.credentials.certificatesTitle,
      icon: <FaCertificate aria-hidden="true" />,
      items: t.credentials.certificates,
    },
    {
      title: t.credentials.languageTitle,
      icon: <FaLanguage aria-hidden="true" />,
      items: [t.credentials.language],
    },
  ];

  return (
    <section className="bg-black px-6 py-16 text-white lg:px-16 lg:py-24">
      <div className="mx-auto max-w-[1200px]">
        <h2 className="mb-10 text-center font-sans font-semibold">
          {t.credentials.title}{" "}
          <span className="text-orange-500">{t.credentials.accent}</span>
        </h2>
        <div className="grid gap-5 lg:grid-cols-3">
          {cards.map((card) => (
            <article
              key={card.title}
              className="rounded-2xl border border-white/15 bg-gradient-to-br from-white/10 to-purple-900/20 p-6"
            >
              <div className="mb-5 flex items-center gap-3 text-orange-400">
                <span className="text-3xl">{card.icon}</span>
                <h3 className="text-xl font-bold text-white">{card.title}</h3>
              </div>
              <ul className="space-y-3 text-white/70">
                {card.items.map((item) => (
                  <li key={item} className="flex gap-3 leading-7">
                    <span className="mt-[0.65rem] h-1.5 w-1.5 shrink-0 rounded-full bg-orange-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Credentials;
