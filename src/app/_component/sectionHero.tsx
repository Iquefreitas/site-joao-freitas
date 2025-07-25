"use client";

import Image from "next/image";

import IconHtml5 from "../../../public/icons/html5-original.svg";
import IconCss3 from "../../../public/icons/css3-original.svg";
import IconJs from "../../../public/icons/javascript-plain.svg";
import IconType from "../../../public/icons/typescript-plain.svg";
import IconReact from "../../../public/icons/react-original-wordmark.svg";
import IconNext from "../../../public/icons/nextjs-plain.svg";
import IconNode from "../../../public/icons/nodejs-plain-wordmark.svg";
import IconPost from "../../../public/icons/postgresql-original.svg";
import IconPrisma from "../../../public/icons/prisma-original.svg";
import IconGit from "../../../public/icons/git-original.svg";

const icons = [
  IconHtml5,
  IconCss3,
  IconJs,
  IconType,
  IconReact,
  IconNext,
  IconNode,
  IconPost,
  IconPrisma,
  IconGit,
];

export function SectionHero() {
  return (
    <section id="inicio" className="w-full min-h-screen flex flex-col justify-center items-center px-6 bg-black/30 rounded-md shadow-md pt-40">
      <h1 className="text-1xl md:text-5xl font-extrabold text-white mb-6 text-center">
        Front-end developer
        <span className="block text-6xl md:text-9xl text-gradient-animated mt-6">
          João Freitas
        </span>
      </h1>

      {/* Ícones */}
      <div className="flex justify-center flex-wrap gap-8 mt-10 mb-24">
        {icons.map((Icon, idx) => {
          const isNext = Icon === IconNext;
          return (
            <div
              key={idx}
              className="w-10 h-10 md:w-16 md:h-16 flex items-center justify-center rounded-lg transition-transform duration-300 hover:scale-110 animate-floating text-white"
            >
              {isNext ? (
                <Icon className="w-full h-full fill-white" />
              ) : (
                <Icon className="w-full h-full fill-current" />
              )}
            </div>
          );
        })}
      </div>

      {/* Botões */}
      <div className="flex flex-wrap justify-center gap-6 mb-20">
        <a
          href="https://drive.google.com/file/d/1Kb2x4HnV4KLuci9-nLD04gTAaNRlPCXb/view?usp=sharing"
          download
          className="border border-white text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-white hover:text-black transition-colors duration-300 text-lg"
        >
          Currículo
        </a>
        <a
          href="https://github.com/Iquefreitas"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-white text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-white hover:text-black transition-colors duration-300 text-lg"
        >
          GitHub
        </a>
        <a
          href="https://wa.me/5548991062262?text=Olá%2C%20gostaria%20de%20falar%20com%20você..."
          target="_blank"
          rel="noopener noreferrer"
          className="border border-white text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-white hover:text-black transition-colors duration-300 text-lg"
        >
          Contato
        </a>
      </div>

      <style jsx>{`
        @keyframes floating {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-6px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        .animate-floating {
          animation: floating 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
