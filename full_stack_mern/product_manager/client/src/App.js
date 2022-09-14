import './App.css';
import { Routes, Route } from 'react-router-dom';
import ProductDetails from './views/ProductDetails';
import TestPage from './views/TestPage';
import UpdateProducts from './views/UpdateProducts'
import ErrorPage from './views/ErrorPage';
import CreateShowProducts from './views/CreateShowProducts';


function App() {
  return (
    <div className="App">
      <h1>Product Manager</h1>

      <Routes>
        <Route path="/test" element={<TestPage />} />
        <Route path="/" element={<CreateShowProducts />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/products/edit/:id" element={<UpdateProducts />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
