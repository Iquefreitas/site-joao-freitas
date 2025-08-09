
import BackgroundPage from "./_component/backgroundPage";
import { Footer } from "../app/_component/footer";
import { SectionHero } from "../app/_component/sectionHero";
import { SectioSobre } from "../app/_component/sectionSobre";
import { SectionPortifolio } from "../app/_component/sectionPortifolio";
import { FadeInWhenVisible } from "./_component/fadeInWhenVisible";

export default function Home() {
  return (
    <main className="relative text-white">     
      <BackgroundPage />  
      <FadeInWhenVisible>
        <SectionHero />
      </FadeInWhenVisible>

      <FadeInWhenVisible delay={0.4}>
        <SectioSobre />
      </FadeInWhenVisible>

      <FadeInWhenVisible delay={0.4}>
        <SectionPortifolio />
      </FadeInWhenVisible>      
    </main>
  );
}

