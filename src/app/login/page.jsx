// "use client";
// import Link from "next/link";
// import styles from "../../styles/Login.module.css";

// import { useState } from "react"; // Removido o useEffect, pois não parece necessário neste caso
// import { useRouter } from "next/router"; // Importando o hook useRouter

// export default function Login() {
//   const [nmEmail, setEmail] = useState("");
//   const [nmSenha, setSenha] = useState("");


//   async function login() {
//     console.warn(nmEmail, nmSenha);
//     let item = { nmEmail, nmSenha};
//     try {
//       let resultado = await fetch(
//         "http://localhost:8080/healthsureapi/webapi/usuarios/login",
//         {
//           method: "POST",
//           mode: "no-cors",
//           headers: {
//             "Content-Type": "application/json",
//             Accept: "application/json",
//           },
//           body: JSON.stringify(item),
//         }
//       );

//       resultado = await resultado.json();
//       localStorage.setItem("user-info", JSON.stringify(resultado));
      
//       // Usando o método push do useRouter para navegação
//       router.push("/principal");
//     } catch (error) {
//       console.error("Erro no login:", error);
//       // Adicione lógica para lidar com erros, por exemplo, exibir uma mensagem de erro.
//     }
//   }

//   return (
//     <main className={styles.container}>
//       <div>
//         <form className={styles.form}>
//           <legend>LOGIN</legend>

//           <div className={styles.inputForm}>
//             <div className={styles.inputGroup}>
//               <label htmlFor="idEmail">email</label>
//               <input
//                 type="email"
//                 id="idEmail"
//                 name="email"
//                 required
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </div>

//             <div className={styles.inputGroup}>
//               <label htmlFor="senha">Senha</label>
//               <input
//                 type="password"
//                 id="senha"
//                 name="senha"
//                 required
//                 onChange={(e) => setSenha(e.target.value)}
//               />
//             </div>
//           </div>

//           <button type="button" onClick={login}>
//             Entrar
//           </button>

//           <div className={styles.semCadastro}>
//             <p>
//               Não tem conta?{" "}
//               <Link className={styles.btnCadastro} href="/login/cadastro">
//                 Cadastre-se
//               </Link>
//             </p>
//           </div>
//         </form>
//       </div>
//     </main>
//   );
// }

"use client";
import Link from "next/link";
import styles from "../../styles/Login.module.css";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const router = useRouter();
  const [usuario, setUsuario] = useState({
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
            router.push("/");
          }, 5000);
        } else {
          setMsgStatus("USUÁRIO E OU SENHA INVÁLIDOS!");
          setTimeout(() => {
            setMsgStatus("");
            setUsuario({
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
