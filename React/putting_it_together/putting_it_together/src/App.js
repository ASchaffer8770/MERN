import PersonaCard from './components/PersonaCard';
import './App.css';

function App() {
  return (
    <div className="App">
      <PersonaCard firstName={"Jane"} lastName= {"Doe"} age= {45} hairColor = {"Black"}/>
      <PersonaCard firstName={"John"} lastName= {"Smith"} age= {88} hairColor = {"Brown"}/>
    </div>
  );
}

export default App;
