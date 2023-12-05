
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Activites from './Activites';
import Addactivities from './Addactivities';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' exact Component={Login}/>
        <Route path='/Register' exact Component={Register}/>
        <Route path='/activities' exact Component={Activites}/>
        <Route path='/addactivities' exact Component={Addactivities}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
