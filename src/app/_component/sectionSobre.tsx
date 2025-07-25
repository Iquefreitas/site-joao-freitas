"use client";

export function SectioSobre() {
  return (
    <section id="sobre" className="w-full bg-black/40 py-20">
      {/* Separador */}
      <div className="flex items-center justify-center mb-12">
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
        <span className="mx-6 text-white font-semibold tracking-widest uppercase text-lg select-none">
          Sobre
        </span>
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
      </div>

      {/* Texto */}
      <div className="max-w-3xl mx-auto px-4 text-white text-justify leading-relaxed">
        <p>
          Sou João Freitas, desenvolvedor front-end com experiência em React, 
          Next.js, Tailwind CSS e Shadcn/UI. Tenho sólida base técnica, atuando também com WordPress, 
          Moodle, servidores VPS, redes e suporte em TI.
        </p>
        <br />
        <p>
          Durante 8 anos na ACIF, evoluí de suporte técnico a membro de SQUAD focado em automação 
          de processos. Sou autodidata, proativo e apaixonado por tecnologia, sempre em busca de 
          evolução contínua.
        </p>
      </div>
    </section>
  );
}
