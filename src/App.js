import logo from './logo.svg';
import './App.css';
import Frontpage from './components/Frontpage';
import FormPage from './components/FormPage';
import Search from './components/Search';
import Viewall from './components/Viewall';

function App() {
  return (
    <div>
      <Frontpage/>
      <FormPage/>
      <Search/>
      <Viewall/>
    </div>
  );
}

export default App;
