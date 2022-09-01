import PersonaCard from './components/PersonaCard';
import birthdayCounter from './components/birthdayCounter';
import './App.css';

function App() {
  return (
    <div className="App">
      <PersonaCard firstName={"Jane"} lastName= {"Doe"} age= {45} hairColor = {"Black"}/>
      <birthdayCounter />
    <div>
    <PersonaCard firstName={"John"} lastName= {"Smith"} age= {88} hairColor = {"Brown"}/>
    <birthdayCounter />

    </div>
    </div>
  );
}

export default App;
