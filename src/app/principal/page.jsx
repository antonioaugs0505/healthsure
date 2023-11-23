"use client"
import Cabecalho from "@/components/Cabecalho/Cabecalho";
import Image from "next/image"
import styles from "../../styles/Principal.module.css"
import Link from "next/link";
import { FaRobot } from "react-icons/fa";
import { MdSend } from "react-icons/md";
import { BiSolidCommentDetail } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import js from "./chat.js"
import ChatBot from "@/components/ChatBot/Chatbot";



import { useEffect, useState } from "react"

export default function Principal(){

    const [noticia, setNoticia] = useState([]);


    useEffect(() => {

        fetch("http://localhost:8080/healthsureapi/webapi/noticias")
        .then((response)=> response.json())
        .then((response)=> setNoticia(response))
        .catch(error=> console.error(error));


    }, [])

console.log(noticia)


return(
    <main className={styles.home}>

        <Cabecalho></Cabecalho>

        <section className={styles.noticia}>

            <div className={styles.card}> {noticia.map((noticia) =>(

                <div className={styles.cardItem} key={noticia.id}>
                    <Image src={noticia.dsImagem} width={380} alt="imagem" height={260}></Image>
                    <div className={styles.textos}>
                    <h3>{noticia.nomeTitulo}</h3>
                    <h5>Publicação - {noticia.dataNoticia}</h5>
                    <p>{noticia.nomeSubtitulo}</p>
                    <Link className={styles.linkMateria} href={noticia.dsLink}>Leia mais</Link>
                    </div>
                </div>))}
        
            </div>

        </section>


        {/* <ChatBot></ChatBot> */}



    </main>
)

}