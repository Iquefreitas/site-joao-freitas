import { SectionHero } from "../_component/sectionHero";
import { SectioSobre } from "../_component/sectionSobre";
import { SectionPortifolio } from "./sectionPortifolio";

export default function VideoBackground() {
  return (
    <div className="relative w-full">

      {/* Vídeo de fundo */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover z-[-2]"
      >
        <source src="/videos/mundo.mp4" type="video/mp4" />
      </video>

      {/* Overlay escuro */}
      <div className="fixed top-0 left-0 w-full h-full bg-transparent z-[-1]" />

      {/* Conteúdo: Hero + Sobre */}
      <div className="relative z-10">
        <SectionHero />
        <SectioSobre />
        <SectionPortifolio/>
      </div>
    </div>
  );
}
