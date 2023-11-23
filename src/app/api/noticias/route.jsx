import { NextResponse } from "next/server";

export async function GET(request, {params}){

    const response = await fetch("http://localhost:8080/healthsureapi/webapi/noticias")
    const noticia = await response.json()


    return NextResponse.json(noticia)

}