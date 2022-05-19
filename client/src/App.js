
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TodosPortafolios from './componentes/TodosPortafolios';
import NuevoPortafolio from './componentes/NuevoPortafolio';
import Portafolio from './componentes/Portafolio';
import ActualizarPortafolio from './componentes/ActualizarPortafolio';
import Login from './componentes/Login';
import Home from './componentes/Home';

const App = () => {
  return (
    <div className="container-total">
      <BrowserRouter>
        <Switch>
          <Route path="/home" render={() => <Home></Home>}></Route>
          <Route path="/login" render={() => <Login></Login>}></Route>
          <Route path="/" exact render={() => <TodosPortafolios></TodosPortafolios>}></Route>
          <Route path="/nuevo" render={() => <NuevoPortafolio></NuevoPortafolio>}></Route>
          <Route path="/portafolio/:id" exact render={() => <Portafolio></Portafolio>}></Route>
          <Route path="/portafolio/editar/:id" render={() => <ActualizarPortafolio></ActualizarPortafolio>}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
