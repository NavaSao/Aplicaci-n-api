import Boton from "@/components/boton";
import axios from "axios";
import Link from "next/link";

async function getUsuarios(){
    const url="http://localhost:3000";
    const usuarios= await axios.get(url);
    return usuarios.data;
}

export default async function Noticias(){
    var usuarios=await getUsuarios();
    return(
        <div>
            <h1>Usuarios</h1>
            <table className="table">
            <thead>
            <tr>
                <th>Id</th>
                <th>Nombre</th>
                <th>Usuarios</th>
            </tr>
            </thead>
            <tbody>
                {
                    usuarios.map((usuario,i)=>(
                        <tr key="{i}">
                        <td>{i+1}</td>
                        <td>{usuario.nombre}</td>
                        <td>{usuario.usuario}</td>
                        </tr>
                    ))
                }
            </tbody>
            </table>
            <Boton />
        </div>
    );
}