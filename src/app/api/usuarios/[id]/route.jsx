import { NextResponse } from "next/server";

export async function GET(request, {params}){

    const response = await fetch("http://localhost:8080/healthsureapi/webapi/usuarios")
    const usuarios = await response.json()


    return NextResponse.json(usuarios)

}

// TESTE

const handleLogin = async (email,senha)=>{
    const response = await fetch("http://localhost:8080/healthsureapi/webapi/usuarios")
    const usuarios = await response.json()

    try{
        for (let x = 0; x < usuarios.length; x++) {
            const userFile = usuarios[x];

            if(userFile.nmEmail == email && userFile.nmSenha == senha){
                return userFile;
            }
        }
        return null;
    }catch(error){
        console.log(error);
 }
}

//Criando a função do CADASTRO
const handleCadastrar = async (email,nome,senha)=>{
    const response = await fetch("http://localhost:8080/healthsureapi/webapi/usuarios")
    const usuarios = await response.json()

    try{
        
        //Gerando o ID do usuário:
        const id =  (usuarios.usuarios[usuarios.usuarios.length-1].idUsuario + 1);

        //Criando o objeto do usuário:
        const user = {
            "idUsuario":id,
            "nmUsuario":nome,
            "nmEmail":email,
            "nmSenha":senha
        }

        //Adicionando o usuário no array:
        usuarios.usuarios.push(user);

        //Salvando o arquivo:
        await fs.writeFile(process.cwd() + '/src/app/api/base/data.json', JSON.stringify(usuarios));

        return user;
    }catch(error){
        console.log(error);
 }
}

export async function POST(request, response){
    //Pegando os dados do request com o await e destructuring.
    const {email,nome,senha} = await request.json();

    console.log(nome,email,senha);

    // if(info == "login"){
        return  NextResponse.json( await handleLogin(email,senha));
    // } else if(info == "cadastro"){
    //     return  NextResponse.json( await handleCadastrar(email,nome,senha));
    // }
    // return NextResponse.json({"status":false});
}