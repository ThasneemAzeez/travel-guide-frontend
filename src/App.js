import logo from './logo.svg';
import './App.css';
import Frontpage from './components/Frontpage';
import FormPage from './components/FormPage';
import Search from './components/Search';
import Viewall from './components/Viewall';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Frontpage/>}/>
      <Route path='/formpage' element={<FormPage/>}/>
      <Route path='/search' element={<Search/>}/>
      <Route path='/viewall' element={<Viewall/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
