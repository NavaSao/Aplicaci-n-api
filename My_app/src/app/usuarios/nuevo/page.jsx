export default function Nuevo(){
    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <form className="col-6 mt-5" action="" >
                <div className="card">
                    <div className="card-header">
                        <h1>Nuevo usuario</h1>
                    </div>
                    <div className="card-body">
                        <input style={{height:"70px"}} className="form-control mb-3" type="text" id="nombre" placeholder="Nombre"autoFocus></input>
                        <input style={{height:"70px"}} className="form-control mb-3" type="text" id="usuario" placeholder="Usuario"autoFocus></input>
                        <input style={{height:"70px"}} className="form-control mb-3" type="text" id="password" placeholder="Password"autoFocus></input>
                    </div>
                    <div className="card-footer">
                    <button style={{height:"60px"}} className="btn btn-primary col-12">Guardar</button>
                    </div>
                </div>
            </form>
        </div>
    );
}
