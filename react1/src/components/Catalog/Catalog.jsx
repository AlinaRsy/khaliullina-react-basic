import s from './Catalog.module.css';
import CatalogCard from './CatalogCard/CatalogCard';
import {catalog} from '../../data';

export default function Catalog({value, sorting, category, cart, setCart}){
    const products = catalog.filter(product=>product.productName.toLowerCase().includes(value.toLowerCase())
    && product.category == category || category == 0);
    const sortProducts = (sorting, catalog)=>{
        switch(sorting){
            case 'price_asc': return [...catalog].sort((a,b)=>a.productPrice-b.productPrice);
            case 'price_desc': return [...catalog].sort((a,b)=>b.productPrice-a.productPrice);
            case 'product_desc': return [...catalog].sort((a,b)=>b.remains-a.remains);
            default: return catalog;
        }
    }
    const sortAndFilterProducts = sortProducts(sorting, products);
    return(
            <div className={s.catalog__inner}>
                {   
                    sortAndFilterProducts.map((card)=>{
                        return <CatalogCard id={card.id} setCart={()=>setCart([card.id, ...cart])} remains={card.remains} productImg={card.productImg} productName={card.productName} productText={card.productText} productPrice={card.productPrice}/>
                    })
                }
            </div>

    )
}