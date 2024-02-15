import s from './Catalog.module.css';
import CatalogCard from './CatalogCard/CatalogCard';
import t1 from '../../assets/imgs/products/t1.jpg';
import t2 from '../../assets/imgs/products/t2.jpg';
import t3 from '../../assets/imgs/products/t3.jpg';
import t4 from '../../assets/imgs/products/t4.jpg';
import t5 from '../../assets/imgs/products/t5.jpg';
import t6 from '../../assets/imgs/products/t6.jpg';

export default function Catalog(){
    return(
            <div class={s.catalog__inner}>
                <CatalogCard productImg={t1} productName="Пиджак DIOR MOLLET" productPrice="900"/>
                <CatalogCard productImg={t2} productName="Сумка CHANEL PMD " productPrice="1000"/>
                <CatalogCard productImg={t3} productName="Платье PRADA KIKI" productPrice="1070"/>
                <CatalogCard productImg={t4} productName="Брюки BALENCIAGA" productPrice="877"/>
                <CatalogCard productImg={t5} productName="Рубашка BALENCIAGA" productPrice="699"/>
                <CatalogCard productImg={t6} productName="Пиджак BALENCIAGA" productPrice="1399"/>
            </div>
    )
}