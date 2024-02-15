import s from './Catalog.module.css';
import CatalogCard from './CatalogCard/CatalogCard';
import {products} from '../../data';

export default function Catalog(){
    return(
            <div class={s.catalog__inner}>
                {products.map((card)=>{
                    return <CatalogCard productImg={card.productImg} productName={card.productName} productPrice={card.productPrice}/>
                })
                    
                }
{/*                 
                <CatalogCard productImg={t2} productName="Сумка CHANEL PMD " productPrice="1000"/>
                <CatalogCard productImg={t3} productName="Платье PRADA KIKI" productPrice="1070"/>
                <CatalogCard productImg={t4} productName="Брюки BALENCIAGA" productPrice="877"/>
                <CatalogCard productImg={t5} productName="Рубашка BALENCIAGA" productPrice="699"/>
                <CatalogCard productImg={t6} productName="Пиджак BALENCIAGA" productPrice="1399"/> */}
            </div>
    )
}