
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TodosPortafolios from './componentes/TodosPortafolios';
import NuevoPortafolio from './componentes/NuevoPortafolio';
import Portafolio from './componentes/Portafolio';
import ActualizarPortafolio from './componentes/ActualizarPortafolio';
import './componentes/Nuevo.css';

const App = () => {
  return (
    <div className="container-total">
      <BrowserRouter>
        <Switch>
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
