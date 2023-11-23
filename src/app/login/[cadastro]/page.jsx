import Link from "next/link";
import styles from "../../../styles/Login.module.css";

export default function Cadastro() {
  return (
    <main className={styles.container}>
      <div>
        <form className={styles.form} action="">
          <legend>CADASTRO</legend>

          <div className={styles.inputForm}>

          <div className={styles.inputGroup}>
              <label htmlFor="email">Nome</label>
              <input type="text" id="email" name="email" required />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="tel">Telefone</label>
              <input type="text" id="email" name="email" required />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="email">email</label>
              <input type="text" id="email" name="email" required />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="senha">Senha</label>
              <input type="password" id="senha" name="senha" required />
            </div>
          </div>

          <button>Cadastrar</button>

          <div className={styles.semCadastro}>
            <p>
              Tem conta? <Link className={styles.btnCadastro} href="/login/">Faça o login</Link>
            </p>
          </div>
        </form>
      </div>
    </main>
  );
}

