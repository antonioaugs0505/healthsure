"use client"
import Link from "next/link";
import styles from "../../../styles/Login.module.css";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Cadastro(params) {

    const router = useRouter();

    const [usuario, setUsuario] = useState({
        info: "cadastro",
        nome:"",
        email:"",
        senha:"",
        cpf:""
    })

    const [statusMsg, setStatusMsg] = useState("");
    const [classNameLoginMsg, setClassNameLoginMsg] = useState("")

    useEffect(() =>{
      if(statusMsg == "Cadastro realizado com SUCESSO!"){
        setClassNameLoginMsg("loginSuc");
      }else if(statusMsg == "OCORREU UM ERRO!"){
          setClassNameLoginMsg("loginErr");
      }else{
          setClassNameLoginMsg("login");
      }
  }, [statusMsg]);

  const handleChange = (e)=>{
    const{name, value} = e.target;

    setUsuario({...usuario,[name]:value})
  }

const handleSubmit = async (e) =>{
  e.preventDefault();

  try{
    const response = await fetch("http://localhost:8080/healthsureapi/webapi/usuarios/cadastro",{
      method:"POST",
      headers:{
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nmEmail: usuario.email,
        nmSenha: usuario.senha,
        nmUsuario: usuario.nome,
        nrCpf: usuario.cpf
      }),
    });

    if(response.ok){
      const user = await response.json();

      if(user){
        setStatusMsg("O cadastro foi realizado!")
        setTimeout(()=>{
          setStatusMsg("")
          router.push("/login");
        },5000)
      }else{
        setStatusMsg("Erro ao realizar o cadastro")
        setTimeout(()=>{
          setStatusMsg("")
          setUsuario({
            "info":"cadastro",
            email:"",
            senha:"",
            nome:"",
            cpf:"",
          })
        },5000)
        }
      }
    } catch (error){
    }

  }




  return (
    <main className={styles.container}>
      <div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <legend>CADASTRO</legend>

          <div className={styles.inputForm}>

          <div className={styles.inputGroup}>
              <label htmlFor="idNome">Nome</label>
              <input type="text" id="idNome" name="nome" value={usuario.nome} onChange={handleChange} required />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="idCpf">CPF</label>
              <input type="text" id="idCpf" name="cpf" value={usuario.cpf} onChange={handleChange} required />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="idEmail">email</label>
              <input type="text" id="idEmail" name="email" value={usuario.email} onChange={handleChange} required />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="idSenha">Senha</label>
              <input type="password" id="idSenha" name="senha" value={usuario.senha} onChange={handleChange} required />
            </div>
          </div>


          <h2 className={classNameLoginMsg}>{statusMsg}</h2>

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

