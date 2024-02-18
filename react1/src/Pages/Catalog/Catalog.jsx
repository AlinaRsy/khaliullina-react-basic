import product1 from '../../assets/imgs/products/t1.jpg';
import Catalog from '../../components/Catalog/Catalog';
import s from './Catalog.module.css';
import Search from './Search/Search';
import { useState } from 'react';
export default function CatalogPage(){
    const [search, setSearch] = useState('');
    function handleSearch(event){
        setSearch(event.target.value);
    }
    return(
        <div className={s.catalog}>
            <div className="container">
                <Search value={search} onChange={handleSearch}/>
                <Catalog value={search}/>
            </div>
        </div>
    )
}