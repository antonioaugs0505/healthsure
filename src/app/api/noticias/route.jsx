import { NextResponse } from "next/server";

export async function GET() {
  const response = await fetch(
    "http://localhost:8080/healthsureapi/webapi/noticias"
  );
  const noticias = await response.json();

  return NextResponse.json(noticias);
}
