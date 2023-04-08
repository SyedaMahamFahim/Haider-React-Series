import './App.css';
import{
  Navbar,
  Footer
} from './components/index'

import Home from './pages/Home';
function App() {
  return (
    // updated Code
    <div className="App">
     <Navbar/>
     < Home/>
     <Footer/>
    </div>
  );
}

export default App;
