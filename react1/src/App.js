import './App.css';
import CatalogPage from './Pages/Catalog/Catalog';
import MainPage from './Pages/Main/Main';
import ProductPage from './Pages/Product/Product';
import Header from './components/Header/Header';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element= {<MainPage/>}/>
      <Route path='/catalog' element={<CatalogPage/>}/>
      <Route path='/catalog/:id' element={<ProductPage/>}/>
    </Routes>
    
    </>
  );
}

export default App;
