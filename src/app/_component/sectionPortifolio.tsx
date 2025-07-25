"use client";

import Image from "next/image";

export function SectionPortifolio() {
  const projects = [
    {
      title: "App Garçom",
      src: "/portifolio/appGarcomFinal.jpg",
      github: "https://github.com/Iquefreitas/app-garcon-web",
    },
    {
      title: "Micro SaaS Plataforma",
      src: "/portifolio/microSaas.jpg",
      github: "https://github.com/Iquefreitas/projeto-3",
    },
    {
      title: "Site Idem Idiomas",
      src: "/portifolio/siteIdem.jpg",
      github: "https://github.com/Iquefreitas/projeto-2",
    },    
  ];

  return (
    <section id="portfolio" className="w-full bg-black/45 px-4 py-20">
      {/* Título da seção */}
      <div className="flex items-center justify-center mb-12 max-w-4xl mx-auto">
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
        <span className="mx-6 text-white font-semibold tracking-widest uppercase text-lg select-none">
          Portfólio
        </span>
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
      </div>

      {/* Grid de projetos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
        {projects.map((project, idx) => (
          <div key={idx} className="flex flex-col items-center">
            {/* Título do projeto */}
            <h3 className="text-white text-center text-lg font-semibold mb-2">
              {project.title}
            </h3>

            {/* Imagem com link */}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group overflow-hidden rounded-lg shadow-lg relative aspect-[4/3] w-full bg-black"
            >
              <Image
                src={project.src}
                alt={project.title}
                fill
                className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-center py-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Ver no GitHub
              </div>
            </a>
          </div>
        ))}
      </div>

      {/* Descrição abaixo das imagens */}
      <p className="text-center text-white text-lg">
        Acesse os repositórios clicando nas imagens acima.
      </p>
    </section>
  );
}
