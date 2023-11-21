import styles from "../../styles/Cabecalho.module.css"
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import Image from "next/image";
import Link from "next/link";



export default function Cabecalho(){
    return(
        <header className={styles.cabecalho}>

            <div className={styles.redes}>
                <a href="https://www.instagram.com/"><FaInstagram></FaInstagram></a>
                <a href="https://www.youtube.com/"><FaYoutube></FaYoutube></a>
                <a href="https://www.facebook.com/"><FaFacebook></FaFacebook></a>
            </div>

            <figure>
                <Image className={styles.logo} src="/img/logo.png" width={360} height={300}></Image>
            </figure>

            <Link href="/login" className={styles.linkLogin}>LOGIN</Link>

        </header>
    )
}