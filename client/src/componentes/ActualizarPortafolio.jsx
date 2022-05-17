import React, {useState, useEffect} from "react";
import axios from "axios";
import { useHistory, useParams, Link} from "react-router-dom";

const ActualizarPortafolio = () => {
    const {id} = useParams();
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

    const [errors,setErrors] = useState({});

    const history = useHistory();

    useEffect(() => {
        axios.get("http://localhost:8000/api/portafolios/"+id)
            .then(res => {
                setNombre(res.data.nombre);
                setApellido(res.data.apellido);
                setImagen(res.data.imagen);
                setCargo(res.data.cargo);
                setEmail(res.data.email);
                setTelefono(res.data.telefono);
                setUbicacion(res.data.ubicacion);
                setEnlaces(res.data.enlaces);
                setTitulo(res.data.titulo);
                setContenido(res.data.contenido);
                setListaEn(res.data.listaEn);
                setListaTi(res.data.listaTi);
                setListaCon(res.data.listaCon);
            })
            .catch(err=>console.log(err));
    },[])

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

    function removeEn(index){
        setListaEn(listaEn.filter((_item, i)=> i !==index));
    }

    function removeTi(index){
        setListaTi(listaTi.filter((_item, i)=> i !==index));
    }

    function removeCon(index){
        setListaCon(listaCon.filter((_item, i)=> i !==index));
    }

    const actualizarPortafolio = e => {
        e.preventDefault();
        axios.put("http://localhost:8000/api/portafolios/"+id,{
            nombre,apellido, imagen, cargo, email, telefono, ubicacion, listaEn, listaTi, listaCon
        })
        .then(res => history.push("/portafolio/"+id))
        .catch(err=>console.log(err));
    }

    return(
        <div>
            <h1>Editar Portafolio</h1>
            <form onSubmit={actualizarPortafolio}>
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
                
                {/* <div className="form-group">
                    <label htmlFor="enlaces">Enlace:</label>
                    <input type="text" id="enlaces" name="enlaces" value={enlaces} onChange={(e) => setEnlaces(e.target.value)}></input>
                </div> */}

                <div>
                    <div>
                        {listaEn.map((item, i)=> (
                            <div key={i}>
                                <span>{item.text}</span> 
                                <button type="button" onClick={() => removeEn(i)}>Borrar</button>   
                            </div>
                        ))}
                    </div>
                    <div>
                        <input onChange={e => setEnlaces(e.target.value)}
                        value={enlaces}></input>
                        <button type="button" onClick={() => addEnlaces(enlaces)}>Add Link</button>
                    </div>
                </div>

                {/* <div className="form-group">
                    <label htmlFor="titulo">Titulo:</label>
                    <input type="text" id="titulo" name="titulo" value={titulo} onChange={(e) => setTitulo(e.target.value)}></input>
                    {errors.titulo ? <span className="text-danger">{errors.titulo.message}</span> : null}
                </div> */}

                <div>
                    <div>
                        {listaTi.map((item, i)=> (
                            <div key={i}>
                                <span>{item.text}</span>  
                                <button type="button" onClick={() => removeTi(i)}>Borrar</button> 
                            </div>
                        ))}
                    </div>
                    <div>
                        <input onChange={e => setTitulo(e.target.value)}
                        value={titulo}></input>
                        <button type="button" onClick={() => addTitulo(titulo)}>Add Titulo</button>
                    </div>
                </div>

                {/* <div className="form-group">
                    <label htmlFor="contenido">Contenido:</label>
                    <input type="text" id="contenido" name="contenido" value={contenido} onChange={(e) => setContenido(e.target.value)}></input>
                    {errors.contenido ? <span className="text-danger">{errors.contenido.message}</span> : null}
                </div> */}

                <div>
                    <div>
                        {listaCon.map((item, i)=> (
                            <div key={i}>
                                <span>{item.text}</span>   
                                <button type="button" onClick={() => removeCon(i)}>Borrar</button> 
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
            
        </div>
    )
}

export default ActualizarPortafolio;