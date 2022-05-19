import React, {useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import './Nuevo.css';

const Portafolio = () => {
    const {id} = useParams();
    const [portafolio, setPortafolio] = useState({});

    useEffect(() => {
        axios.get("http://localhost:8000/api/portafolios/"+id, {withCredentials:true})
            .then(res => {
                console.log(res.data);
                setPortafolio(res.data);
            })
            .catch(err=>console.log(err));
    },[])
    
    return(

        
        <div className="container-p">
                        <img src={process.env.PUBLIC_URL + '/static/imagenes/fondo-lista.png'} className="img-fondo-lista"/>

            <div className="container-top">
                <div className="foto">
                    <img className="f-perfil" src ={portafolio.imagen}></img>
                </div>

                <div className="d-personales">
                    <h1>{portafolio. nombre} {portafolio.apellido}</h1>
                    <h3>{portafolio.cargo}</h3>
                </div>

                <div className="d-contacto">
                    <div className="enlaces">
                        {portafolio.listaEn?.map((item,i) => (
                        <div key={i}>
                            <span>{item.text}</span>
                        </div>
                        ))}
                    </div>

                    <div className="contacto">
                        <p><img src={process.env.PUBLIC_URL + '/static/imagenes/email.png'} className="icono" />{portafolio.email}</p>
                        <p><img src={process.env.PUBLIC_URL + '/static/imagenes/telef.png'} className="icono" ></img>{portafolio.telefono}</p>
                        <p><img src={process.env.PUBLIC_URL + '/static/imagenes/ubicacion.png'} className="icono"></img>{portafolio.ubicacion}</p>  
                    </div>
                </div>
            </div>

            <div className="container-bot">
                {/* <div className="area"> */}
                    {portafolio.listaTi?.map((item,i) => (
                    <div key={i} className="d-titulo">
                        <span className="titulo">{item.text}</span>
                        

                    </div>
                    ))}
                    
                    {/* {portafolio.listaCon?.map((item,j) => (
                        <div key={j} className="d-contenido">
                            <span className="contenido">{item.text}</span>
                        </div>
                    ))} */}
                    
                {/* </div> */}

            </div>

            <div className="acciones">
                <Link to={`/portafolio/editar/${portafolio._id}` } className="btn btn-warning">Editar</Link>
                <Link to="/" className="btn btn-primary">Back</Link>
            </div>

        </div>
        
    )

}

export default Portafolio;