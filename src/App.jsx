import React from 'react';
import './assets/css/base/base.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './paginas/Home';
import Sobre from './paginas/Sobre';
import Post from './paginas/Post';
import Pagina404 from './paginas/Pagina404';
import Cabecalho from './componentes/cabecalho';

function App() {

  return (
    <Router>
      <Cabecalho />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/sobre' component={Sobre} />
        <Route path='/posts/:id' component={Post} />
        <Route component={Pagina404} />
      </Switch>
    </Router>
  )
}

export default App;
