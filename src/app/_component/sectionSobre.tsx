"use client";

import Image from "next/image";

export function SectioSobre() {
  return (
    <section
      id="sobre"
      className="w-full bg-black/60 min-h-screen flex flex-col md:flex-row items-center justify-center px-6 py-24 gap-12"
    >
      {/* Imagem lado esquerdo (em desktop) */}
      <div className="w-full md:w-1/3 rounded-lg overflow-hidden shadow-lg max-w-[350px] mx-auto md:mx-0">
        <Image
          src="/backgroundImg/foto_perfil.png"
          alt="João Freitas"
          width={350}
          height={350}
          className="w-full h-auto object-cover"
          priority
        />
      </div>

      {/* Texto lado direito */}
      <div className="w-full md:w-2/3 max-w-3xl text-gray-300
                      flex flex-col items-center md:items-start text-center md:text-left">
        <h2 className="text-4xl font-bold mb-6 text-gray-300">Sobre Mim</h2>
        <p className="mb-6 text-lg leading-relaxed text-gray-400 max-w-xl">
          Sou João Freitas, desenvolvedor front-end com experiência em React, Next.js, Tailwind CSS e Shadcn/UI. Tenho sólida base técnica e experiência em WordPress, Moodle, servidores VPS, redes e suporte em TI.
        </p>
        <p className="mb-6 text-lg leading-relaxed text-gray-400 max-w-xl">
          Durante 8 anos na ACIF, evoluí de suporte técnico a membro de SQUAD focado em automação de processos. Sou autodidata, proativo e apaixonado por tecnologia, sempre em busca de evolução contínua.
        </p>
        <a
          href="https://drive.google.com/file/d/1Kb2x4HnV4KLuci9-nLD04gTAaNRlPCXb/view"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gray-400 hover:bg-gray-500 text-black px-6 py-3 rounded-md font-semibold transition
                     mt-4"
        >
          Ver Currículo
        </a>
      </div>
    </section>
  );
}
