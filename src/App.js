import logo from './logo.svg';
import './App.css';
import Frontpage from './components/Frontpage';
import FormPage from './components/FormPage';
import Search from './components/Search';

function App() {
  return (
    <div>
      <Frontpage/>
      <FormPage/>
      <Search/>
    </div>
  );
}

export default App;
