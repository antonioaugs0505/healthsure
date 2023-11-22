"use client"
import Cabecalho from "@/components/Cabecalho/Cabecalho";
import Image from "next/image"
import { useEffect, useState } from "react"

export default function Principal(){

    const [noticia, setNoticia] = useState([]);


    useEffect(() => {

        fetch("http://localhost:8080/noticiasapi/webapi/noticia")
        .then((response)=> response.json())
        .then((response)=> setNoticia(response))
        .catch(error=> console.error(error));


    }, [])

console.log(noticia)



return(


/*{ <ul>

{
    noticia.map((noticia) =>(

        <li key={noticia.id}>
            <p>{noticia.nomeTitulo}</p>
          


        </li>



    ))
}



</ul> }*/



)


}