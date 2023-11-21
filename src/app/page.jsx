import Cabecalho from "@/components/Cabecalho/Cabecalho";
import styles from "../styles/Home.module.css";
import style from "../styles/Grid.module.css";
import { FaLongArrowAltRight } from "react-icons/fa";
import { AiFillAlert } from "react-icons/ai";

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
              <p>saiba como proteger aqueles que você ama</p>
              <FaLongArrowAltRight
                className={styles.arrow}
              ></FaLongArrowAltRight>
            </button>
          </div>
        </div>
      </section>

      <section className={style.areaDestaque}>
        <div className={style.fatos}>
          <AiFillAlert className={style.sirene} />
          <h2>Alguns fatos que você precisa se atentar</h2>
          <AiFillAlert className={style.sirene} />
        </div>

        <div className={style.gridContainer}>
          <div className={style.grid1}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consectetur rerum ducimus, aliquid optio minus nostrum doloremque
            magnam incidunt autem tempore nam perferendis magni eius! Harum
            deserunt optio voluptatum eius. Reprehenderit!
          </div>
          <div className={style.grid2}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi unde
            minus enim eius dolorem libero ut velit porro eveniet distinctio nam
            vitae nisi quaerat, quos est. Aperiam inventore magni
            necessitatibus!
          </div>
          <div className={style.grid3}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Perferendis laudantium natus pariatur explicabo, eius amet obcaecati
            architecto, sunt maiores, aperiam dignissimos. Exercitationem
            architecto officia pariatur magnam quia cum et libero.
          </div>
          <div className={style.grid4}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            ullam ad laboriosam expedita eum consectetur rem perspiciatis,
            quisquam temporibus commodi in minima. Dolorum libero eum itaque
            dolores, earum totam quas.
          </div>
          <div className={style.grid5}>
            COVID-19, influenza (gripe) e dengue são algumas das doenças
            transmissíveis mais contagiosas, impactando milhões globalmente.
          </div>
          <div className={style.grid6}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique
            sapiente eum odio veniam, quidem non provident repudiandae fuga!
            Totam quidem consectetur animi ipsa corrupti perspiciatis. Rem,
            atque asperiores. Rem, culpa?
          </div>
          <div className={style.grid7}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            delectus quis assumenda sit numquam optio autem fugit vel atque? Ex
            quae, voluptatibus minus eum sint soluta eveniet facere numquam
            accusantium.
          </div>
          <div className={style.grid8}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Repellendus incidunt perspiciatis iusto porro. Quidem iusto ut id,
            cumque vel omnis fugiat inventore facilis! Dolorem quaerat, officia
            distinctio quibusdam corporis voluptas!
          </div>
          <div className={style.grid9}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            error cum fuga. Iusto amet, assumenda, a commodi doloremque nobis
            suscipit nam sequi velit, officia odit ad non reprehenderit
            aspernatur ut.
          </div>
        </div>
      </section>

      <section className={styles.dicaCadastro}>
        <div className={styles.backCadastro}>
          <h3 className={styles.textoCadastro}>
            Acesso a dicas exclusivas, suporte direto e chats interativos.{" "}
            <span>Cadastre-se</span> agora para conteúdos especiais e uma
            comunidade ativa.
          </h3>
        </div>
      </section>
      
    </main>
  );
}
