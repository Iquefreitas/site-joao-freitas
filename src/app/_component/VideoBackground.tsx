import { SectionHero } from "../_component/sectionHero";
import { SectioSobre } from "../_component/sectionSobre";
import { SectionPortifolio } from "./sectionPortifolio";

export default function VideoBackground() {
  return (
    <div className="relative w-full">

      {/* Vídeo de fundo com suporte a Safari */}
      <video
        autoPlay
        muted 
        loop
        playsInline
        preload="auto"
        className="fixed top-0 left-0 w-full h-full object-cover z-[-2]"
      >
        <source src="/videos/mundo.mp4" type="video/mp4" />
        Seu navegador não suporta vídeo em HTML5.
      </video>

      {/* Overlay escuro (transparente, mas pode adicionar opacidade se quiser escurecer o vídeo) */}
      <div className="fixed top-0 left-0 w-full h-full bg-transparent z-[-1]" />

      {/* Conteúdo do site sobreposto ao vídeo */}
      <div className="relative z-10">
        <SectionHero />
        <SectioSobre />
        <SectionPortifolio />
      </div>
    </div>
  );
}
