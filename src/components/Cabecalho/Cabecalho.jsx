"use client"
import styles from "../../styles/Cabecalho.module.css";
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";


export default function Cabecalho() {

const [tokenUser, setTokenUser] = useState(null)


useEffect(() => {
  const token = sessionStorage.getItem("token-item");
  setTokenUser(token)
}, [])

 const logout = () => {
      sessionStorage.removeItem("token-item");
      router.push("/");
    };

   
    return (
      <header className={styles.cabecalho}>
        <div className={styles.redes}>
          <a href="https://www.instagram.com/"><FaInstagram></FaInstagram></a>
          <a href="https://www.youtube.com/"><FaYoutube></FaYoutube></a>
          <a href="https://www.facebook.com/"><FaFacebook></FaFacebook></a>
        </div>

        <figure>
          <Image className={styles.logo} src="/img/logo.png" width={360} height={300}></Image>
        </figure>

        <Link href={tokenUser ? "/" : "/login"} onClick={tokenUser ? logout : null} className={styles.linkLogin}>
          {tokenUser ? "SAIR" : "LOGIN"}
        </Link>
      </header>
    );
  } 

