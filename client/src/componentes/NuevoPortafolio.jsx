import React, {useState} from "react";
import axios from "axios";
import { useHistory, Link } from "react-router-dom";


const NuevoPortafolio = () => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [imagen, setImagen] = useState("");
    const [cargo, setCargo] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [ubicacion, setUbicacion] = useState("");

    const [enlaces, setEnlaces] = useState("");
    const [listaEn, setListaEn] = useState([]);

    const [titulo, setTitulo] = useState("");
    const [listaTi, setListaTi] = useState([]);

    const [contenido, setContenido] = useState("");
    const [listaCon, setListaCon] = useState([]);

    const [errors, setErrors] = useState({});
    const history = useHistory();

    function addTitulo(titulo){
        

        if(setTitulo==="") return;

        setListaTi([...listaTi,{text:titulo, completed:false}]);

        setTitulo("");
    }

    function addEnlaces(enlaces){
        

        if(setEnlaces==="") return;

        setListaEn([...listaEn,{text:enlaces, completed:false}]);
        // console.log(enlaces);
        setEnlaces("");
    }

    function addContenido(contenido){
        

        if(setContenido==="") return;

        setListaCon([...listaCon,{text:contenido, completed:false}]);
        // console.log(enlaces);
        setContenido("");
    }

    const guardarPortafolio = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/portafolios", {
            nombre, apellido, imagen, cargo, email, telefono,
            ubicacion, listaEn, listaTi, listaCon
        }, {withCredentials:true})
            .then(res => history.push("/"))
            .catch(err => {
                if(err.response.status === 401)
                {
                    history.push("/login")
                }
                else{
                    setErrors(err.response.data.errors);

                }
            });
    }

    return(
        <div>
            <h1>Nuevo Portafolio</h1>
            <form onSubmit={guardarPortafolio}>
                <div className="form-group">
                    <label htmlFor="nombre">Nombre: </label>
                    <input type="text" id="nombre" name="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)}></input>
                    {errors.nombre ? <span className="text-danger">{errors.nombre.message}</span> : null}
                </div>
                <div className="form-group">
                    <label htmlFor="apellido">Apellido: </label>
                    <input type="text" id="apellido" name="apellido" value={apellido} onChange={(e) => setApellido(e.target.value)}></input>
                    {errors.apellido ? <span className="text-danger">{errors.apellido.message}</span> : null}
                </div>
                <div className="form-group">
                    <label htmlFor="imagen">URL Imagen:</label>
                    <input type="text" id="imagen" name="imagen" value={imagen} onChange={(e) => setImagen(e.target.value)} className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="cargo">Cargo:</label>
                    <input type="text" id="cargo" name="cargo" value={cargo} onChange={(e) => setCargo(e.target.value)}></input>
                    {errors.cargo ? <span className="text-danger">{errors.apellido.message}</span> : null}
                </div>
                <div className="form-group">
                        <label htmlFor="email">E-mail</label>
                        <input type="email" name="email" id="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                        { errors.email ? <span className="text-danger">{errors.email.message}</span> : null }
                </div>
                <div className="form-group">
                    <label htmlFor="telefono">Telefono:</label>
                    <input type="text" id="telefono" name="telefono" value={telefono} onChange={(e) => setTelefono(e.target.value)}></input>
                    {errors.telefono ? <span className="text-danger">{errors.telefono.message}</span> : null}
                </div>
                <div className="form-group">
                    <label htmlFor="ubicacion">Ubicacion:</label>
                    <input type="text" id="ubicacion" name="ubicacion" value={ubicacion} onChange={(e) => setUbicacion(e.target.value)}></input>
                    {errors.ubicacion ? <span className="text-danger">{errors.ubicacion.message}</span> : null}
                </div>


                <div>
                    <div>
                        <p>Enlaces de Portafolio</p>
                        {listaEn.map((item, i)=> (
                            <div key={i}>
                                <span>{item.text}</span>    
                            </div>
                        ))}
                    </div>
                    <div>
                        <input onChange={e => setEnlaces(e.target.value)}
                        value={enlaces}></input>
                        <button type="button" onClick={() => addEnlaces(enlaces)}>Add Link</button>
                    </div>
                </div>



                <div>
                    <div>
                        <p>Campos que deseas</p>
                        {listaTi.map((item, i)=> (
                            <div key={i}>
                                <span>{item.text}</span>    
                            </div>
                        ))}
                    </div>
                    <div>
                        <input onChange={e => setTitulo(e.target.value)}
                        value={titulo}></input>
                        <button type="button" onClick={() => addTitulo(titulo)}>Add Titulo</button>
                    </div>
                </div>



                {/* <div>
                    <div>
                        <p>Campos que deseas</p>
                        {listaTi.map((item, i)=> (
                            <div key={i}>
                                <span>{item.text}</span>


                                <div>
                                    <div>
                                        {listaCon.map((item, j)=> (
                                        <div key={j}>
                                            <span>{item.text}</span>    
                                        </div>
                                        ))}
                                    </div>
                                <div>
                                    <input onChange={e => setContenido(e.target.value)}
                                    value={contenido}></input>
                                    <button type="button" onClick={() => addContenido(contenido)}>Add Contenido</button>
                                </div>
                            </div>


                            </div>
                        ))}
                    </div>
                    <div>
                        <input onChange={e => setTitulo(e.target.value)}
                        value={titulo}></input>
                        <button type="button" onClick={() => addTitulo(titulo)}>Add Titulo</button>
                    </div>
                </div> */}


                <div>
                    <div>
                        {listaCon.map((item, i)=> (
                            <div key={i}>
                                <span>{item.text}</span>    
                            </div>
                        ))}
                    </div>
                    <div>
                        <input onChange={e => setContenido(e.target.value)}
                        value={contenido}></input>
                        <button type="button" onClick={() => addContenido(contenido)}>Add Contenido</button>
                    </div>
                </div>

                <input type="submit" value="Guardar" className="btn btn-success" />
            </form>
            


            <Link to="/" className="btn btn-primary">Back</Link>
        </div>
    )
}

export default NuevoPortafolio;