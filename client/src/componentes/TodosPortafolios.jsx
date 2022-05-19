import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link, useHistory} from "react-router-dom";
import ButtonLogout from "./ButtonLogout";
const TodosPortafolios = () => {

    const [portafolios, setPortafolios] = useState([]);


    useEffect(() => {
        axios.get("http://localhost:8000/api/portafolios/", {withCredentials:true})
            .then(res => setPortafolios(res.data))
            .catch(err => console.log(err));
    },[])

    const borrarPortafolio = idPortafolio => {
        axios.delete("http://localhost:8000/api/portafolios/"+idPortafolio)
        .then(res => {
            let nuevaLista = portafolios.filter(portafolio => portafolio._id !== idPortafolio);
            setPortafolios(nuevaLista);
        })
    }

    return(
        <div>
            <h1>Portafolios</h1>
            <Link className="btn btn-success" to="/nuevo">Agregar Portafolio</Link>
            <ButtonLogout />
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Foto</th>
                        <th>Nombre</th>
                        <th>Cargo</th>
                        <th>Enlaces</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        portafolios.map((portafolio, index) => (
                            <tr key={index}>
                                <td><img className="img-fluid" src={portafolio.imagen} /></td>
                                <td><Link to={`/portafolio/${portafolio._id}`}>{portafolio.apellido}, {portafolio.nombre}</Link></td>
                                <td>{portafolio.cargo}</td>
                                <td>
                                    <div className="enlaces">
                                        {portafolio.listaEn?.map((item,i) => (
                                        <div key={i}>
                                            <span>{item.text}</span>
                                        </div>
                                        ))}
                                    </div>
                                </td>
                                <td>
                                    <button className="btn btn-danger" onClick={() => borrarPortafolio(portafolio._id)}>Elimiar</button>
                                    
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default TodosPortafolios;