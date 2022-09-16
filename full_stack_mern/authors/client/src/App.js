import './App.css';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './views/Dashboard';
import CreateAuthor from './views/CreateAuthor'
import UpdateAuthor from './views/UpdateAuthor';
import AuthorDetails from './views/AuthorDetails';
import ErrorPage from './views/ErrorPage';

function App() {
  return (
    <div className="container mt-5">
      <h1>Favorite Authors</h1>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/new" element={<CreateAuthor />} />
        <Route path="/edit/:id" element={<UpdateAuthor />} />
        <Route path="/details/:id" element={<AuthorDetails />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
