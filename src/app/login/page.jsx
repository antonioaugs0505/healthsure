import Link from "next/link";
import styles from "../../styles/Login.module.css";

export default function Login() {
  return (
    <main className={styles.container}>
      <div>
        <form className={styles.form} action="">
          <legend>LOGIN</legend>

          <div className={styles.inputForm}>
            <div className={styles.inputGroup}>
              <label htmlFor="email">email</label>
              <input type="email" id="email" name="email" required />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="senha">Senha</label>
              <input type="password" id="senha" name="senha" required />
            </div>
          </div>

          <button>Entrar</button>

          <div className={styles.semCadastro}>
            <p>
              Não tem conta? <Link className={styles.btnCadastro} href="/login/cadastro">Cadastre-se</Link>
            </p>
          </div>
        </form>
      </div>
    </main>
  );
}
