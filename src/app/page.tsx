import BackgroundPage from "./_component/backgroundPage";
import { Footer } from "../app/_component/footer";
import { SectionHero } from "../app/_component/sectionHero";
import { SectioSobre } from "../app/_component/sectionSobre";
import { SectionPortifolio } from "../app/_component/sectionPortifolio";

export default function Home() {
  return (
    <main className="relative text-white">
      <BackgroundPage />

      {/* Conteúdo por cima do fundo */}
      <SectionHero />
      <SectioSobre />
      <SectionPortifolio />
      
    </main>
  );
}
