import product1 from '../../assets/imgs/products/t1.jpg';
import Catalog from '../../components/Catalog/Catalog';
import s from './Catalog.module.css';
import { catalog } from '../../data'
import Search from './Search/Search';
import { useState } from 'react';
export default function CatalogPage(){
    const [search, setSearch] = useState('');
    const [sorting, setSorting] = useState(0);
    function sort(event){
        const sortValue = event.target.value;
        setSorting(sortValue);
    }

    function handleSearch(event){
        setSearch(event.target.value);
    }
    return(
        <div className={s.catalog}>
            <div className="container">
                <div className={s.sort}>
                    <Search value={search} onChange={handleSearch}/>
                    <select value={sorting} onChange={sort} className={s.sort__select} name="" id="">
                        <option value="0" hidden>Сортировать: </option>
                        <option value="price_asc">По возрастанию цены</option>
                        <option value="price_desc">По убыванию цены</option>
                        <option value="product_desc">По количеству товаров</option>
                    </select>
                </div>
                
                <Catalog value={search} sorting={sorting}/>
            </div>
        </div>
    )
}