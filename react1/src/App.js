import './App.css';
import CatalogPage from './Pages/Catalog/Catalog';
import CreatePage from './Pages/Create/Create';
import MainPage from './Pages/Main/Main';
import PostsPage from './Pages/Posts/Posts';
import ProductPage from './Pages/Product/Product';
import UsersPage from './Pages/Users/Users';
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
      <Route path='/users' element={<UsersPage/>}/>
      <Route path='/create' element={<CreatePage/>}/>
      <Route path='/posts' element={<PostsPage/>}/>
    </Routes>
    
    </>
  );
}

export default App;
