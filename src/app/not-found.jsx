import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Componentes.module.css";

export default function Not() {
  return (
    <div className={styles.fount}>
      <Image className={styles.erro} width={400} height={300} src="/img/404.png" />

      <Link className={styles.voltar} href="/">VOLTAR PARA A HOME</Link>
    </div>
  );
}