import Cabecalho from "@/components/Cabecalho/Cabecalho";
import styles from "../styles/Home.module.css";
import style from "../styles/Grid.module.css";
import { FaLongArrowAltRight } from "react-icons/fa";
import { AiFillAlert } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
import Rodape from "@/components/Rodapé/Rodape";

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
            <p>
              
Doenças transmissíveis são enfermidades causadas por agentes patogênicos, como bactérias, vírus, fungos ou parasitas, que podem ser transmitidos de uma pessoa para outra. Essas doenças se espalham por meio de contato direto ou indireto, muitas vezes facilitadas por condições inadequadas de higiene e saúde pública. A disseminação pode ocorrer por gotículas no ar, contato com superfícies contaminadas e até mesmo por vetores como mosquitos. A prevenção dessas enfermidades inclui medidas simples, como lavagem das mãos, vacinação e práticas sexuais seguras. A conscientização sobre a importância da saúde pública e o acesso a cuidados médicos são essenciais para conter a propagação dessas doenças e promover comunidades mais saudáveis e resilientes. 
            </p>
          </div>
          <div className={style.grid2}>
            <p>
            Diversas doenças transmissíveis, como infeções respiratórias e gastrointestinais, além de zoonoses, são transmitidas de animais para humanos. As DSTs, incluindo HIV e outras, representam uma categoria significativa de preocupação para a saúde pública global. A prevenção é essencial para preservar a vida e promover um mundo mais saudável.
            </p>
          </div>
          <div className={style.grid3}>
            <p>
              Doenças transmissíveis contribuem para altas taxas de mortalidade
              em várias regiões do mundo. Malaria, HIV/AIDS, tuberculose e
              infecções respiratórias são responsáveis por óbitos significativos{" "}
            </p>
          </div>
          <div className={style.grid4}>
            <p>
            Diversos vírus, como HIV, influenza e coronavírus, junto com bactérias como Salmonella e Escherichia coli, são comuns e apresentam desafios para a saúde. Vetores, como mosquitos responsáveis por malária e dengue, e animais domésticos, incluindo a raiva, desempenham papéis cruciais na disseminação dessas enfermidades. A prevenção é crucial para um mundo mais saudável.
            </p>
          </div>
          <div className={style.grid5}>
  <p>
    A prevenção é fundamental para combater doenças transmissíveis.
    Medidas básicas de higiene, vacinação, uso de preservativos e
    controle de vetores são estratégias eficazes. A resposta rápida a
    surtos é crucial para conter a propagação e salvar vidas.
  </p>
</div>
<div className={style.grid6}>
  <p>
    Globalização, urbanização rápida e resistência antimicrobiana
    representam desafios contemporâneos no controle de doenças
    transmissíveis. A colaboração internacional e investimentos em
    sistemas de saúde são essenciais para enfrentar essas ameaças à
    saúde pública de maneira mais abrangente.
  </p>
</div>
<div className={style.grid7}>
  <p>
    Zoonoses são doenças infecciosas que podem ser transmitidas de
    animais para humanos. Exemplos incluem a gripe aviária, a febre do
    Nilo Ocidental e a COVID-19. Essas doenças muitas vezes surgem
    devido à proximidade entre humanos e animais, destacando a
    importância da vigilância e controle em ambientes onde ambos
    coexistem para prevenir futuros surtos.
  </p>
</div>
<div className={style.grid8}>
  Em resposta às pandemias, como a COVID-19, é essencial fortalecer a
  colaboração internacional, investir em pesquisa e desenvolver
  estratégias eficazes para lidar com a constante evolução dessas
  ameaças à saúde global. A união de esforços é vital para a
  construção de um mundo mais preparado e resiliente diante de
  desafios sanitários.
</div>

        </div>
      </section>

      <section className={styles.dicaCadastro}>
        <div className={styles.backCadastro}>
          <p className={styles.textoCadastro}>
            Acesso a dicas exclusivas, suporte direto e chats interativos.
            <Link href="/login/cadastro" className={styles.span}>
              Cadastre-se
            </Link>{" "}
            agora para conteúdos especiais e uma comunidade ativa.
          </p>
        </div>
      </section>

<Rodape></Rodape>

    </main>
  );
}
