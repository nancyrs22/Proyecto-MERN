import axios from 'axios';
import { Link, useHistory } from "react-router-dom";

const Home = () => {

    const history = useHistory();

    return(
        <div >
            <img src={process.env.PUBLIC_URL + '/static/imagenes/fondo.png'} className="img-fondo"/>
            <div className='presentacion'>
                <div className='frases'>
                    <h1 className='frase-1'>Quieres ser visible para buenas empresas</h1>
                    <h2 className='frase-2'>Crea y publica tu CV con nosotros</h2>
                    <h3 className='frase-3'>Regístrate e Inicia sesión aquí</h3>
                    <Link to="/login" className='btn btn-primary'>Register/Login</Link>
                </div>
            </div>
            

        </div>
    )

}

export default Home;