import axios from 'axios';
import './App.css';
import DisplayPoke from './components/DisplayPoke';
import FetchPoke from './views/FetchPoke';

function App() {
  return (
    <div className="App">
        <FetchPoke />
        
    </div>
  );
}

export default App;
