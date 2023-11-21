import Cabecalho from "@/components/Cabecalho/Cabecalho";
import styles from "../styles/Home.module.css";
import style from "../styles/Grid.module.css";
import { FaLongArrowAltRight } from "react-icons/fa";
import { AiFillAlert } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className={styles.home}>
        <div className={styles.back}>
          <Cabecalho></Cabecalho>

          <div className={styles.textos}>
            <h3 className={styles.textoPrincipal}>
              A transmissão de doenças não é inevitável. Escolhas conscientes
              hoje garantem um amanhã mais saudável para todos!
            </h3>

            <button className={styles.chamado}>
              <a href="#grid">saiba como proteger aqueles que você ama</a>
              <FaLongArrowAltRight
                className={styles.arrow}
              ></FaLongArrowAltRight>
            </button>
          </div>
        </div>
      </section>

      <section id="grid" className={style.areaDestaque}>
        <div className={style.fatos}>
          <AiFillAlert className={style.sirene} />
          <h2>Alguns fatos que você precisa se atentar</h2>
          <AiFillAlert className={style.sirene} />
        </div>

        <div className={style.gridContainer}>
          <div className={style.grid1}>
          <img src="/img/grafico1.png" alt="" />
          </div>
          <div className={style.grid2}>
          Áreas urbanas densas, como Sudeste e Nordeste, enfrentam maior incidência de doenças respiratórias no Brasil, influenciadas por poluição em locais como São Paulo e desafios socioeconômicos em certas regiões nordestinas.
          </div>
          <div className={style.grid3}>
          Previna a gripe: vacinação anual, lave as mãos, cubra nariz e boca, evite contato com doentes, limpe superfícies, adote hábitos saudáveis. Em surtos, evite aglomerações. Use máscaras em locais lotados. Consulte um profissional de saúde se necessário.
          </div>
          <div className={style.grid4}>
          Em termos de regiões mais afetadas, países com condições socioeconômicas desfavoráveis muitas vezes enfrentam maiores desafios no controle de doenças respiratórias. Áreas densamente povoadas, com acesso limitado a cuidados de saúde e infraestrutura sanitária precária, podem ser propícias para a rápida disseminação de doenças respiratórias. Além disso, surtos de doenças respiratórias são comuns em regiões onde as condições climáticas favorecem a sobrevivência e a transmissão de patógenos, tornando essas áreas mais vulneráveis.
          Estes dados sublinham a importância de esforços globais para melhorar as condições de saúde e proporcionar acesso a cuidados médicos adequados, visando reduzir a incidência e o impacto das doenças respiratórias em comunidades vulneráveis ao redor do mundo.
          </div>
          <div className={style.grid5}>
            COVID-19, influenza (gripe) e dengue são algumas das doenças
            transmissíveis mais contagiosas, impactando milhões globalmente.
          </div>
          <div className={style.grid6}>
          <img src="/img/grafico2.png" alt="" />
          </div>
          <div className={style.grid7}>
          Gripe Espanhola (1918), COVID-19 (2019), e H1N1 (2009) são notáveis pandemias respiratórias, moldando a saúde mundial e impulsionando esforços contínuos em preparação e resposta a emergências de saúde.
          </div>
          <div className={style.grid8}>
          Pneumonia e doença pulmonar obstrutiva crônica (DPOC) lideram as mortes por doenças respiratórias no mundo. A pneumonia afeta principalmente crianças e idosos, enquanto a DPOC, associada ao tabagismo, é prevalente em adultos. Essas condições ressaltam a necessidade de estratégias preventivas e acesso a cuidados médicos para reduzir a carga global dessas doenças. A conscientização sobre fatores de risco, vacinação e promoção da saúde respiratória são essenciais para mitigar essas ameaças à saúde.
          </div>
          <div className={style.grid9}>
          Ao lidar com doenças respiratórias transmissíveis, a prevenção desempenha um papel crucial na manutenção da saúde. Uma dica fundamental é praticar a higiene das mãos de maneira consistente. Lavar as mãos regularmente com água e sabão por pelo menos 20 segundos pode reduzir significativamente o risco de contrair e espalhar vírus e bactérias respiratórias. Além disso, o uso de desinfetantes para as mãos pode ser uma alternativa quando a lavagem das mãos não é imediatamente possível. Essa simples prática cotidiana é uma barreira eficaz contra várias doenças, incluindo a gripe, resfriados comuns e, mais recentemente, o coronavírus.
          </div>
        </div>
      </section>

      <section className={styles.dicaCadastro}>
        <div className={styles.backCadastro}>

          <Link href="/" className={styles.textoCadastro}>
            Acesso a dicas exclusivas, suporte direto e chats interativos.{" "}
            <Link href="/login/cadastro" className={styles.span}>Cadastre-se</Link> agora para conteúdos especiais e uma
            comunidade ativa.
          </Link>
        </div>
      </section>
      




    </main>
  );
}
