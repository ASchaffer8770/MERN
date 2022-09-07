import './App.css';
import {Routes, Route, Navigate, Link} from 'react-router-dom';
import ErrorPage from './views/ErrorPage';
import HeaderForm from './components/HeaderForm';

function App() {
  return (
    <div className='App'>
      <h1>Luke APIwalker</h1>
      <HeaderForm/>

      <Routes>
        <Route></Route>
      </Routes>
    </div>
  );
}

export default App;
