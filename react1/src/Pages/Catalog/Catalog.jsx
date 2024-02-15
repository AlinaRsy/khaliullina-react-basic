import product1 from '../../assets/imgs/products/t1.jpg';
import Catalog from '../../components/Catalog/Catalog';
import s from './Catalog.module.css';

export default function CatalogPage(){
    return(
        <div class={s.catalog}>
            <div class="container">
                <Catalog/>
            </div>
        </div>
    )
}