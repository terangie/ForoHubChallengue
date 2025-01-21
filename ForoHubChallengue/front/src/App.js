
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './components/navbar';
import TopicoDetail from './components/topicoDetail';
import Topicos from './components/topicos';
import Account from './components/account';
import PostTopic from './components/postTopico';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <div className='main'>
        <Routes>
          <Route path="/" element={<div><Topicos/></div>}/>             
          <Route exact path={'/detail/:id'} element={<div><TopicoDetail/></div>}/>
        </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
