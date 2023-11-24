import { NextResponse } from "next/server";

export async function GET(request, {params}){

    const response = await fetch("http://localhost:8080/healthsureapi/webapi/usuarios")
    const usuarios = await response.json()
    return NextResponse.json(usuarios)

}


const handleLogin = async (email,senha)=>{
    const response = await fetch("http://localhost:8080/healthsureapi/webapi/usuarios")
    const usuarios = await response.json()

    try{
        for (let i = 0; i < usuarios.length; i++) {
            const arqUsuario = usuarios[i];

            if(arqUsuario.nmEmail == email && arqUsuario.nmSenha == senha){
                return arqUsuario;
            }
        }
        return null;
    }catch(error){
        console.log(error);
 }
}

//Criando a função do CADASTRO
const handleCadastrar = async (email,nome,senha,cpf)=>{
    const response = await fetch("http://localhost:8080/healthsureapi/webapi/usuarios/cadastro")
    const usuarios = await response.json()

    try{
        
        //Gerando o ID do usuário:
        const id =  (usuarios[usuarios.length-1].idUsuario + 1);

        //Criando o objeto do usuário:
        const user = {
            "idUsuario":id,
            "nmUsuario":nome,
            "nmEmail":email,
            "nmSenha":senha,
            "nrCpf":cpf,
        }

        //Adicionando o usuário no array:
        usuarios.usuarios.push(user);

        //Salvando o arquivo:
        response, JSON.stringify(usuarios);

        return user;
    }catch(error){
        console.log(error);
 }
}

export async function POST(request, response){
    //Pegando os dados do request com o await e destructuring.
    const {email,nome,senha,cpf} = await request.json();

    if(info == "login"){
        return  NextResponse.json( await handleLogin(email,senha));
     } else if(info == "cadastro"){
        return  NextResponse.json( await handleCadastrar(email,nome,senha,cpf));
     }
    return NextResponse.json({"status":false});
}