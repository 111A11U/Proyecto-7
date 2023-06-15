import './App.css';
import { Routes,Route } from 'react-router-dom';
import Login from './components/Login';
import Listado from './components/Listado';
import Detail from './components/Detail';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/Listado' element={<Listado />} />
      <Route path='/Detail/:nombre/:imagen/:altura/:dimensiones/:material/:color/:linea' element={<Detail />} />
    </Routes>

  );

}

<nav>
</nav>

export default App;