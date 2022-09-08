import './App.css';
import {Routes, Route, Navigate, Link} from 'react-router-dom';
import ErrorPage from './views/ErrorPage';
import HeaderForm from './components/HeaderForm';
import DisplayPeople from './views/DisplayPeople';
import DisplayPlanet from './views/DisplayPlanet';

function App() {
  return (
    <div className='App'>
      <h1>Luke APIwalker</h1>
      <HeaderForm/>

      <Routes>
        <Route path="/people/:id" element={<DisplayPeople />} />
        <Route path="/planet/:id" element={<DisplayPlanet />} />
      </Routes>

    </div>
  );
}

export default App;
