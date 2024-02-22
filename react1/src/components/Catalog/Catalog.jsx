import s from './Catalog.module.css';
import CatalogCard from './CatalogCard/CatalogCard';
import {catalog} from '../../data';

export default function Catalog({value}){
    const products = catalog.filter(product=>product.productName.toLowerCase().includes(value.toLowerCase()));
    console.log(catalog);
    return(
            <div className={s.catalog__inner}>
                {   
                    products.map((card)=>{
                    return <CatalogCard id={card.id} remains={card.remains} productImg={card.productImg} productName={card.productName} productText={card.productText} productPrice={card.productPrice}/>
                    })
                }
            </div>

    )
}