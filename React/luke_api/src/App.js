import './App.css';
import {Routes, Route} from 'react-router-dom';

const Home = () => {
  return (
    <div>
        <h2>Home.jsx</h2>
    </div>
  )
}

const About = () => {
  return (
    <div>
        <h2>About.jsx </h2>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <h1>Star Wars API</h1>
      <h2>Header can go here</h2>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </div>
  );
}

export default App;
