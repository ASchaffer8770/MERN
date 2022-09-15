import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import ProductDetails from './views/ProductDetails';
import TestPage from './views/TestPage';
import ErrorPage from './views/ErrorPage';
import CreateShowProducts from './views/CreateShowProducts';
import UpdateProduct from './views/UpdateProduct';


function App() {
  return (
    <div className="App">
      <h1>Product Manager</h1>

      <Routes>
        <Route path="/test" element={<TestPage />} />
        <Route path="/" element={<CreateShowProducts />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/products/edit/:id" element={< UpdateProduct/>} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
