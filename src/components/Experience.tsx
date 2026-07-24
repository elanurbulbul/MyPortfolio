"use client";

import { motion } from "framer-motion";
import { useLanguage } from "./LanguageProvider";
import { getTranslations } from "@/data/translations";

const Experience = () => {
  const { language } = useLanguage();
  const t = getTranslations(language);

  return (
    <section
      id="experience"
      className="bg-gradient-to-b from-black via-[#160d29] to-black py-16 lg:py-24 text-white"
    >
      <div className="mx-auto max-w-[1200px] px-6 lg:px-16">
        <h2 className="text-center font-sans font-semibold">
          {t.experience.title}{" "}
          <span className="text-orange-500">{t.experience.accent}</span>
        </h2>
        <p className="mx-auto mb-12 mt-4 max-w-[760px] text-center text-lg leading-8 text-white/65">
          {t.experience.description}
        </p>

        <div className="relative space-y-6 before:absolute before:bottom-5 before:left-[7px] before:top-5 before:w-px before:bg-gradient-to-b before:from-orange-400 before:via-purple-500 before:to-transparent md:before:left-1/2">
          {t.experience.items.map((item, index) => (
            <motion.article
              key={item.company}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className={`relative ml-8 rounded-2xl border border-white/15 bg-white/[0.07] p-6 backdrop-blur-sm md:ml-0 md:w-[calc(50%-2rem)] ${
                index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
              }`}
            >
              <span
                className={`absolute top-8 h-4 w-4 rounded-full border-4 border-black bg-orange-400 ${
                  index % 2 === 0
                    ? "-left-[2.08rem] md:-right-[2.55rem] md:left-auto"
                    : "-left-[2.08rem] md:-left-[2.55rem]"
                }`}
              />
              <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {item.company}
                  </h3>
                  <p className="font-semibold text-orange-400">{item.role}</p>
                </div>
                <p className="shrink-0 text-sm text-white/55">{item.period}</p>
              </div>
              <ul className="space-y-2 text-white/70">
                {item.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3 leading-7">
                    <span className="mt-[0.65rem] h-1.5 w-1.5 shrink-0 rounded-full bg-purple-400" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 border-t border-white/10 pt-4 text-sm font-medium leading-6 text-orange-300/90">
                {item.technologies}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
