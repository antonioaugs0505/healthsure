"use client";
import Link from "next/link";
import styles from "../../styles/Login.module.css";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const router = useRouter();
  const [usuario, setUsuario] = useState({
    info: "login",
    email: "",
    senha: "",
  });
  const [msgStatus, setMsgStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/healthsureapi/webapi/usuarios/login", {
      method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nmEmail: usuario.email,
          nmSenha: usuario.senha,
        }),
      });

      if (response.ok) {
        const user = await response.json();

        if (user) {
          const token = Math.random().toString(36).substring(2) + Math.random().toString(36).substring(2);
          sessionStorage.setItem("token-user", token);
          process.env.NEXT_PUBLIC_TOKEN_USER = token;

          setMsgStatus("Login realizado com SUCESSO!");

          setTimeout(() => {
            setMsgStatus("");
            router.push("/principal");
          }, 5000);
        } else {
          setMsgStatus("USUÁRIO E OU SENHA INVÁLIDOS!");
          setTimeout(() => {
            setMsgStatus("");
            setUsuario({
              info: "login",
              email: "",
              senha: "",
            });
          }, 5000);
        }
      }
    } catch (error) {
      // Tratar erros
    }
  };

  return (
    <main className={styles.container}>
      <div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <legend>LOGIN</legend>

          <div className={styles.inputForm}>
            <div className={styles.inputGroup}>
              <label htmlFor="idEmail">email</label>
              <input


                type="email"
                id="idEmail"
                name="email"
                value={usuario.email}
                onChange={(e) => setUsuario({ ...usuario, email: e.target.value })}
                required


              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="senha">Senha</label>
              <input
                type="password"
                id="senha"
                name="senha"
                value={usuario.senha}
                onChange={(e) => setUsuario({ ...usuario, senha: e.target.value })}
                required


              />
            </div>
          </div>

          <button type="submit">Entrar</button>

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
