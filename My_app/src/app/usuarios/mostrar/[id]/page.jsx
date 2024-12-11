export default function Noticia({params}){
    return(
        <>
            <h1>Estas en noticias</h1>
            <p>{params.id}</p>
        </>
    );
}