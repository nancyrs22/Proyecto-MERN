import React, {useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import './Nuevo.css'

const Portafolio = () => {
    const {id} = useParams();
    const [portafolio, setPortafolio] = useState({});

    useEffect(() => {
        axios.get("http://localhost:8000/api/portafolios/"+id)
            .then(res => {
                console.log(res.data);
                setPortafolio(res.data);
            })
            .catch(err=>console.log(err));
    },[])
    
    return(

        
        <div className="container-p">
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
                        <p>{portafolio.email}</p>
                        <p>{portafolio.telefono}</p>
                        <p>{portafolio.ubicacion}</p>  
                    </div>
                </div>
            </div>

            <div className="container-bot">
                <div className="area">
                    {portafolio.listaTi?.map((item,i) => (
                    <div key={i} className="area">
                        <span className="titulo">{item.text}</span>
                        
                        {portafolio.listaCon?.map((item,j) => (
                        <div key={j} className="contenido">
                            <span>{item.text}</span>
                        </div>
                    ))}
                    </div>
                    ))}
                    

                </div>

            </div>

            <div className="acciones">
                <Link to={`/portafolio/editar/${portafolio._id}` } className="btn btn-warning">Editar</Link>
                <Link to="/" className="btn btn-primary">Back</Link>
            </div>

        </div>
        
    )

}

export default Portafolio;