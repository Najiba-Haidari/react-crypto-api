
import './App.css'
import {Route, Routes} from 'react-router-dom';
import Currencies from './components/pages/Currencies.jsx';
import Main from "./components/pages/Main.jsx";
import Price from './components/pages/Price.jsx';
import Nav from './components/Nav.jsx';


function App() {

  return (
    <div>
    <Nav/>
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/currencies' element={<Currencies/>}/>
      <Route path='/price' element={<Price/>}/>
      <Route path='/price/:symbol' element={<Price/>}/>
    </Routes>
 
    </div>
  )
}

export default App
