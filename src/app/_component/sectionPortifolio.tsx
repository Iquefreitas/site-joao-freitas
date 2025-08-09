"use client";

import Image from "next/image";

export function SectionPortifolio() {
  const projects = [
    {
      title: "App Garçom",
      src: "/portifolio/appGarcomFinal.jpg",
      github: "https://github.com/Iquefreitas/app-garcon-web",
      description: "Aplicativo para gerenciamento de pedidos de garçons em restaurantes.",
      tech: ["React", "TypeScript", "Node.js"],
    },
    {
      title: "Micro SaaS Plataforma",
      src: "/portifolio/microSaas.jpg",
      github: "https://github.com/Iquefreitas/projeto-3",
      description: "Plataforma SaaS para gestão de pequenas empresas.",
      tech: ["Next.js", "Tailwind CSS", "Prisma"],
    },
    {
      title: "Site Idem Idiomas",
      src: "/portifolio/siteIdem.jpg",
      github: "https://idemidiomas.vercel.app/",
      description: "Site institucional para escola de idiomas com design responsivo.",
      tech: ["Next.js", "React", "Framer Motion"],
    },
  ];

  return (
    <section
      id="portfolio"
      className="w-full bg-black/60 px-6 min-h-screen flex flex-col justify-center items-center py-12 md:py-20"
    >
      {/* Título da seção */}
      <div className="flex items-center justify-center mb-12 max-w-4xl w-full">
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent" />
        <span className="mx-6 text-gray-400 font-semibold tracking-widest uppercase text-4xl select-none">
          Portfólio
        </span>
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent" />
      </div>

      {/* Grid de projetos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl w-full mb-8">
        {projects.map(({ title, src, github, description, tech }, idx) => (
          <a
            key={idx}
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-black/80 flex flex-col"
          >
            <div className="relative w-full aspect-[4/3]">
              <Image
                src={src}
                alt={title}
                fill
                className="object-cover object-center transition-transform duration-300 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>

            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-gray-300 text-center text-xl font-bold mb-2">{title}</h3>
              <p className="text-gray-200 text-center text-sm mb-3 flex-grow">{description}</p>
              {tech && (
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs text-gray-400 border border-gray-400 rounded px-2 py-1 select-none cursor-default"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}

              <div className="text-center">
                <span className="inline-block bg-gray-400 hover:bg-gray-500 text-black px-4 py-2 rounded cursor-pointer select-none transition">
                  Ver no GitHub
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Descrição abaixo das imagens */}
      <p className="text-center text-gray-300 text-base md:text-lg max-w-4xl">
        Acesse os repositórios clicando nas imagens acima.
      </p>
    </section>
  );
}
